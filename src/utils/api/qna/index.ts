import { useMutation, useQuery } from 'react-query';
import { instance } from '../axios';
import { ICreateQna } from './request';
import { useNavigate } from 'react-router-dom';
import { AxiosError, AxiosResponse } from 'axios';
import { IGetMyQnaList, IQnaDetailResponse, IQnaListResponse } from './response';

const router = 'question';

export const GetAllQna = () => {
  const response = async () => {
    const { data } = await instance.get<IQnaListResponse>(`${router}/all`);
    return data;
  };
  return useQuery(['qna'], response);
};

export const GetQnaDetail = (qnaId: string) => {
  const response = async () => {
    const { data } = await instance.get<IQnaDetailResponse>(`${router}/${qnaId}`);
    return data;
  };

  const navigate = useNavigate();

  return useQuery(['qna', qnaId], response, {
    onSuccess: () => {},
    onError: (err: AxiosError) => {
      if (err.response.status === 403 || err.response.status === 404) {
        alert('로그인 후 이용 가능합니다');
        navigate(-1);
      }
    },
  });
};

export const GetMyQna = () => {
  const response = async () => {
    const { data } = await instance.get<IGetMyQnaList>(`${router}`);
    return data;
  };
  return useQuery(['myQna'], response, {
    onSuccess: () => console.log('success'),
    onError: () => console.log('error'),
  });
};

export const CreateQna = (body: ICreateQna) => {
  const navigate = useNavigate();
  const response = async () => {
    return instance.post(`${router}`, body);
  };

  return useMutation(response, {
    onSuccess: () => {
      alert('성공');
      navigate('/customer');
    },
    onError: (error: AxiosError<AxiosError>) => {
      switch (error.response.data.status) {
        case 400:
          alert('내용을 입력해주세요');
          break;
        case 404:
          alert('로그인 오류 다시 로그인 해주세요');
          navigate('/login');
          break;
        default:
          return;
      }
    },
  });
};

export const EditQna = (qnaId: string) => {
  const response = async () => {
    return instance.patch(`${router}/${qnaId}`);
  };
  return useMutation(response, {
    onSuccess: () => console.log('success'),
  });
};

export const DeleteQna = (qnaId: string) => {
  const response = async () => {
    return instance.delete(`${router}/${qnaId}`);
  };
  return useMutation(response, {
    onSuccess: () => console.log('success'),
  });
};

export const GetReplyDetail = (qnaId: string) => {
  const response = async () => {
    return instance.get(`${router}/${qnaId}`);
  };
  return useMutation(response, {
    onSuccess: () => console.log('success'),
  });
};
