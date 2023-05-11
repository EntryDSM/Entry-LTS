import React from 'react';
import styled from '@emotion/styled';
import { Text, theme } from '@team-entry/design_system';
import { progressBar, progressState } from '../../constant/main';

interface ICurrentDate {
  now: boolean;
}
const Progress = () => {
  const DATE = 1;
  return (
    <_Progress>
      <_ProgressCards>
        {progressState.map((state) => (
          <_ProgressCard key={state.id} now={state.id <= DATE}>
            <Text color="realWhite" size="title1">
              {state.title}
            </Text>
            <Text color="realWhite" size="body1">
              {state.date}
            </Text>
          </_ProgressCard>
        ))}
      </_ProgressCards>
      <_ProgressBar>
        {progressBar.map((element) => {
          return element;
        })}
      </_ProgressBar>
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
  background-color: ${({ now }) => (now ? theme.color.orange500 : theme.color.orange100)};
`;

const _ProgressBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
`;
