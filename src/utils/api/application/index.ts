import { useQuery } from '@tanstack/react-query';
import { instance } from '../axios';
import { IGetUserInfo } from './type';

const router = 'application';

export const getUserInfo = (isLogin?: boolean) => {
  const response = async () => {
    const { data } = await instance.get<IGetUserInfo>(`${router}/users/info`);
    return data;
  };
  return useQuery(['userInfo'], response, {
    enabled: isLogin,
  });
};
