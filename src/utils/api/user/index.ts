import { useQuery } from 'react-query';
import { instance } from '../axios';
import { IApplyInfoStatusResponse, IAuthorizationResponse } from './response';

export const ReissueToken = async (refresh_token: string) => {
  const response = await instance.put<IAuthorizationResponse>('user/auth', null, {
    headers: {
      'X-Refresh-Token': `${refresh_token}`,
    },
  });

  return response.data;
};

export const ApplyInfoStatus = () => {
  const response = async () => {
    const { data } = await instance.get<IApplyInfoStatusResponse>(`user/status`);
    return data;
  };
  return useQuery(['applyInfoStatus'], response);
};
