import React, { useState } from 'react';
import styled from '@emotion/styled';
import ApplicationTitle from '@/components/application/ApplicationTitle';
import ApplicationFooter from '@/components/application/ApplicationFooter';
import UserType from '@/components/application/UserType';
import UserInfo from '@/components/application/UserInfo';
import UserWrite from '@/components/application/UserWrite';
import UserPreview from '@/components/application/UserPreview';
import GradeProgramPage from './GradeProgramPage';

export interface UserTypeValue {
  application_type: string;
  is_daejeon: string;
  educational_status: string;
  graduated_at: string;
  application_remark: string;
}

export interface UserInfoValue {
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
  const [userType, setUserType] = useState<UserTypeValue>({
    application_type: '',
    is_daejeon: '',
    educational_status: '',
    graduated_at: '',
    application_remark: '',
  });
  const [userInfo, setUserInfo] = useState<UserInfoValue>({
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
  const element = [
    { title: '지원자 전형 구분', component: <UserType userTypeValues={userType} setUserTypeValues={setUserType} /> },
    { title: '지원자 인적사항', component: <UserInfo userInfoValues={userInfo} setUserInfoValues={setUserInfo} /> },
    {
      title: '자기소개서 & 학업 계획서',
      component: <UserWrite userWriteValues={userWrite} setUserWriteValues={setUserWrite} />,
    },
    { title: '지원 원서 미리보기', component: <UserPreview /> },
  ];
  const { application_remark, ...userTypeAtFooter } = userType;
  const footer = [userTypeAtFooter, userInfo, userWrite, '', ''];
  return (
    <_Container>
      <_Wrapper>
        {
          <>
            <ApplicationTitle title={element[current].title} />
            {element[current].component}
          </>
        }
        <ApplicationFooter current={current} setCurrent={setCurrent} check={footer[current]} />
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
