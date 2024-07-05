import { instance } from '../axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { IAllNotice, NoticeType, INoticeDetail, ICreateNotice, IUploadNoticeImage } from './types';
import { Toast } from '@team-entry/design_system';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router';

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
  const navigate = useNavigate();

  return useMutation(response, {
    onSuccess: () => {
      Toast('성공적으로 삭제되었습니다', { type: 'success' });
      navigate('/notice');
    },
    onError: () => Toast('삭제에 실패하였습니다', { type: 'error' }),
  });
};

interface UploadNoticeImageResponse {
  fileName: string;
  fileUrl: string;
}

export const UploadNoticeImage = () => {
  const response = async (params: IUploadNoticeImage) => {
    const form = new FormData();
    form.append('photo', params.photo);
    return instance.post(`${router}/image `, form, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };

  return useMutation(response, {
    onError: () => {
      Toast('본업 이미지 업로드에 실패하였습니다', { type: 'error' });
    },
  });
};

export const CreateNotice = () => {
  const navigate = useNavigate();
  const response = async (body: ICreateNotice) => {
    return instance.post(`${router}`, body);
  };

  return useMutation(response, {
    onSuccess: () => {
      Toast('성공', { type: 'success' });
      navigate('/notice');
    },
    onError: (error: AxiosError<AxiosError>) => {
      switch (error.response.data.status) {
        case 400:
          Toast('내용을 입력해주세요', { type: 'error' });
          break;
        case 404:
          Toast('로그인 오류 다시 로그인 해주세요', { type: 'error' });
          navigate('/customer');
          break;
        default:
          return;
      }
    },
  });
};

export const UpdateNotice = () => {
  const response = async (body: ICreateNotice) => {
    return instance.patch(`${router}`, body);
  };
  return useMutation(response, {});
};
