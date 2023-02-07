import React from 'react';
import styled from '@emotion/styled';
import { Button, Text, theme } from '@team-entry/design_system';
import BoardElement from '../components/Board/BoardElement';
import BoardHeader from '../components/Board/BoardHeader';

const MyPage = () => {
  const onClick = () => {
    console.log('clicked!!');
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
          <Button color="delete" kind="delete" onClick={onClick}>
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
            <Button color="delete" kind="delete" onClick={onClick}>
              원서 최종제출 취소
            </Button>
          </_ApplyButtons>
        </_Apply>
        <div style={{ width: '62rem' }}>
          <_BoarderTitle>
            <Text color="black700" size="body1">
              내가 작성한 질문
            </Text>
          </_BoarderTitle>
          <BoardElement isNumber={true} isTopBorder={false} isComment={true} isWriteDay={true} isWriter={true} />
          <BoardElement isNumber={true} isTopBorder={false} isComment={true} isWriteDay={true} isWriter={true} />
          <BoardElement isNumber={true} isTopBorder={false} isComment={true} isWriteDay={true} isWriter={true} />
          <BoardElement isNumber={true} isTopBorder={false} isComment={true} isWriteDay={true} isWriter={true} />
        </div>
      </_Wrapper>
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
  margin-top: 14rem;
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
  justify-content: space-between;
  height: 4.1rem;
`;

const _UserButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 15rem;
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
  padding: 0.5rem;
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
  justify-content: space-between;
  width: 28rem;
  height: 4rem;
`;

const _BoarderTitle = styled.div`
  display: flex;
  align-items: center;
  width: 60rem;
  height: 3.5rem;
  border-bottom: 1px solid ${theme.color.black900};
`;
