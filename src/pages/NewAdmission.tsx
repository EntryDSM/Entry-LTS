import React from 'react';
import styled from '@emotion/styled';
import Download from '../assets/Download.svg';
import { Icon, Text, theme } from '@team-entry/design_system';
import { useAuthority } from '@/hooks/useAuthority';

const NewAdmissionPage = () => {
  const { isAdmin } = useAuthority();

  const DownLoad = () => {
    const pdfUrl = 'https://dsmhs.djsch.kr/boardCnts/fileDown.do?fileSeq=9587a60deb3b32b48b7342b0ea9112aa';
    window.open(pdfUrl);
  };

  return (
    <_Container>
      <_Wrapper>
        <Text color="black900" size="header1">
          신입생 전형 요강
        </Text>
        <_Download onClick={DownLoad}>
          <_Icon isAdmin={isAdmin}>
            <Icon icon="Download" size={18} />
          </_Icon>
          <Text color="black900" size="body1" cursor="default">
            2025전형요강.pdf
          </Text>
        </_Download>
        {/* <_Image /> */}
      </_Wrapper>
    </_Container>
  );
};

export default NewAdmissionPage;

const _Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 8rem 40px 0 40px;
`;

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60rem;
  gap: 1rem;
`;

const _Download = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const _Icon = styled.div<{ isAdmin: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background-color: ${({ isAdmin }) => (isAdmin ? theme.color.green500 : theme.color.orange500)};
  border-radius: 50%;
`;

const _Image = styled.div`
  width: 60rem;
  height: 80vh;
  background-color: ${theme.color.black200};
`;
