import BoardElement from '../components/Board/BoardElement';
import styled from '@emotion/styled';
import React from 'react';

const MyPage = () => {
  return (
    <_Container>
      <_Wrapper>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <_Text fontSize={32} fontWeight={700}>
              김이름 지원자님
            </_Text>
            <_Text fontSize={18} fontWeight={500}>
              010-1234-1234
            </_Text>
          </div>
          <div>
            <_BasicButton>비밀번호 변경</_BasicButton>
            <_OutlineButton>회원 탈퇴</_OutlineButton>
          </div>
        </div>
        <_StateWrapper>
          <_Text fontSize={18} fontWeight={500}>
            지원 상태
          </_Text>
          <_Text fontSize={18} fontWeight={500}>
            일반 전형
          </_Text>
          <_BasicButton>원서 다운로드</_BasicButton>
          <_BasicButton>발표 결과 확인</_BasicButton>
          <_OutlineButton>원서 최종제출 취소</_OutlineButton>
          <BoardElement
            isNumber={true}
            isTopBorder={true}
            isComment={true}
            isWriteDay={true}
            isWriter={true}
          ></BoardElement>
        </_StateWrapper>
      </_Wrapper>
    </_Container>
  );
};

export default MyPage;

const _Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

const _Wrapper = styled.div`
  margin-top: 7rem;
  width: 60rem;
  height: 30rem;
  border: 1px solid black;
`;

const _Text = styled.div<{ fontSize: number; fontWeight: number }>`
  color: #141414;
  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWeight};
`;

const _BasicButton = styled.button`
  padding: 12px;
  height: 42px;
  border: 0;
  outline: 0;
  border-radius: 5px;
  background-color: #141414;
  color: white;
`;

const _OutlineButton = styled.button`
  padding: 12px;
  height: 42px;
  border: 0;
  outline: 0;
  border: 1px solid #e84045;
  border-radius: 5px;
  background-color: #ffffff;
  color: #e84045;
`;

const _StateWrapper = styled.div`
  width: 60rem;
  padding: 16px;
  height: 10rem;
  background-color: #fbfbfb;
  border-radius: 4px;
`;
