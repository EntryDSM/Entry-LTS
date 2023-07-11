import axios, { AxiosError } from 'axios';
import { Cookies } from 'react-cookie';
import { ReissueToken } from './user';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000,
});

const cookie = new Cookies();

instance.interceptors.request.use(
  (config) => {
    const accessToken = cookie.get('access_token');
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
      const refreshToken = cookie.get('refresh_token');

      if (status == 401 || error.response.data.message === 'Invalid Token' || status == 404) {
        const originalRequest = config;

        if (refreshToken) {
          ReissueToken(refreshToken)
            .then((res) => {
              cookie.set('access_token', res.access_token, { path: '/' });
              cookie.set('refresh_token', res.refresh_token, { path: '/' });
              if (originalRequest.headers) originalRequest.headers['Authorization'] = `Bearer ${res.access_token}`;
              return axios(originalRequest);
            })
            .catch(() => {
              cookie.remove('access_token');
              cookie.remove('refresh_token');
              window.location.href = '/login';
            });
        } else {
          window.location.href = '/login';
        }
      } else return Promise.reject(error);
    }
  },
);
