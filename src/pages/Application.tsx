import React, { useState } from 'react';
import styled from '@emotion/styled';
import ApplicationTitle from '@/components/application/ApplicationTitle';
import ApplicationFooter from '@/components/application/ApplicationFooter';
import UserType from '@/components/application/UserType';

export interface UserTypeValue {
  application_type: string;
  is_daejeon: string;
  educational_status: string;
  graduated_at: string;
  application_remark: string;
}

const Application = () => {
  const [current, setCurrent] = useState<number>(0);
  const [userType, setUserType] = useState({
    application_type: '',
    is_daejeon: '',
    educational_status: '',
    graduated_at: '',
    application_remark: '',
  });
  const element = [
    { title: '지원자 전형 구분', conpnent: <UserType userTypeValues={userType} setUserTypeValues={setUserType} /> },
    { title: '지원자 인적사항' },
  ];
  return (
    <_Container>
      <_Wrapper>
        {
          <>
            <ApplicationTitle title={element[current].title} />
            {element[current].conpnent}
          </>
        }
        <ApplicationFooter current={current} setCurrent={setCurrent} />
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
