import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { instance } from '../axios';
import { Toast } from '@team-entry/design_system';
import { ICreateReply } from './type';

const router = 'admin';

// 답변 생성
export const WriteReply = (body: ICreateReply) => {
  const response = async (qnaId: string) => {
    return instance.post(`${router}/${qnaId}`, body);
  };
  const queryClient = useQueryClient();
  return useMutation(response, {
    onSuccess: () => {
      Toast('답변이 작성되었습니다.', { type: 'success' });
      queryClient.invalidateQueries(['qna']);
    },
    onError: () => {
      Toast('답변 생성에 실패하였습니다.', { type: 'error' });
    },
  });
};

// 답변 수정
export const EditReply = (body: ICreateReply) => {
  const response = async (qnaId: string) => {
    return instance.patch(`${router}/${qnaId}`, body);
  };
  const queryClient = useQueryClient();
  return useMutation(response, {
    onSuccess: () => {
      Toast('답변이 수정되었습니다.', { type: 'success' });
      queryClient.invalidateQueries(['qna']);
    },
    onError: () => {
      Toast('답변 수정에 실패하였습니다.', { type: 'error' });
    },
  });
};

// 답변 삭제
export const DeleteReply = () => {
  const response = (qnaId: string) => {
    return instance.delete(`${router}/${qnaId}`);
  };
  const queryClient = useQueryClient();
  return useMutation(response, {
    onSuccess: () => {
      Toast('답변 삭제에 성공하였습니다ㅏ.', { type: 'success' });
      queryClient.invalidateQueries(['qna']);
    },
    onError: () => {
      Toast('답변 삭제에 실패하였습니다.', { type: 'error' });
    },
  });
};

// 질문 삭제
export const DeleteQna = () => {
  const response = async (qnaId: string) => {
    return instance.delete(`${router}/${qnaId}`);
  };
  return useMutation(response, {
    onSuccess: () => {
      Toast('Qna가 삭제되었습니다.', { type: 'success' });
    },
    onError: () => {
      Toast('Qna 삭제에 실패하였습니다.', { type: 'error' });
    },
  });
};

// 질문 상세조회
export const GetQuestionDetail = (qnaId: string) => {
  const response = async () => {
    const { data } = await instance.get<ICreateReply>(`${router}/${qnaId}`);
    return data;
  };

  return useQuery(['qna', qnaId], response);
};
