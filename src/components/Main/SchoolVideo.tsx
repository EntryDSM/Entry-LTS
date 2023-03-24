import React from 'react';
import styled from '@emotion/styled';
import { Text } from '@team-entry/design_system';
import Video from '../../assets/ReplaceVideo.svg';

const SchoolVideo = () => {
  return (
    <_Wrapper id="SchoolVideo">
      <_Title>
        <Text color="orange500" size="header1">
          학교 소개 영상
        </Text>
        <_Video alt="video" />
      </_Title>
    </_Wrapper>
  );
};

export default SchoolVideo;

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 7rem;
  justify-content: center;
  max-width: 76rem;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
`;

const _Title = styled.div`
  width: 100%;
  padding: 0 1.5%;
`;

const _Video = styled.img`
  width: 100%;
  height: 43rem;
  margin-top: 1rem;
  background-color: black;
`;
