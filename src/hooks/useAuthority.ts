import { Cookies } from 'react-cookie';

const cookies = new Cookies();

type authorityColorType = 'orange' | 'green';

export const useAuthority = () => {
  const authority = cookies.get('authority');
  const isAdmin = authority === 'admin' ? true : false;
  const authorityColor: authorityColorType = isAdmin ? 'green' : 'orange';
  return { isAdmin, authorityColor };
};
