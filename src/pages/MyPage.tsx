import React from 'react';
import styled from '@emotion/styled';
import { Button, Text, theme } from '@team-entry/design_system';
import BoardElement from '../components/Board/BoardElement';
import BoardHeader from '../components/Board/BoardHeader';
import { useModal } from '../hooks/useModal';
import CancelModal from '@/components/Modal/CancelModal';

const MyPage = () => {
  const { Modal, open, close, setModalState, modalState } = useModal();
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
      <_User>
        <_UserInfo>
          <Text color="realBlack" size="header1">
            김이름 지원자님
          </Text>
          <Text color="black500" size="body1">
            010-1234-1234
          </Text>
        </_UserInfo>
        <_UserButtons>
          <Button onClick={onClick}>비밀번호 변경</Button>
          <Button color="delete" kind="delete" onClick={openSignOutModal}>
            회원 탈퇴
          </Button>
        </_UserButtons>
      </_User>
      <_Wrapper>
        <_Apply>
          <Text color="black900" size="body1">
            지원 상태
          </Text>
          <_Line />
          <Text color="black900" size="body3">
            일반 전형
          </Text>
          <div style={{ height: '4px' }} />
          <Text color="black900" size="title2">
            지원서 제출 완료
          </Text>
          <_ApplyButtons>
            <Button onClick={onClick}>원서 다운로드</Button>
            <Button onClick={onClick}>발표 결과 확인</Button>
            <Button color="delete" kind="delete" onClick={openCancelSubmitModal}>
              원서 최종제출 취소
            </Button>
          </_ApplyButtons>
        </_Apply>
        <div style={{ width: '62rem' }}>
          <_BoarderTitle>
            <Text margin={['left', 16]} color="black700" size="body1">
              내가 작성한 질문
            </Text>
          </_BoarderTitle>
          <BoardElement isNumber={true} isTopBorder={false} isComment={true} isWriteDay={true} isWriter={true} />
          <BoardElement isNumber={true} isTopBorder={false} isComment={true} isWriteDay={true} isWriter={true} />
          <BoardElement isNumber={true} isTopBorder={false} isComment={true} isWriteDay={true} isWriter={true} />
          <BoardElement isNumber={true} isTopBorder={false} isComment={true} isWriteDay={true} isWriter={true} />
        </div>
      </_Wrapper>
      <Modal>
        {modalState === 'CANCEL_SUBMIT' && (
          <CancelModal
            title="최종제출 취소"
            subTitle="정말 최종제출을 취소하시겠습니까?"
            button={<div style={{ width: 200 }}>취소</div>}
            onClick={close}
          />
        )}
        {modalState === 'SIGN_OUT' && (
          <CancelModal
            title="회원 탈퇴"
            subTitle="정말 탈퇴하시겠습니까?"
            button={<div style={{ width: 200 }}>회원 탈퇴</div>}
            onClick={close}
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
`;

const _User = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 62rem;
  margin-bottom: 1.5rem;
`;

const _UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const _UserButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 62rem;
  height: 30rem;
`;

const _Apply = styled.div`
  width: 62rem;
  height: 12rem;
  background-color: ${theme.color.black50};
  padding: 0.5rem;
  border-radius: 4px;
`;

const _Line = styled.div`
  width: 61rem;
  height: 0rem;
  border-bottom: 1px solid ${theme.color.black100};
  margin: 1rem 0rem;
`;

const _ApplyButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 4rem;
`;

const _BoarderTitle = styled.div`
  display: flex;
  align-items: center;
  width: 60rem;
  height: 3.5rem;
  border-bottom: 1px solid ${theme.color.black900};
`;
