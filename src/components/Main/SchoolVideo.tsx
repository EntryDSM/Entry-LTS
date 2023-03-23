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
        <_Video>
          <img src={Video} alt="video" />
        </_Video>
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
  width: 99vw;
  height: 961px;
`;

const _Title = styled.div`
  width: 76rem;
`;

const _Video = styled.div`
  width: 76rem;
  height: 43rem;
  margin-top: 1rem;
`;
