import styled from '@emotion/styled';
import { Button, Text } from '@team-entry/design_system';
import MainBgImg from '@/assets/MainBgImg.png';
import Schedule from '@/components/Main2/Schedule';
import Faq from '@/components/Main/Faq';
import ApplyandNotice from '@/components/Main/ApplyandNotice';

const Main2 = () => {
  return (
    <_Wrapper>
      <_TopContainerWrapper>
        <_TopContainer>
          <_Title>
            대덕 소프트웨어 마이스터고는 지금,
            <br />
            IT 업계를 선도할 다음 세대 인재를 모집하고 있어요
          </_Title>
          <_Line />
          <Text size={'header1'} color={'realWhite'}>
            지금은 원서제출 기간입니다
          </Text>
          <Button
            color="orange"
            isBig={true}
            onClick={() => {
              console.log('click!!');
            }}
            margin={['top', 20]}
          >
            지원하기
          </Button>
          <Schedule />
        </_TopContainer>
      </_TopContainerWrapper>
      <_FaqWrapper>
        <_MainContainer>
          <ApplyandNotice />
          <Faq />
        </_MainContainer>
      </_FaqWrapper>
    </_Wrapper>
  );
};

export default Main2;

const _Wrapper = styled.div``;

const _TopContainerWrapper = styled.div`
  background-image: url(${MainBgImg});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
`;

const _TopContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 200px 17.7% 0 17.7%;
  background-color: rgba(0, 0, 0, 0.8);
`;

const _Title = styled.div`
  font-size: 48px;
  font-weight: 700;
  color: white;
`;

const _Line = styled.div`
  width: 400px;
  height: 1px;
  background-color: white;
  margin-top: 70px;
  margin-bottom: 90px;
`;

const _FaqWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 120px 32px;
  justify-content: center;
`;

const _MainContainer = styled.div`
  display: flex;
  gap: 120px;
  width: 100%;
  max-width: 1200px;
  flex-direction: column;
`;
