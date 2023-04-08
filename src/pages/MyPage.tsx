import React from 'react';
import styled from '@emotion/styled';
import { Button, Text, theme } from '@team-entry/design_system';
import { Mobile, Pc } from '../hooks/useResponsive';
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
      <_Wrapper>
        <_User>
          <_UserInfo>
            <Pc>
              <Text color="realBlack" size="header1">
                김이름 지원자님
              </Text>
              <Text color="black500" size="body1">
                010-1234-1234
              </Text>
            </Pc>
            <Mobile>
              <Text color="realBlack" size="body1">
                김이름 지원자님
              </Text>
              <Text color="black500" size="body3">
                010-1234-1234
              </Text>
            </Mobile>
          </_UserInfo>
          <_UserButtons>
            <Button onClick={onClick}>비밀번호 변경</Button>
            <Button color="delete" kind="delete" onClick={onClick}>
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
            일반 전형
          </Text>
          <div style={{ height: '4px' }} />
          <Text color="black900" size="title2">
            지원서 제출 완료
          </Text>
          <_ApplyButtons>
            <Pc>
              <Button onClick={onClick}>원서 다운로드</Button>
              <Button onClick={onClick}>발표 결과 확인</Button>
              <Button color="delete" kind="delete" onClick={onClick}>
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
        <BoardElement isNumber={true} isTopBorder={false} isComment={true} isWriteDay={true} isWriter={true} />
        <BoardElement isNumber={true} isTopBorder={false} isComment={true} isWriteDay={true} isWriter={true} />
        <BoardElement isNumber={true} isTopBorder={false} isComment={true} isWriteDay={true} isWriter={true} />
        <BoardElement isNumber={true} isTopBorder={false} isComment={true} isWriteDay={true} isWriter={true} />
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
