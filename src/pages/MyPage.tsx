import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Button, Icon, Text, theme } from '@team-entry/design_system';
import { Mobile, Pc } from '../hooks/useResponsive';
import BoardElement from '../components/Board/BoardElement';
import { useModal } from '../hooks/useModal';
import CancelModal from '@/components/Modal/CancelModal';
import { ApplyInfoStatus, DeleteUserInfo, DeleteUserPdf } from '@/utils/api/user';
import { AUTH_URL } from '@/constant/env';
import { DownloadPdf } from '@/utils/api/pdf';
import { GetFirstRoundPass, GetSecondRoundPass } from '@/utils/api/pass';
import { getSchedule } from '@/utils/api/schedule';
import BoardHeader from '@/components/Board/BoardHeader';
import { GetMyQna } from '@/utils/api/qna';
import { Link } from 'react-router-dom';

const MyPage = () => {
  const { Modal, open, close, setModalState, modalState } = useModal();
  const { mutate: deleteUserInfo } = DeleteUserInfo();
  const { data } = ApplyInfoStatus();
  const { mutate: deleteUserPdf } = DeleteUserPdf(data?.receipt_code);
  const onDownloadPdf = DownloadPdf();

  // const { data: schedule } = getSchedule();
  // const currentDate = new Date();
  // const firstAnnouncementDate = new Date(schedule?.schedules[2]?.date ?? '');
  // const secondAnnouncementDate = new Date(schedule?.schedules[4]?.date ?? '');
  // const { data: firstPass } = GetFirstRoundPass();
  // const { data: secondPass } = GetSecondRoundPass();
  //
  // let message;
  // if (firstAnnouncementDate <= currentDate && currentDate.getDate() <= secondAnnouncementDate.getDate() + 3) {
  //   message = firstPass ? '1차 전형에 합격하였습니다!' : '1차 전형에 합격하지 못하였습니다.';
  // } else if (secondAnnouncementDate <= currentDate && currentDate.getDate() <= secondAnnouncementDate.getDate() + 3) {
  //   message = secondPass ? '최종합격되었습니다.' : '불합격입니다.';
  // } else {
  //   message = '지금은 발표기간이 아닙니다';
  // }

  const { data: myQnaList } = GetMyQna();

  const onClick = () => {
    console.log('clicked!!');
  };

  const openCancelSubmitModal = () => {
    setModalState('CANCEL_SUBMIT');
    open();
  };

  const openSignOutModal = () => {
    setModalState('SIGN_OUT');
    open();
  };

  return (
    <_Container>
      <_Wrapper>
        <_User>
          <_UserInfo>
            <Pc>
              <Text color="realBlack" size="header1">
                {data?.name} 지원자님
              </Text>
              <Text color="black500" size="body1">
                {data?.phone_number.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)}
              </Text>
            </Pc>
            <Mobile>
              <Text color="realBlack" size="body1">
                {data?.name} 지원자님
              </Text>
              <Text color="black500" size="body3">
                {data?.phone_number.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`)}
              </Text>
            </Mobile>
          </_UserInfo>
          <_UserButtons>
            <Button
              onClick={() => {
                window.location.href = `${AUTH_URL}/change-pwd`;
              }}
            >
              비밀번호 변경
            </Button>
            <Button color="delete" kind="delete" onClick={openSignOutModal}>
              회원 탈퇴
            </Button>
          </_UserButtons>
        </_User>

        <_Apply>
          <Text color="black900" size="body1">
            지원 상태
          </Text>
          <_Line />
          <Text color="black900" size="body3">
            {data?.application_type === 'COMMON' && '일반 전형'}
            {data?.application_type === 'MEISTER' && '마이스터 전형'}
            {data?.application_type === 'SOCIAL' && '사회통합 전형'}
          </Text>
          <div style={{ height: '4px' }} />
          <Text color="black900" size="title2">
            지원서 제출 {data?.submitted ? '완료' : '미완료'}
          </Text>
          <_ApplyButtons>
            <Pc>
              <Button onClick={onDownloadPdf}>원서 다운로드</Button>
              <Button onClick={onClick}>발표 결과 확인</Button>
              <Button color="delete" kind="delete" onClick={openCancelSubmitModal}>
                원서 최종제출 취소
              </Button>
            </Pc>
            <Mobile>
              <Button onClick={onClick}>발표 결과 확인</Button>
            </Mobile>
          </_ApplyButtons>
        </_Apply>

        <_BoarderTitle>
          <Pc>
            <Text margin={['left', 16]} color="black700" size="body1">
              내가 작성한 질문
            </Text>
          </Pc>
          <Mobile>
            <Text margin={['left', 16]} color="black700" size="body3">
              내가 작성한 질문
            </Text>
          </Mobile>
        </_BoarderTitle>
        <div style={{ width: '100%' }}>
          <BoardHeader isNumber={true} isTopBorder={false} isComment={true} isWriteDay={true} isWriter={true} />
          {myQnaList?.questions?.map((qna, idx) => {
            return (
              <Link to={`/customer/${qna.id}`} state={{ qnaId: qna.id }}>
                <BoardElement
                  title={qna.title}
                  boardNumber={myQnaList.questions.length - idx}
                  createdAt={qna.created_at}
                  userName={qna.username}
                  isPublic={qna.is_public}
                  isReplied={qna.is_replied}
                  isNumber={true}
                  isTopBorder={false}
                  isComment={true}
                  isWriteDay={true}
                  isWriter={true}
                />
              </Link>
            );
          })}
        </div>
      </_Wrapper>
      <Modal>
        {modalState === 'CANCEL_SUBMIT' && (
          <CancelModal
            title="최종제출 취소"
            subTitle="정말 최종제출을 취소하시겠습니까?"
            button={<div style={{ width: 200 }}>최종제출 취소</div>}
            onClick={() => {
              close();
              deleteUserPdf();
            }}
          />
        )}
        {modalState === 'SIGN_OUT' && (
          <CancelModal
            title="회원 탈퇴"
            subTitle="정말 탈퇴하시겠습니까?"
            button={<div style={{ width: 200 }}>회원 탈퇴</div>}
            onClick={() => {
              close();
              deleteUserInfo();
            }}
          />
        )}
      </Modal>
    </_Container>
  );
};

export default MyPage;

const _Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  margin-top: 10rem;
  @media screen and (max-width: 769px) {
    margin-top: 4rem;
  }
`;

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 60rem;
  padding: 0 10px;
  @media screen and (max-width: 769px) {
    width: 100%;
    padding: 20px;
  }
`;

const _User = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  @media screen and (max-width: 769px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

const _UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media screen and (max-width: 769px) {
    flex-direction: row;
    align-items: center;
  }
`;

const _UserButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const _Apply = styled.div`
  width: 100%;
  height: 12rem;
  background-color: ${theme.color.black50};
  padding: 16px;
  border-radius: 4px;
`;

const _Line = styled.div`
  border-bottom: 1px solid ${theme.color.black100};
  margin: 12px 0px;
`;

const _ApplyButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 64px;
`;

const _BoarderTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid ${theme.color.black900};
  @media screen and (max-width: 769px) {
    height: 40px;
    margin-top: 60px;
  }
`;
