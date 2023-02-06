import React from 'react';
import styled from '@emotion/styled';
import { Button, Text } from '@team-entry/design_system';
import { theme } from '@team-entry/design_system';
import Banner from '../assets/ReplaceBanner.svg';
import Navigation from '../assets/Navigation.svg';
import Calculator from '../assets/Calculator.svg';
import BookOpen from '../assets/BookOpen.svg';
import User from '../assets/User.svg';
import Video from '../assets/ReplaceVideo.svg';

const progressState = [
  { id: 0, title: '원서 제출', date: '10/17~10/20' },
  { id: 1, title: '1차 발표', date: '10/24 18:00' },
  { id: 2, title: '원서 제출', date: '10/18 9:00' },
  { id: 3, title: '2차 발표', date: '11/03 10:00' },
];

const boardContent = [
  {
    id: 0,
    title: '입학 공지사항',
    content: [
      '2023학년도 신입생 입학전 과제 제출 안내',
      '2023학년도 신입생 오리엔테이션 집행 안내',
      '2023학년도 신입생 대상 정밀 건강검진 안내',
      '2023학년도 신입생 2차전형 안내',
    ],
  },
  {
    id: 1,
    title: '자주 묻는 질문',
    content: [
      '전학 또는 편입으로 입학할 수 있나요?',
      '자기소개서는 공백을 포함하나요?',
      '다른 마이스터고에 중복 지원이 가능한가요?',
      '여런 전형에 중복 지원이 가능한가요?',
    ],
  },
];

const developers = [
  { id: 0, name: '이름이름', major: '분야분야' },
  { id: 1, name: '이름이름', major: '분야분야' },
  { id: 2, name: '이름이름', major: '분야분야' },
  { id: 3, name: '이름이름', major: '분야분야' },
  { id: 4, name: '이름이름', major: '분야분야' },
  { id: 5, name: '이름이름', major: '분야분야' },
  { id: 6, name: '이름이름', major: '분야분야' },
  { id: 7, name: '이름이름', major: '분야분야' },
  { id: 8, name: '이름이름', major: '분야분야' },
  { id: 9, name: '이름이름', major: '분야분야' },
  { id: 10, name: '이름이름', major: '분야분야' },
  { id: 11, name: '이름이름', major: '분야분야' },
];

interface ICurrentDate {
  now: boolean;
}

const Main = () => {
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
      title: (
        <Text color="black800" size="title2">
          입학설명회 참석 예약
        </Text>
      ),
    },
    {
      id: 1,
      icon: <img src={Calculator} alt="Calculator" style={{ marginBottom: '8px' }} />,
      title: (
        <Text color="black800" size="title2">
          성적 산출
        </Text>
      ),
    },
    {
      id: 2,
      icon: <img src={BookOpen} alt="BookOpen" style={{ marginBottom: '8px' }} />,
      title: (
        <Text color="black800" size="title2">
          학교 소개
        </Text>
      ),
    },
    {
      id: 3,
      icon: <img src={User} alt="User" style={{ marginBottom: '8px' }} />,
      title: (
        <Text color="black800" size="title2">
          Entry 개발자 소개
        </Text>
      ),
    },
  ];
  return (
    <div>
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
                {item.title}
              </_ShorcutButton>
            ))}
          </_Shortcut>
          {boardContent.map((item) => (
            <Board key={item.id}>
              <BoardTitle>
                <Text color="black600" size="title2">
                  {item.title}{' '}
                  <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.53974 6.29004L1.87974 0.640037C1.78677 0.546308 1.67617 0.471914 1.55431 0.421145C1.43246 0.370377 1.30175 0.344238 1.16974 0.344238C1.03773 0.344238 0.90702 0.370377 0.785161 0.421145C0.663302 0.471914 0.552701 0.546308 0.459738 0.640037C0.273487 0.827399 0.168945 1.08085 0.168945 1.34504C0.168945 1.60922 0.273487 1.86267 0.459738 2.05004L5.40974 7.05004L0.459738 12C0.273487 12.1874 0.168945 12.4409 0.168945 12.705C0.168945 12.9692 0.273487 13.2227 0.459738 13.41C0.552352 13.5045 0.662797 13.5797 0.784673 13.6312C0.906548 13.6827 1.03743 13.7095 1.16974 13.71C1.30204 13.7095 1.43293 13.6827 1.5548 13.6312C1.67668 13.5797 1.78712 13.5045 1.87974 13.41L7.53974 7.76004C7.64124 7.66639 7.72225 7.55274 7.77766 7.42624C7.83307 7.29974 7.86167 7.16314 7.86167 7.02504C7.86167 6.88693 7.83307 6.75033 7.77766 6.62383C7.72225 6.49733 7.64124 6.38368 7.53974 6.29004Z"
                      fill="#5F5F5F"
                    />
                  </svg>
                </Text>
              </BoardTitle>
              {item.content.map((item, i) => (
                <BoardContent key={i}>
                  <Text color="realBlack" size="body1">
                    {item.length > 20 ? `${item.slice(0, 20)}...` : item}
                  </Text>
                </BoardContent>
              ))}
            </Board>
          ))}
        </_Discription>
      </_Wrapper>

      <_Wrapper>
        <_Title>
          <Text color="orange500" size="header1">
            학교 소개 영상
          </Text>
          <_Video>
            <img src={Video} alt="video" />
          </_Video>
        </_Title>
      </_Wrapper>

      <_Wrapper>
        <_Title>
          <Text color="orange500" size="header1">
            Entry 개발자 소개
          </Text>
        </_Title>
        <_DeveloperContainer>
          <_Developers>
            {developers.map((person) => (
              <_Developer key={person.id}>
                <_DeveloperImg />
                <_DeveloperDiscription>
                  <Text color="realBlack" size="header2">
                    {person.name}
                  </Text>
                  <Text color="realBlack" size="title1">
                    {person.major}
                  </Text>
                </_DeveloperDiscription>
              </_Developer>
            ))}
          </_Developers>
        </_DeveloperContainer>
      </_Wrapper>
    </div>
  );
};

export default Main;

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

const Board = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 21rem;
  height: 14rem;
  margin-left: 2rem;
`;

const BoardTitle = styled.div`
  width: 21rem;
  padding-left: 4px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`;

const BoardContent = styled.div`
  width: 20.5rem;
  height: 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const _Title = styled.div`
  width: 76rem;
`;

const _Video = styled.div`
  width: 76rem;
  height: 43rem;
  margin-top: 1rem;
`;

const _DeveloperContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 76rem;
  height: 40rem;
`;

const _Developers = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 42px 60px;
`;

const _Developer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
`;

const _DeveloperImg = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: ${theme.color.black200};
  margin-right: 10px;
`;

const _DeveloperDiscription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100px;
`;
