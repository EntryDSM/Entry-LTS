import { useQuery } from 'react-query';
import { instance } from '../axios';
import { ApplyInfoStatusResponse, AuthorizationResponse } from './response';

export const ReissueToken = async (refresh_token: string) => {
  const response = await instance.put<AuthorizationResponse>('user/auth', null, {
    headers: {
      'X-Refresh-Token': `${refresh_token}`,
    },
  });

  return response.data;
};

export const ApplyInfoStatus = () => {
  const response = async () => {
    const { data } = await instance.get<ApplyInfoStatusResponse>(`user/status`);
    return data;
  };
  return useQuery(['applyInfoStatus'], response);
};
