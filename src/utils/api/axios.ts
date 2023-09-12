import axios, { AxiosError } from 'axios';
import { ReissueToken } from './user';
import { getCookies, removeTokens, setTokens } from '@/utils/cookies';
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
      const {
        config,
        response: { status },
      } = error;
      const refreshToken = getCookies('refresh_token');

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
              if (originalRequest.headers) originalRequest.headers['Authorization'] = `Bearer ${res.access_token}`;
              return axios(originalRequest);
            })
            .catch(() => {
              removeTokens();
              // window.location.href = `${AUTH_URL}/login`;
            });
        } else {
          // window.location.href = `${AUTH_URL}/login`;
        }
      } else return Promise.reject(error);
    }
  },
);
