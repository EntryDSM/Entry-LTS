import { useMutation, useQuery } from '@tanstack/react-query';
import { instance } from '../axios';
import { ScoreRequest, GedScoreRequest } from './types';

const router = 'score';

// 미졸업자/졸업자 성적 입력
export const editScore = () => {
  const response = async (body: ScoreRequest) => {
    const { data } = await instance.patch(`${router}/graduation`, body);
    return data;
  };
  return useMutation(response);
};

// 미졸업자/졸업자 성적 조회
export const getScore = () => {
  const response = async () => {
    const { data } = await instance.get<ScoreRequest>(`${router}/graduation`);
    return data;
  };

  return useQuery<ScoreRequest>(['score'], response);
};

// 검정고시 정보 입력
export const editGedScore = () => {
  const response = async (body: GedScoreRequest) => {
    const { data } = await instance.patch(`${router}/qualification`, body);
    return data;
  };
  return useMutation(response);
};

// 검정고시 정보 조회
export const getGedScore = () => {
  const response = async () => {
    const { data } = await instance.get<GedScoreRequest>(`${router}/qualification`);
    return data;
  };
  return useQuery<GedScoreRequest>(['gedScore'], response);
};
