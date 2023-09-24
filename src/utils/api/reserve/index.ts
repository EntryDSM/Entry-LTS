import { useQuery } from '@tanstack/react-query';
import { instance } from '../axios';
import { IReserveResponse } from './types';

const router = `/reserve`;

export const GetReserveLink = () => {
  const response = async () => {
    const { data } = await instance.get<IReserveResponse>(`${router}`);
    return data;
  };
  return useQuery(['reserve'], response);
};
