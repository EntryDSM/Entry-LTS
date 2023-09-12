import { instance } from '../axios';
import { useQuery } from '@tanstack/react-query';
import { IGetFaq, IQnaFaqDetail } from './types';

const router = 'faq';

export const GetAllFaq = () => {
  const response = async () => {
    const { data } = await instance.get<IGetFaq[]>(`${router}/all`);
    return data;
  };
  return useQuery(['faq'], response);
};

export const GetFaqDetail = (id: number) => {
  const response = async () => {
    const { data } = await instance.get(`${router}/${id}`);
    return data;
  };
  return useQuery<IQnaFaqDetail>(['faq', id], response);
};
