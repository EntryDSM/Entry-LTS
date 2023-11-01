import { instance } from '../axios';
import { useMutation, useQuery } from '@tanstack/react-query';
import { ModalType } from '@/hooks/useModal';
import { Toast } from '@team-entry/design_system';

interface IGetRoundPassProps {
  setModalState: React.Dispatch<React.SetStateAction<ModalType>>;
  open: () => void;
}

const router = 'pass';

export const GetFirstRoundPass = ({ setModalState, open }: IGetRoundPassProps) => {
  const response = async () => {
    const { data } = await instance.get<{ first_round_pass: boolean }>(`${router}/first-round`);
    return data;
  };
  return useMutation(response, {
    onError: () => {
      return Toast('지금은 1차 발표 기간이 아닙니다.', { type: 'error' });
    },
    onSuccess: (res) => {
      if (res.first_round_pass) setModalState('PASSED_ROUND'), open();
      else setModalState('NOT_PASSED_ROUND'), open();
    },
  });
};

export const GetSecondRoundPass = ({ setModalState, open }: IGetRoundPassProps) => {
  const response = async () => {
    const { data } = await instance.get<{ second_pass: boolean }>(`${router}/second-round`);
    return data;
  };
  return useMutation(response, {
    onError: () => {
      return Toast('지금은 2차 발표 기간이 아닙니다.', { type: 'error' });
    },
    onSuccess: (res) => {
      if (res.second_pass) setModalState('PASSED_ROUND'), open();
      else setModalState('NOT_PASSED_ROUND'), open();
    },
  });
};
