import React from 'react';
import styled from '@emotion/styled';
import { Button, theme } from '@team-entry/design_system';
import { UserInfoValue, UserTypeValue, UserWriteValue } from '@/pages/Application';

interface ApplicationFooterProps {
  check?: Omit<UserTypeValue, 'application_remark' | 'graduated_at'> | UserInfoValue | UserWriteValue | string;
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  gradeCurrent: number;
  setGradeCurrent: React.Dispatch<React.SetStateAction<number>>;
}

const ApplicationFooter = ({ current, setCurrent, gradeCurrent, setGradeCurrent, check }: ApplicationFooterProps) => {
  const progress = [0, 1, 2, 3, 4];
  const checkDisabled = Object.values(check).includes('');

  const onClickPlus = () => {
    if (gradeCurrent == 4) {
      setCurrent(current + 1);
    } else if (current == 3) {
      setGradeCurrent(gradeCurrent + 1);
    } else {
      setCurrent(current + 1);
    }
  };

  const onClickMinus = () => {
    if (gradeCurrent == 0) {
      setCurrent(current - 1);
    } else if (current == 3) {
      setGradeCurrent(gradeCurrent - 1);
    } else {
      setCurrent(current - 1);
    }
    console.log(current, gradeCurrent);
  };
  return (
    <_Footer>
      <Button color="black" kind="outlined" disabled={current === 0} onClick={onClickMinus}>
        이전
      </Button>
      <_Progress>
        {progress.map((step) => (
          <_ProgressStep key={step} isStep={step === current} />
        ))}
      </_Progress>
      {current !== 4 ? (
        <Button color="orange" kind="contained" disabled={checkDisabled} onClick={onClickPlus}>
          다음
        </Button>
      ) : (
        <Button color="orange" kind="contained" disabled={checkDisabled} onClick={() => console.log('asdf')}>
          완료
        </Button>
      )}
    </_Footer>
  );
};

export default ApplicationFooter;

const _Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 60rem;
  margin-top: 45px;
  margin-bottom: 100px;
`;

const _Progress = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 38px;
`;

const _ProgressStep = styled.div<{ isStep: boolean }>`
  width: ${({ isStep }) => (isStep ? 22 : 14)}px;
  height: ${({ isStep }) => (isStep ? 22 : 14)}px;
  border-radius: ${({ isStep }) => (isStep ? 11 : 7)}px;
  background-color: ${({ isStep }) => (isStep ? theme.color.orange400 : theme.color.black200)};
`;
