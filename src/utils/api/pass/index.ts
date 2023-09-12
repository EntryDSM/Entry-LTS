import { useQuery } from '@tanstack/react-query';
import { instance } from '../axios';

const router = 'pass';

export const GetFirstRoundPass = () => {
  const response = async () => {
    const { data } = await instance.get<{ first_round_pass: boolean }>(`${router}/first-round`);
    return data;
  };
  return useQuery(['firstRound'], response);
};

export const GetSecondRoundPass = () => {
  const response = async () => {
    const { data } = await instance.get<{ second_pass: boolean }>(`${router}/second-round`);
    return data;
  };
  return useQuery(['secondRound'], response);
};
