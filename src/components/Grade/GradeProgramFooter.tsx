import { useAuthority } from '@/hooks/useAuthority';
import styled from '@emotion/styled';
import { Button } from '@team-entry/design_system';
import React, { SetStateAction } from 'react';

interface IProgramFooterProps {
  arr: number;
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}

const ProgramFooter = ({ arr, current, setCurrent }: IProgramFooterProps) => {
  const { authorityColor } = useAuthority();

  return (
    <_Buttons>
      {current > 0 && (
        <Button kind="outlined" color={authorityColor} onClick={() => setCurrent(current - 1)}>
          이전
        </Button>
      )}
      <div />
      {current < arr - 1 ? (
        <Button color={authorityColor} onClick={() => setCurrent(current + 1)}>
          다음
        </Button>
      ) : (
        <Button color={authorityColor} onClick={() => console.log('hello')}>
          완료
        </Button>
      )}
    </_Buttons>
  );
};

export default ProgramFooter;

const _Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;
