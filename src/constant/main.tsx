import { useAuthority } from '@/hooks/useAuthority';
import styled from '@emotion/styled';
import { theme } from '@team-entry/design_system';
import React from 'react';

interface ICurrentDate {
  now: boolean;
  isAdmin: boolean;
}

export const developers = [
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

export const shortcut = [
  {
    id: 0,
    link: '/',
    icon: 'NavigationArrow',
    title: '입학설명회 참석 예약',
  },
  {
    id: 1,
    link: '/grade',
    icon: 'Culculator',
    title: '성적 산출',
  },
  {
    id: 2,
    link: '#SchoolVideo',
    icon: 'Book',
    title: '학교 소개 ',
  },
  {
    id: 3,
    link: '#EntryDeveloper',
    icon: 'ApproveUser',
    title: 'Entry 개발자 소개',
  },
];

export const progressState = [
  { id: 0, title: '원서 제출', date: '10/17~10/20' },
  { id: 1, title: '1차 발표', date: '10/24 18:00' },
  { id: 2, title: '원서 제출', date: '10/18 9:00' },
  { id: 3, title: '2차 발표', date: '11/03 10:00' },
];

export const ProgressBar = () => {
  const DATE = 1;
  const { isAdmin } = useAuthority();
  return (
    <>
      <_ProgressCircle now={0 <= DATE} isAdmin={isAdmin} />
      <_ProgressStep now={1 <= DATE} isAdmin={isAdmin} />
      <_ProgressCircle now={1 <= DATE} isAdmin={isAdmin} />
      <_ProgressStep now={2 <= DATE} isAdmin={isAdmin} />
      <_ProgressCircle now={2 <= DATE} isAdmin={isAdmin} />
      <_ProgressStep now={3 <= DATE} isAdmin={isAdmin} />
      <_ProgressCircle now={3 <= DATE} isAdmin={isAdmin} />
    </>
  );
};

const _ProgressStep = styled.div<ICurrentDate>`
  width: 10.2rem;
  height: 4px;
  background-color: ${({ now, isAdmin }) =>
    now ? (isAdmin ? theme.color.green500 : theme.color.orange500) : theme.color.black100};
`;

const _ProgressCircle = styled.div<ICurrentDate>`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: ${({ now, isAdmin }) =>
    now ? (isAdmin ? theme.color.green500 : theme.color.orange500) : theme.color.black100};
`;
