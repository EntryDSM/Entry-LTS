import React from 'react';
import styled from '@emotion/styled';
import { Button, Text, theme } from '@team-entry/design_system';
import Banner from '../../assets/ReplaceBanner.svg';
import Navigation from '../../assets/Navigation.svg';
import Calculator from '../../assets/Calculator.svg';
import BookOpen from '../../assets/BookOpen.svg';
import User from '../../assets/User.svg';
import BoardsAtMain from './BoardAtMain';

const progressState = [
  { id: 0, title: '원서 제출', date: '10/17~10/20' },
  { id: 1, title: '1차 발표', date: '10/24 18:00' },
  { id: 2, title: '원서 제출', date: '10/18 9:00' },
  { id: 3, title: '2차 발표', date: '11/03 10:00' },
];

interface ICurrentDate {
  now: boolean;
}

const MainFunction = () => {
  const DATE = 1;
  const onClick = () => console.log('clicked!');
  const progressBar = [
    { id: 0, element: <_ProgressCircle now={0 <= DATE} /> },
    { id: 1, element: <_ProgressStep now={1 <= DATE} /> },
    { id: 2, element: <_ProgressCircle now={1 <= DATE} /> },
    { id: 3, element: <_ProgressStep now={2 <= DATE} /> },
    { id: 4, element: <_ProgressCircle now={2 <= DATE} /> },
    { id: 5, element: <_ProgressStep now={3 <= DATE} /> },
    { id: 6, element: <_ProgressCircle now={3 <= DATE} /> },
  ];
  const shortcut = [
    {
      id: 0,
      icon: <img src={Navigation} alt="Navigation" style={{ marginBottom: '8px' }} />,
      title: '입학설명회 참석 예약',
    },
    {
      id: 1,
      icon: <img src={Calculator} alt="Calculator" style={{ marginBottom: '8px' }} />,
      title: '성적 산출',
    },
    {
      id: 2,
      icon: <img src={BookOpen} alt="BookOpen" style={{ marginBottom: '8px' }} />,
      title: '학교 소개 ',
    },
    {
      id: 3,
      icon: <img src={User} alt="User" style={{ marginBottom: '8px' }} />,
      title: 'Entry 개발자 소개',
    },
  ];
  return (
    <_Wrapper>
      <_Banner src={Banner} alt="banner" />
      <_Application>
        <_ApplicationDetail>
          <Text color="black900" size="header1">
            지금은 원서제출 기간입니다.
          </Text>
          <Text color="black600" size="title2">
            입학 상담 문의: 042-8832-1121
          </Text>
          <Button color="orange" onClick={onClick}>
            원서 접수 →
          </Button>
        </_ApplicationDetail>
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
      </_Application>
      <_Discription>
        <_Shortcut>
          {shortcut.map((item) => (
            <_ShorcutButton key={item.id}>
              {item.icon}
              <Text color="black800" size="title2">
                {item.title}
              </Text>
            </_ShorcutButton>
          ))}
        </_Shortcut>

        <BoardsAtMain />
      </_Discription>
    </_Wrapper>
  );
};

export default MainFunction;

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 7rem;
  width: 99vw;
  height: 100vh;
`;

const _Banner = styled.img`
  width: 76rem;
  height: 14rem;
  object-fit: cover;
  border-radius: 4px;
`;

const _Application = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 76rem;
  height: 10.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  margin: 1rem 0px;
`;

const _ApplicationDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 9rem;
`;

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

const _Discription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 76rem;
  height: 16rem;
`;

const _Shortcut = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem;
`;

const _ShorcutButton = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 14rem;
  height: 6rem;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
`;
