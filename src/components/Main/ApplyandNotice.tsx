import styled from '@emotion/styled';
import Youtube from '../../assets/Youtube.svg';
import Notification from '../../assets/Notification.svg';
import Download2 from '../../assets/Download2.svg';
import ArrowRight from '../../assets/ArrowRight.svg';
import { useState } from 'react';

const name = ['1차 입학설명회', '2차 입학설명회', '3차 입학설명회', '4차 입학설명회'];

const ApplyandNotice = () => {
  const [nowDate, setNowDate] = useState();
  const SessionBox = ({ sessionName, current }) => {
    return (
      <_DateBox>
        <_TextBox>
          <_SessionName>{sessionName}</_SessionName>
          <_Date>2024.03.21</_Date>
        </_TextBox>
        {current ? (
          <_ApplyButton>신청하기</_ApplyButton>
        ) : (
          <_VideoButton>
            <_Img src={Youtube} />
          </_VideoButton>
        )}
      </_DateBox>
    );
  };
  const NoticeBox = () => {
    return (
      <_Notice>
        <_NoticeTextBox>
          <_TitleBox>기숙사 탈출하면 벌점 몇 점인지에 대해</_TitleBox>
          <_NoticeDate>2024.03.21</_NoticeDate>
        </_NoticeTextBox>
        <_Img src={ArrowRight} />
      </_Notice>
    );
  };
  return (
    <_Wrapper>
      <_ApplyContainer>
        <_Title>입학설명회 참석 예약</_Title>
        <_ApplyBox>
          <_LineBox>
            <_Line />
          </_LineBox>
          <_DateContainer>
            {name.map((i) => (
              <SessionBox sessionName={i} current={nowDate} />
            ))}
          </_DateContainer>
        </_ApplyBox>
      </_ApplyContainer>
      <_NoticeContainer>
        <_Title2>
          입학 공지사항
          <_PageMoveButton>이동하기</_PageMoveButton>
        </_Title2>
        <_NoticeBox>
          <_MainNoticeBox>
            <_MainNotificationIcon>
              <_Img src={Notification} />
            </_MainNotificationIcon>
            <_MainNotificationText>신입생 전형 요강 PDF 파일 다운로드</_MainNotificationText>
            <_Img src={Download2} />
          </_MainNoticeBox>
          <NoticeBox />
          <NoticeBox />
          <NoticeBox />
          <NoticeBox />
        </_NoticeBox>
      </_NoticeContainer>
    </_Wrapper>
  );
};

export default ApplyandNotice;

const _TitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  font-size: 20px;
  font-weight: 500;
`;

const _NoticeDate = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #b0b0b0;
`;

const _NoticeTextBox = styled.div`
  width: 100%;
  gap: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const _Notice = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
  padding: 24px;
  align-items: center;
  border-radius: 12px;
  border: 2px solid #f8f8f8;
`;

const _MainNotificationIcon = styled.div`
  border-radius: 100%;
  display: flex;
  padding: 7px;
  background-color: #ffdcc8;
`;

const _MainNotificationText = styled.p`
  width: 100%;
  font-size: 20px;
  font-weight: 500;
`;

const _MainNoticeBox = styled.div`
  padding: 12px 24px;
  gap: 12px;
  align-items: center;
  display: flex;
  border-radius: 12px;
  background-color: #fff2ea;
`;

const _Wrapper = styled.div`
  display: flex;
  gap: 32px;
  width: 100%;
`;

const _ApplyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 54px;
  width: 100%;
  max-width: 540px;
`;

const _NoticeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 54px;
  width: 100%;
`;

const _NoticeBox = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;
  flex-direction: column;
`;

const _Title = styled.p`
  font-size: 36px;
  font-weight: 600;
`;

const _Title2 = styled.div`
  font-size: 36px;
  font-weight: 600;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: end;
`;

const _PageMoveButton = styled.button`
  border-radius: 8px;
  padding: 10px 20px;
  background-color: #fff2ea;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
  color: #ff7326;
`;

const _ApplyBox = styled.div`
  display: flex;
  gap: 8px;
`;

const _LineBox = styled.div`
  justify-content: center;
  display: flex;
  padding: 0 24px;
  height: 100%;
`;

const _Line = styled.div`
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, #f8f8f8 -26.61%, #e7e6eb 50.19%, #f8f8f8 130.12%);
`;

const _DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const _DateBox = styled.div`
  display: flex;
  border-radius: 16px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 26px 28px;
  background-color: #f8f8f8;
`;

const _TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const _VideoButton = styled.button`
  display: flex;
  padding: 16px;
  align-items: center;
  justify-content: center;
  background-color: #fff1e8;
  border-radius: 100%;
`;

const _ApplyButton = styled.button`
  display: flex;
  padding: 12px 20px;
  border-radius: 8px;
  background-color: #ff7e36;
  font-size: 18px;
  font-weight: 700;
`;

const _SessionName = styled.p`
  font-size: 24px;
  font-weight: 500;
`;

const _Date = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #969696;
`;

const _Img = styled.img``;
