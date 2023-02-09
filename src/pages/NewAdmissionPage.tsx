import React from 'react';
import styled from '@emotion/styled';
import Download from '../assets/Download.svg';
import { Text, theme } from '@team-entry/design_system';

const NewAdmissionPage = () => {
  return (
    <_Container>
      <_Wrapper>
        <Text color="black900" size="header1">
          신입생 전형 요강
        </Text>
        <_Download>
          <_Icon>
            <img src={Download} alt="download" />
          </_Icon>
          <Text color="black900" size="body1">
            2077전형요강.pdf
          </Text>
        </_Download>
        <_Image />
      </_Wrapper>
    </_Container>
  );
};

export default NewAdmissionPage;

const _Container = styled.div`
  display: flex;
  justify-content: center;
  width: 99vw;
  height: 100vh;
  margin-top: 8rem;
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

const _Icon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background-color: ${theme.color.orange500};
  border-radius: 50%;
`;

const _Image = styled.div`
  width: 60rem;
  height: 80vh;
  background-color: ${theme.color.black200};
`;
