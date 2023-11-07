import { getCookies } from '@/utils/cookies';

export type AuthorityColorType = 'orange' | 'green';

export const useAuthority = () => {
  const authority = getCookies('authority');
  const isAdmin = authority === 'admin' ? true : false;
  const authorityColor: AuthorityColorType = isAdmin ? 'green' : 'orange';
  return { isAdmin, authorityColor };
};
