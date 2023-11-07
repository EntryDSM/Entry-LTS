import React from 'react';
import styled from '@emotion/styled';
import { Button, Text } from '@team-entry/design_system';
import EditBanner from '../../components/EditBanner';
import BannerImg from '../../assets/ReplaceBanner.svg';

const EditBannerPage = () => {
  const onClick = () => {
    console.log('clicked!');
  };
  return (
    <_Container>
      <_Wrapper>
        <_Title>
          <Text color="black900" size="header1">
            메인 페이지 배너 편집
          </Text>
          <div style={{ width: '120 px' }}>
            <Button color="green" onClick={onClick}>
              새항목 추가
            </Button>
          </div>
        </_Title>
        {/* <EditBanner index={1} banner={BannerImg} />
        <EditBanner index={2} banner={BannerImg} /> */}
      </_Wrapper>
    </_Container>
  );
};

export default EditBannerPage;

const _Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 7rem;
`;

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 60rem;
`;

const _Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
