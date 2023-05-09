import React, { useState } from 'react';
import styled from '@emotion/styled';
import ApplicationTitle from '@/components/Application/ApplicationTitle';
import ApplicationFooter from '@/components/Application/ApplicationFooter';
import UserType from '@/components/Application/UserType';
import UserInfo from '@/components/Application/UserInfo';
import UserWrite from '@/components/Application/UserWrite';
import UserPreview from '@/components/Application/UserPreview';
import GradeProgram from '@/components/grade/GradeProgram';
import { IElement } from './GradeProgramPage';

export interface UserTypeValue {
  application_type: string;
  is_daejeon: string;
  educational_status: string;
  graduated_at: string;
  application_remark: string;
}

export interface UserInfoValue {
  img: any;
  name: string;
  sex: string;
  birthday: string;
  blackExam: string;
  parent_name: string;
  parent_tel: string;
  telephone_number: string;
}

export interface UserWriteValue {
  intro: string;
  study_plan: string;
}

const Application = () => {
  const [current, setCurrent] = useState<number>(0);

  const [gradeCurrent, setGradeCurrent] = useState<number>(0);

  const [userType, setUserType] = useState<UserTypeValue>({
    application_type: '',
    is_daejeon: '',
    educational_status: '',
    graduated_at: '',
    application_remark: '',
  });

  const [userInfo, setUserInfo] = useState<UserInfoValue>({
    img: '',
    name: '',
    sex: '',
    birthday: '',
    blackExam: '',
    parent_name: '',
    parent_tel: '',
    telephone_number: '',
  });

  const [userWrite, setUserWrite] = useState<UserWriteValue>({
    intro: '',
    study_plan: '',
  });

  const [element, setElement] = useState<IElement[][]>([
    [
      { id: 1, title: '사회', subTitle: '(과목이 없을 경우 X로 기입해주세요)', type: 'grade', grade: 'A' },
      { id: 2, title: '기술가정', type: 'grade', grade: 'A' },
      { id: 3, title: '역사', type: 'grade', grade: 'A' },
      { id: 4, title: '수학', type: 'grade', grade: 'A' },
      { id: 5, title: '영어', type: 'grade', grade: 'A' },
      { id: 6, title: '국어', type: 'grade', grade: 'A' },
      { id: 7, title: '과학', type: 'grade', grade: 'A' },
    ],
    [
      { id: 1, title: '사회', subTitle: '(과목이 없을 경우 X로 기입해주세요)', type: 'grade', grade: 'A' },
      { id: 2, title: '기술가정', type: 'grade', grade: 'A' },
      { id: 3, title: '역사', type: 'grade', grade: 'A' },
      { id: 4, title: '수학', type: 'grade', grade: 'A' },
      { id: 5, title: '영어', type: 'grade', grade: 'A' },
      { id: 6, title: '국어', type: 'grade', grade: 'A' },
      { id: 7, title: '과학', type: 'grade', grade: 'A' },
    ],
    [
      { id: 1, title: '사회', subTitle: '(과목이 없을 경우 X로 기입해주세요)', type: 'grade', grade: 'A' },
      { id: 2, title: '기술가정', type: 'grade', grade: 'A' },
      { id: 3, title: '역사', type: 'grade', grade: 'A' },
      { id: 4, title: '수학', type: 'grade', grade: 'A' },
      { id: 5, title: '영어', type: 'grade', grade: 'A' },
      { id: 6, title: '국어', type: 'grade', grade: 'A' },
      { id: 7, title: '과학', type: 'grade', grade: 'A' },
    ],
    [
      { id: 1, title: '결석', placeholder: '결석 일수', type: 'input', unit: '일', value: '' },
      { id: 2, title: '지각', placeholder: '지각 횟수', type: 'input', unit: '회', value: '' },
      { id: 3, title: '조퇴', placeholder: '조퇴 횟수', type: 'input', unit: '회', value: '' },
      { id: 4, title: '결과', placeholder: '결과 일수', type: 'input', unit: '일', value: '' },
      { id: 5, title: '미인정 환산 결석', placeholder: '미인정 환산 결석 횟수', type: 'input', unit: '일', value: '' },
    ],
    [
      { id: 1, title: '1학년 봉사활동 시간', placeholder: '봉사 시간', type: 'input', unit: '시간', value: '' },
      { id: 2, title: '2학년 봉사활동 시간', placeholder: '봉사 시간', type: 'input', unit: '시간', value: '' },
      {
        id: 3,
        title: '3학년 봉사활동 시간',
        subTitle: '(졸업예정자의 경우 9월 30일까지만)',
        placeholder: '봉사 시간',
        type: 'input',
        unit: '시간',
        value: '',
      },
    ],
  ]);

  let arr = [
    { step: 1, title: '3학년 1학기', element },
    {
      step: 2,
      title: '직전 학기',
      element,
    },
    { step: 3, title: '직전전 학기', element },
    { step: 3, title: '출석 점수', element },
    { step: 3, title: '봉사 점수', subTitle: '최대 12시간으로 환산됩니다', element },
  ];

  const elements = [
    { title: '지원자 전형 구분', component: <UserType userTypeValues={userType} setUserTypeValues={setUserType} /> },
    { title: '지원자 인적사항', component: <UserInfo userInfoValues={userInfo} setUserInfoValues={setUserInfo} /> },
    {
      title: '자기소개서 & 학업 계획서',
      component: <UserWrite userWriteValues={userWrite} setUserWriteValues={setUserWrite} />,
    },
    {
      title: '',
      component: <GradeProgram element={element} arr={arr} current={gradeCurrent} setElement={setElement} />,
    },
    { title: '지원 원서 미리보기', component: <UserPreview /> },
  ];

  const { application_remark, graduated_at, ...userTypeAtFooter } = userType;
  const footer = [userTypeAtFooter, userInfo, userWrite, '', ''];
  return (
    <_Container>
      <_Wrapper>
        {<ApplicationTitle title={elements[current].title} />}
        {elements[current].component}
        <ApplicationFooter
          current={current}
          setCurrent={setCurrent}
          gradeCurrent={gradeCurrent}
          setGradeCurrent={setGradeCurrent}
          check={footer[current]}
        />
      </_Wrapper>
    </_Container>
  );
};

export default Application;

const _Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60rem;
  margin-top: 7rem;
`;
