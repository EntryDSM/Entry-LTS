import process from 'process';

export const COOKIE_DOMAIN = process.env.NODE_ENV === 'development' ? 'localhost' : 'entrydsm.hs.kr';

export const MAIN_URL = import.meta.env.VITE_MAIN_URL;

export const AUTH_URL = import.meta.env.VITE_AUTH_URL;

export const APPLY_URL = import.meta.env.VITE_APPLY_URL;

export const ADMIN_URL = import.meta.env.VITE_ADMIN_URL;
