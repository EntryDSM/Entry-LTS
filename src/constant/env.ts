import process from 'process';

export const COOKIE_DOMAIN = process.env.NODE_ENV === 'development' ? 'localhost' : 'entrydsm.hs.kr';

export const MAIN_URL = process.env.MAIN_URL;

export const AUTH_URL = process.env.AUTH_URL;

export const APPLY_URL = process.env.APPLY_URL;

export const ADMIN_URL = process.env.ADMIN_URL;
