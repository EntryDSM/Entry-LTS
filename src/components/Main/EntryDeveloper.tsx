import React from 'react';
import styled from '@emotion/styled';
import { Text, theme } from '@team-entry/design_system';
import { useAthority } from '@/hooks/useAuthority';
import { developers } from '@/constant/main';


const EntryDeveloper = () => {
  const { authorityColor } = useAthority()
  return (
    <_Wrapper id="EntryDeveloper">
      <_Title>
        <Text color={`${authorityColor}500`} size="header1">
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
  );
};

export default EntryDeveloper;

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 7rem;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
`;

const _Title = styled.div`
  width: 76rem;
  margin: 0 auto;
  padding: 0 1.5%;
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
  grid-template-columns: repeat(4, 1fr);
  gap: 42px 60px;
  @media screen and (max-width: 1060px) {
    grid-template-columns: repeat(3, 1fr);
  }
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
