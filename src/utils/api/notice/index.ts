import { instance } from '../axios';
import { useQuery } from 'react-query';
import { IAllNotice, NoticeType, INoticeDetail } from './types';

const router = 'notice';

export const GetAllNotice = (type: NoticeType) => {
  const response = async () => {
    const { data } = await instance.get<IAllNotice>(`${router}/all/${type}`);
    return data;
  };
  return useQuery(['notice', type], response);
};

export const GetNoticeDetail = (id: number) => {
  const response = async () => {
    const { data } = await instance.get(`${router}/${id}`);
    return data;
  };
  return useQuery<INoticeDetail>(['notice', id], response);
};
