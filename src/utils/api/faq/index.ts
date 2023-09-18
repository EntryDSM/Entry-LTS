import { instance } from '../axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { ICreateFaq, IGetFaq, IQnaFaqDetail } from './types';
import { Toast } from '@team-entry/design_system';
import { useNavigate } from 'react-router-dom';

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

export const CreateFaq = () => {
  const response = async (body: ICreateFaq) => {
    return instance.post(`${router}`, body);
  };
  const navigate = useNavigate();
  return useMutation(response, {
    onSuccess: () => {
      Toast('Faq가 성공적으로 추가되었습니다.', { type: 'success' });
      navigate('/customer');
    },
  });
};
