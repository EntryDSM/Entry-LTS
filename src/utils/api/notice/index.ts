import { instance } from '../axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { IAllNotice, NoticeType, INoticeDetail, ICreateNotice } from './types';
import { Toast } from '@team-entry/design_system';

const router = 'notice';

export const GetAllNotice = (type: NoticeType) => {
  const response = async () => {
    const { data } = await instance.get<IAllNotice>(`${router}${type ? `?type=${type}` : ''}`);
    return data;
  };
  return useQuery(['notice', type], response);
};

export const GetNoticeDetail = (id: string) => {
  const response = async () => {
    const { data } = await instance.get(`${router}/${id}`);
    return data;
  };
  return useQuery<INoticeDetail>(['notice', id], response);
};

export const DeleteNotice = () => {
  const response = async (id: string) => {
    const { data } = await instance.delete(`${router}/${id}`);
    return data;
  };
  return useMutation(response, {
    onSuccess: () => Toast('성공적으로 삭제되었습니다', { type: 'success' }),
    onError: () => Toast('삭제에 실패하였습니다', { type: 'error' }),
  });
};

export const useUploadNoticeImage = (body) => {
  const response = async () => {
    const { data } = await instance.post(`${router}}`, body);
  };
};

export const CreateNotice = () => {
  const response = async (body: ICreateNotice) => {
    return instance.post(`${router}`, body);
  };
  return useMutation(response, {});
};

export const UpdateNotice = () => {
  const response = async (body: ICreateNotice) => {
    return instance.patch(`${router}`, body);
  };
  return useMutation(response, {});
};
