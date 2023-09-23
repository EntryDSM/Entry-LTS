import axios, { AxiosError } from 'axios';
import { ReissueToken } from './user';
import { getCookies, removeCookies, removeTokens, setCookies, setTokens } from '@/utils/cookies';
import { AUTH_URL } from '@/constant/env';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = getCookies('access_token');
    const returnConfig = {
      ...config,
    };
    if (accessToken) {
      returnConfig.headers!['Authorization'] = `Bearer ${accessToken}`;
    }
    return returnConfig;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  async (response) => response,
  async (error: AxiosError<AxiosError>) => {
    if (axios.isAxiosError(error) && error.response) {
      const { config } = error;
      const refreshToken = getCookies('refresh_token');
      const authority = getCookies('authority');

      if (
        error.response.data.message === 'Invalid Token' ||
        error.response.data.message === 'Expired Token' ||
        error.response.data.message === 'User Not Found'
      ) {
        const originalRequest = config;

        if (refreshToken) {
          ReissueToken(refreshToken as string)
            .then((res) => {
              setTokens(res.access_token, res.refresh_token);
              setCookies('authority', authority === 'admin' ? 'admin' : 'user');
              if (originalRequest.headers) originalRequest.headers['Authorization'] = `Bearer ${res.access_token}`;
              return axios(originalRequest);
            })
            .catch((res: AxiosError<AxiosError>) => {
              if (
                res?.response?.data.status === 404 ||
                res.response?.data.status === 403 ||
                res?.response?.data.message === 'Expired Token' ||
                res.response?.data.message === 'Invalid Token'
              ) {
                removeTokens();
                removeCookies('authority');
                if (res.response.data.message !== 'Invalid Token') {
                  window.location.href = `${AUTH_URL}/login`;
                }
              }
            });
        } else {
          window.location.href = `${AUTH_URL}/login`;
        }
      } else return Promise.reject(error);
    }
  },
);
