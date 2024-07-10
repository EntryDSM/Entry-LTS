import React, { useState } from 'react';
import { Text } from '@team-entry/design_system';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import Right from '../../assets/Right.svg';
import Left from '../../assets/Left.svg';

import projectImg from '../../assets/projectImg.png';
import projectImg2 from '../../assets/projectImg2.png';
import projectImg3 from '../../assets/projectImg3.png';
import projectImg4 from '../../assets/projectImg4.png';
import projectImg5 from '../../assets/projectImg5.png';

import projectLogo from '../../assets/projectLogo.png';
import projectLogo2 from '../../assets/projectLogo2.png';
import projectLogo3 from '../../assets/projectLogo3.png';
import projectLogo4 from '../../assets/projectLogo4.png';
import projectLogo5 from '../../assets/projectLogo5.png';

const logos = [projectLogo, projectLogo2, projectLogo3, projectLogo4, projectLogo5];
const images = [projectImg, projectImg2, projectImg3, projectImg4, projectImg5];
const titles = ['자비스', 'DMS', 'PiCK', 'Removal', '마음가짐'];
const details = [
  'JOBIS는 교내 산학협력부와 함께 진행\n중인 취업 관리 시스템입니다',
  '학생을 위한 단 하나의 기숙사 관리 서비스입니다',
  'PiCK은 대덕소프트웨어마이스터고등학교\n온라인 출결관리 서비스입니다',
  '자동자막, 욕설검열, 자동번역 기능을 제공하는\n온라인 동영상 편집 서비스입니다',
  '마음가짐은 헬스인들을 위해 편리한 서비스를\n제공하는 서비스 입니다.',
];

const Second = () => {
  const [direction, setDirection] = useState('');
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setDirection('Left');
    const prevIndex = (current - 1 + images.length) % images.length;
    setCurrent(prevIndex);
  };

  const handleNext = () => {
    setDirection('Right');
    const nextIndex = (current + 1) % images.length;
    setCurrent(nextIndex);
  };

  const slideAnimation = keyframes`
    0% {
      transform: translateX(${direction === 'Left' ? '-100%' : '100%'});
    }
    100% {
      transform: translateX(0);
    }
  `;

  const _ImgCard = styled.div`
    background-color: transparent;
    transition: all 0.5s;
    height: 320px;
    width: 580px;
    animation: ${slideAnimation} 0.5s ease-in-out;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
  `;

  const ImageCard = ({ arrNum }) => {
    return (
      <_ImgCard style={{ backgroundImage: `url(${images[arrNum]})`, backgroundSize: '580px 320px' }}>
        <_ImageBox>
          <_ImgTitleBox>
            <_Logo src={logos[arrNum]} />
            {titles[arrNum]}
          </_ImgTitleBox>
          <Text color="realWhite" size="title1">
            {details[arrNum]}
          </Text>
        </_ImageBox>
      </_ImgCard>
    );
  };

  return (
    <>
      <_Wrapper>
        <_TextContainer>
          <Text color="orange600" size="header1">
            우리 학교에서는
          </Text>
          <_Text>모두가 최선을 다해요</_Text>
          <Text color="black800" size="title2" align="center">
            학생 모두가 동아리 활동을 하며 함께 성장하고, 자체적으로
            <br /> 서비스 개발과 운영을 진행하며 실무 경험을 쌓아갑니다.
          </Text>
        </_TextContainer>
        <ImageSlider>
          <ImageCard arrNum={(current + 3) % 5} />
          <ImageCard arrNum={(current + 4) % 5} />
          <ImageCard arrNum={current} />
          <ImageCard arrNum={(current + 1) % 5} />
          <ImageCard arrNum={(current + 2) % 5} />

          <_LeftArrowBox onClick={handlePrev}>
            <_Arrow src={Left} />
          </_LeftArrowBox>
          <_RightArrowBox onClick={handleNext}>
            <_Arrow src={Right} />
          </_RightArrowBox>
        </ImageSlider>
      </_Wrapper>
    </>
  );
};

const ImageSlider = styled.div`
  height: 340px;
  width: 100vw;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  gap: 24px;
  overflow: hidden;
`;

const _Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 64px 0;
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

const _LeftArrowBox = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  border-radius: 100%;
  position: absolute;
  left: 60px;
  align-self: center;
`;

const _RightArrowBox = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  border-radius: 100%;
  position: absolute;
  right: 60px;
  align-self: center;
`;

const _Arrow = styled.img`
  width: 40px;
  height: 40px;
`;

const _ImgTitleBox = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  font-size: 28px;
  font-weight: 700;
  color: white;
`;

const _Logo = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 8px;
`;

const _ImageBox = styled.div`
  display: flex;
  width: 580px;
  height: 320px;
  flex-direction: column;
  gap: 20px;
  padding: 48px;
  border-radius: 8px;
  transition: ease-in-out;
  transition-duration: 0.2s;
  & > * {
    visibility: hidden;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
    & > * {
      visibility: visible;
    }
  }
`;

export default Second;
