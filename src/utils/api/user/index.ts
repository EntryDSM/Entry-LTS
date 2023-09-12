import { useMutation, useQuery } from 'react-query';
import { instance } from '../axios';
import { IApplyInfoStatusResponse, IAuthorizationResponse } from './response';
import { Toast } from '@team-entry/design_system';

const router = 'user';

export const ReissueToken = async (refresh_token: string) => {
  const response = await instance.put<IAuthorizationResponse>(`${router}/auth`, null, {
    headers: {
      'X-Refresh-Token': `${refresh_token}`,
    },
  });

  return response.data;
};

export const ApplyInfoStatus = (isLogin?: boolean) => {
  const response = async () => {
    const { data } = await instance.get<IApplyInfoStatusResponse>(`${router}/status`);
    return data;
  };
  return useQuery(['applyInfoStatus'], response, {
    enabled: isLogin,
  });
};

export const DeleteUserInfo = () => {
  const response = async () => {
    await instance.delete(`${router}`);
  };
  return useMutation(response, {
    onSuccess: () => Toast('회원탈퇴에 성공하였습니다.', { type: 'success' }),
  });
};

export const DeleteUserPdf = (param: number) => {
  const response = async () => {
    await instance.delete(`${router + '/' + param}`);
  };
  return useMutation(response, {
    onSuccess: () => Toast('원서제출 취소에 성공하였습니다.', { type: 'success' }),
  });
};
