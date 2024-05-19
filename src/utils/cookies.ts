import Cookies, { CookieSetOptions } from 'universal-cookie';
import { COOKIE_DOMAIN } from '../constant/env';

const cookies = new Cookies();

export const setCookies = (key: string | string[], value: string | string[], options?: CookieSetOptions) => {
  if (Array.isArray(key)) {
    key.forEach((_, i) => cookies.set(key[i], value[i], options));
  } else cookies.set(key, value, options);
};

export const getCookies = <T>(key: string | string[]) => {
  let item: T | T[];

  if (Array.isArray(key)) item = key.map((k) => cookies.get<T>(k));
  else item = cookies.get<T>(key);

  return item;
};

export const removeCookies = (key: string | string[], options?: CookieSetOptions) => {
  if (Array.isArray(key)) {
    key.forEach((_, i) => cookies.remove(key[i], options));
  } else cookies.remove(key, options);
};

export const removeTokens = () => {
  removeCookies(['accessToken', 'refreshToken'], {
    path: '/',
    secure: true,
    sameSite: 'none',
    domain: COOKIE_DOMAIN,
  });
};

export const setTokens = (accessToken: string, refreshToken: string) =>
  setCookies(['accessToken', 'refreshToken'], [accessToken, refreshToken], {
    path: '/',
    secure: true,
    sameSite: 'none',
    domain: COOKIE_DOMAIN,
  });
