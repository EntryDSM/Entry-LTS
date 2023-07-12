import { getCookies } from '@/utils/cookies';

type authorityColorType = 'orange' | 'green';

export const useAuthority = () => {
  const authority = getCookies('authority');
  const isAdmin = authority === 'admin' ? true : false;
  const authorityColor: authorityColorType = isAdmin ? 'green' : 'orange';
  return { isAdmin, authorityColor };
};
