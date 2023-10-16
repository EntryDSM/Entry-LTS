import React from 'react';
import styled from '@emotion/styled';
import { Text } from '@team-entry/design_system';
import Video from '../../assets/ReplaceVideo.svg';
import { useAuthority } from '@/hooks/useAuthority';

const SchoolVideo = () => {
  const { authorityColor } = useAuthority();
  return (
    <_Wrapper id="SchoolVideo">
      <_Title>
        <Text color={`${authorityColor}500`} size="header1">
          학교 소개 영상
        </Text>
      </_Title>
      <_Video
        src="https://www.youtube.com/embed/Uy8DaK9bGa4"
        title="학교 소개 영상"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></_Video>
    </_Wrapper>
  );
};

export default SchoolVideo;

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
  justify-content: center;
  max-width: 76rem;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  padding-bottom: 40px;
`;

const _Title = styled.div`
  width: 100%;
  padding: 0 1.5%;
`;

const _Video = styled.iframe`
  width: 100%;
  height: 100%;
  margin-top: 1rem;
  padding: 0 1.5%;
`;
