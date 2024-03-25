import styled from '@emotion/styled';
import { Text } from '@team-entry/design_system';
import AnimationBox from './AnimationBox';
import { CSSProperties } from 'react';

const Fourth = () => {
  return (
    <>
      <_Wrapper>
        <_TextContainer>
          <Text color="orange600" size="header1">
            대덕 SW마이스터고등학교와 함께하는
          </Text>
          <_Text>든든한 MOU 기업들</_Text>
          <Text color size="title2" align="center">
            350여개에 달하는 기업이 본교에 취업을 의뢰했으며,
            <br />
            매년 학생들의 취업으로 이어지고 있습니다
          </Text>
        </_TextContainer>
        <_AnimationContainer>
          <AnimationBox rotate="left">
            <_MOULogo backgroundColor="red">
              <h2>로고</h2>
            </_MOULogo>
            <_MOULogo backgroundColor="orange">
              <h2>로고</h2>
            </_MOULogo>
            <_MOULogo backgroundColor="yellow">
              <h2>로고</h2>
            </_MOULogo>
            <_MOULogo backgroundColor="green">
              <h2>로고</h2>
            </_MOULogo>
            <_MOULogo backgroundColor="skyblue">
              <h2>로고</h2>
            </_MOULogo>
            <_MOULogo backgroundColor="blue">
              <h2>로고</h2>
            </_MOULogo>
          </AnimationBox>
          <AnimationBox rotate="right">
            <_MOULogo backgroundColor="red">
              <h2>로고</h2>
            </_MOULogo>
            <_MOULogo backgroundColor="orange">
              <h2>로고</h2>
            </_MOULogo>
            <_MOULogo backgroundColor="yellow">
              <h2>로고</h2>
            </_MOULogo>
            <_MOULogo backgroundColor="green">
              <h2>로고</h2>
            </_MOULogo>
            <_MOULogo backgroundColor="skyblue">
              <h2>로고</h2>
            </_MOULogo>
            <_MOULogo backgroundColor="blue">
              <h2>로고</h2>
            </_MOULogo>
          </AnimationBox>
          <AnimationBox rotate="left">
            <_MOULogo backgroundColor="red">
              <h2>로고</h2>
            </_MOULogo>
            <_MOULogo backgroundColor="orange">
              <h2>로고</h2>
            </_MOULogo>
            <_MOULogo backgroundColor="yellow">
              <h2>로고</h2>
            </_MOULogo>
            <_MOULogo backgroundColor="green">
              <h2>로고</h2>
            </_MOULogo>
            <_MOULogo backgroundColor="skyblue">
              <h2>로고</h2>
            </_MOULogo>
            <_MOULogo backgroundColor="blue">
              <h2>로고</h2>
            </_MOULogo>
          </AnimationBox>
        </_AnimationContainer>
      </_Wrapper>
    </>
  );
};

const _Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;

const _TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const _Text = styled.div`
  font-weight: 700;
  font-size: 50px;
`;

const _AnimationContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  overflow-x: hidden;
  height: 526px;
`;

interface Color {
  backgroundColor: CSSProperties['backgroundColor'];
}

const _MOULogo = styled.div<Color>`
  width: 320px;
  flex-basis: 320px;
  flex-shrink: 0;
  background-color: ${({ backgroundColor }) => backgroundColor};
  height: 175px;
`;

export default Fourth;
