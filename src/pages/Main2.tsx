import styled from '@emotion/styled';
import { Button, Text } from '@team-entry/design_system';
import MainBgImg from '@/assets/MainBgImg.png';
import Schedule from '@/components/Main2/Schedule';
import Faq from '@/components/Main/Faq';
import ApplyandNotice from '@/components/Main/ApplyandNotice';
import { getSchedule } from '@/utils/api/schedule';
import { scheduleStatusCalculater } from '@/utils/scheduleCalculater';

const Main2 = () => {
  const { data } = getSchedule();

  return (
    <_Wrapper>
      <_TopContainerWrapper>
        <_TopContainer>
          <div>
            <_Title>
              <span style={{ color: '#FF9900' }}>대덕소프트웨어마이스터고</span>는 지금,
              <br />
              IT 업계를 선도할 미래 인재를 모집하고 있어요
            </_Title>
            <_Line />
            <Text size={'header1'} color={'realWhite'}>
              {scheduleStatusCalculater(data?.currentStatus)}
            </Text>
            <Button
              color="orange"
              isBig={true}
              onClick={() => {
                console.log('click!!');
              }}
            >
              지원하기
            </Button>
          </div>
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
  padding-top: 70px;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 166px;
  > div:nth-child(1) {
    width: 94%;
    max-width: 1180px;
    gap: 70px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
  }
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
