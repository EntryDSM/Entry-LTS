import React from 'react';
import styled from '@emotion/styled';
import { Button, theme } from '@team-entry/design_system';
import { UserInfoValue, UserTypeValue, UserWriteValue } from '@/pages/Application';

interface ApplicationFooterProps {
  check?: Omit<UserTypeValue, 'application_remark'> | UserInfoValue | UserWriteValue | string;
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}

const ApplicationFooter = ({ current, setCurrent, check }: ApplicationFooterProps) => {
  const progress = [0, 1, 2, 3, 4];
  const checkDisabled = Object.values(check).includes('');
  return (
    <_Footer>
      <Button color="black" kind="outlined" disabled={current === 0} onClick={() => setCurrent((prev) => prev - 1)}>
        이전
      </Button>
      <_Progress>
        {progress.map((step) => (
          <_ProgressStep key={step} isStep={step === current} />
        ))}
      </_Progress>
      <Button
        color="black"
        kind="outlined"
        disabled={current == 3 || checkDisabled}
        onClick={() => setCurrent((prev) => prev + 1)}
      >
        다음
      </Button>
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
