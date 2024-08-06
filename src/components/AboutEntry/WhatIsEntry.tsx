import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Text } from '@team-entry/design_system';
import Wave from '../../assets/wave';

const WhatIsEntry = () => {
  return (
    <Wrapper>
      <_TextContainer>
        <h1>
          <p>
            What is <AnimationText>EntryDSM</AnimationText>
          </p>
        </h1>
        <Text size={'body1'} color={'black50'}>
          EntryDSM은 개발하는 것을 좋아하는 학생들이 자발적으로 모여
          <br />
          대덕소프트웨어마이스터고등학교의 입학전형(1, 2차 모두)을 위한 온라인 시스템, Entry 를 개발하는 팀입니다.
        </Text>
      </_TextContainer>
      <WailContainer>
        <Wave />
      </WailContainer>
    </Wrapper>
  );
};

const waveAnimation = keyframes`
    0% {
        transform: translate3d(-90px, 0, 0);
    }
    100% {
        transform: translate3d(85px, 0, 0);
    }
`;

const TextAnimation = keyframes`
    0% {
        color: linear-gradient(180deg,rgba(255, 115, 38, 1) 0%, rgba(255, 115, 38, 1) 60%,rgba(255, 255, 255, 0) 100%);
    }
    100% {
        color: linear-gradient(180deg,rgba(255, 255, 255, 0) 100%rgba(255, 115, 38, 1) 60%,rgba(255, 115, 38, 1) 0%);
    }
`;

const Wrapper = styled.div`
  background-color: #ff7e36;
  position: relative;
  height: 100vh;

  @media screen and (max-height: 616px) {
    height: 120vh;
    background: linear-gradient(
      180deg,
      rgba(255, 115, 38, 1) 0%,
      rgba(255, 115, 38, 1) 60%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

const WailContainer = styled.div`
  width: 100vw;
  max-height: 286px;
  bottom: 0px;
  position: absolute;
  background-color: transparent;
  overflow: hidden;

  & .waves {
    position: relative;
    width: 100%;
    margin-bottom: -7px;
    min-height: 100px;
    max-height: 286px;
  }

  & .parallax > use {
    animation: ${waveAnimation} 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }
  & .parallax > use:nth-of-type(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }
  & .parallax > use:nth-of-type(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }
  & .parallax > use:nth-of-type(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }
  & .parallax > use:nth-of-type(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }

  @media screen and (max-height: 616px) {
    display: none;
  }
`;

const _TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;

  & > h1 p {
    font-size: 84px;
    font-weight: bolder;
  }

  & > p {
  }
`;

const AnimationText = styled.span`
  animation: ${TextAnimation} 5s infinite ease-out;
`;

export default WhatIsEntry;
