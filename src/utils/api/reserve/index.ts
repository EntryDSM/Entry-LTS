import { useMutation } from '@tanstack/react-query';
import { instance } from '../axios';
import { IReserveResponse } from './types';
import { AxiosError } from 'axios';
import { Toast } from '@team-entry/design_system';

const router = `/reserve`;

export const GetReserveLink = () => {
  const response = async () => {
    const { data } = await instance.get<IReserveResponse>(`${router}`);
    return data;
  };
  return useMutation(response, {
    onSuccess: (res) => {
      if (!!res.reserve_link) window.open(res.reserve_link.toString());
    },
    onError: () => {
      Toast('지금은 불가능합니다.', { type: 'error' });
    },
  });
};
