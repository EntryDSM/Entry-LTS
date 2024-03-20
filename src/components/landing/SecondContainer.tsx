import React, { useState } from 'react';
import { Text } from '@team-entry/design_system';
import styled from '@emotion/styled';
import ProjectLogo from '../../assets/ProjectLogo.svg';
import Right from '../../assets/Right.svg';
import Left from '../../assets/Left.svg';

import projectImg from '../../assets/projectImg.png';

const images = [projectImg, projectImg, projectImg, projectImg, projectImg];
const titles = ['스퀘어', '먹젠', '뭐넣지', '어쩌고', '저쩌고'];
const details = [
  '스퀘어어쩌고저쩌고',
  '먹젠대충설명글',
  '뭐넣지뭐넣어야하지',
  '어쩌고지후야얼른정해줘',
  '저쩌고더미값더미값',
];

const Second = () => {
  const [current, setCurrent] = useState(0); // Move state initialization inside the functional component

  const handlePrev = () => {
    const prevIndex = (current - 1 + images.length) % images.length;
    setCurrent(prevIndex);
  };

  const handleNext = () => {
    const nextIndex = (current + 1) % images.length;
    setCurrent(nextIndex);
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
        <TestBox>
          <_ImgCard hidden>
            <_ImgTitleBox>
              <_Logo src={images[current]} />
              {titles[current]}
            </_ImgTitleBox>
            <Text color="realWhite" size="title1">
              {details[current]}
            </Text>
          </_ImgCard>
          <Image src={images[(current + 3) % 5]} />
          <Image src={images[(current + 4) % 5]} />
          <Image src={images[current]} />
          <Image src={images[(current + 1) % 5]} />
          <Image src={images[(current + 2) % 5]} />
          <_LeftArrowBox onClick={handlePrev}>
            <_Arrow src={Left} />
          </_LeftArrowBox>
          <_RightArrowBox onClick={handleNext}>
            <_Arrow src={Right} />
          </_RightArrowBox>
        </TestBox>
      </_Wrapper>
    </>
  );
};

const TestBox = styled.div`
  height: 320px;
  width: 100vw;
  display: flex;
  position: relative;
  justify-content: center;
  gap: 24px;
`;

const Image = styled.img`
  height: 320px;
  width: 580px;
  object-fit: fill;
  border-radius: 8px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const _Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 60px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
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
  &:hover {
    & > * {
      transform: scale(150%) translateX(-20%);
      transition: ease-in-out 0.5s;
    }
  }
  & > * {
    transition: ease-in-out 0.5s;
  }
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
  &:hover {
    & > * {
      transform: scale(150%) translateX(20%);
      transition: ease-in-out 0.5s;
    }
  }
  & > * {
    transition: ease-in-out 0.5s;
  }
`;

const _Arrow = styled.img`
  width: 40px;
  height: 40px;
`;

const _ImgCard = styled.div`
  flex-direction: column;
  gap: 20px;
  padding: 48px;
  display: flex;
  border-radius: 8px;
  position: absolute;
  justify-self: center;
  transition: ease-in-out;
  background-color: transparent;
  transition: all 0.5s;
  height: 320px;
  width: 580px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
    & > * {
      visibility: visible;
    }
  }
  & > * {
    visibility: hidden;
  }
`;

const _ImgTitleBox = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  font-size: 36px;
  font-weight: 700;
  color: white;
`;

const _Logo = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 8px;
`;

export default Second;
