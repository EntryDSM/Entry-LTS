import React from 'react';
import styled from '@emotion/styled';
import { Text, theme } from '@team-entry/design_system';
import { ProgressBar, progressState } from '../../constant/main';
import { useAuthority } from '@/hooks/useAuthority';

interface ICurrentDate {
  now: boolean;
  isAdmin: boolean;
}
const Progress = () => {
  const DATE = 1;
  const { isAdmin } = useAuthority();
  return (
    <_Progress>
      <_ProgressCards>
        {progressState.map((state) => (
          <_ProgressCard key={state.id} now={state.id <= DATE} isAdmin={isAdmin}>
            <Text color="realWhite" size="title1">
              {state.title}
            </Text>
            <Text color="realWhite" size="body1">
              {state.date}
            </Text>
          </_ProgressCard>
        ))}
      </_ProgressCards>
      <_ProgressBarWrapper>
        <ProgressBar />
      </_ProgressBarWrapper>
    </_Progress>
  );
};

export default Progress;

const _Progress = styled.div`
  height: 9rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const _ProgressCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 45rem;
  height: 5rem;
`;

const _ProgressCard = styled.div<ICurrentDate>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 9.5rem;
  height: 4.5rem;
  border-radius: 5px;
  background-color: ${({ now, isAdmin }) =>
    now
      ? isAdmin
        ? theme.color.green500
        : theme.color.orange500
      : isAdmin
      ? theme.color.green100
      : theme.color.orange100};
`;

const _ProgressBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
`;
