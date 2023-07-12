export const COOKIE_DOMAIN = process.env.NODE_ENV === 'development' ? 'localhost' : 'entrydsm.hs.kr';

export const AUTH_URL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000/login' : 'https://auth.entrydsm.hs.kr/login';

export const APPLY_URL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'https://apply.entrydsm.hs.kr';
