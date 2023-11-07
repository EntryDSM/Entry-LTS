/** 전형 일정 수정 */

import { useMutation, useQuery } from '@tanstack/react-query';
import { instance } from '../axios';
import { IEditScheduleRequest, IGetScheduleResponse } from './type';

const router = 'schedule';

export const editSchedule = () => {
  const response = async (params: IEditScheduleRequest) => {
    const { data } = await instance.patch(`${router}`, params);
    return data;
  };
  return useMutation(response);
};

export const getSchedule = () => {
  const response = async () => {
    const { data } = await instance.get(`${router}`);
    return data;
  };

  return useQuery<IGetScheduleResponse>(['schedule'], response);
};
