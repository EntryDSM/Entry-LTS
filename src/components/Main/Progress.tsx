import React from 'react';
import styled from '@emotion/styled';
import { Text, theme } from '@team-entry/design_system';

interface ICurrentDate {
  now: boolean;
}

const Progress = () => {
  const DATE = 1;

  const progressState = [
    { id: 0, title: '원서 제출', date: '10/17~10/20' },
    { id: 1, title: '1차 발표', date: '10/24 18:00' },
    { id: 2, title: '원서 제출', date: '10/18 9:00' },
    { id: 3, title: '2차 발표', date: '11/03 10:00' },
  ];

  const progressBar = [
    { id: 0, element: <_ProgressCircle now={0 <= DATE} /> },
    { id: 1, element: <_ProgressStep now={1 <= DATE} /> },
    { id: 2, element: <_ProgressCircle now={1 <= DATE} /> },
    { id: 3, element: <_ProgressStep now={2 <= DATE} /> },
    { id: 4, element: <_ProgressCircle now={2 <= DATE} /> },
    { id: 5, element: <_ProgressStep now={3 <= DATE} /> },
    { id: 6, element: <_ProgressCircle now={3 <= DATE} /> },
  ];
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
        {progressBar.map((state) => (
          <>{state.element}</>
        ))}
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

const _ProgressStep = styled.div<ICurrentDate>`
  width: 10.2rem;
  height: 4px;
  background-color: ${({ now }) => (now ? theme.color.orange500 : theme.color.black100)};
`;

const _ProgressCircle = styled.div<ICurrentDate>`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: ${({ now }) => (now ? theme.color.orange500 : theme.color.black100)};
`;
