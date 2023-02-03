import BoardHeader from '../components/Board/BoardHeader';
import styled from '@emotion/styled';
import BoardElement from '../components/Board/BoardElement';
import { useState } from 'react';
import BoardTitle from '../components/Board/BoardTitle';

const NoticePage = () => {
  const [click, setClick] = useState(false);

  return (
    <_Container>
      <_Wrapper>
        <BoardTitle
          click={click}
          setClick={setClick}
          title="공지사항"
          subTitle="학교에서 게시한 입학 공지사항을 확인하세요"
          button1="입학 공지사항"
          button2="예비 신입생 안내"
        />
        <BoardHeader isNumber={true} isTopBorder={false} isComment={false} isWriteDay={true} isWriter={true} />
        <BoardElement isNumber={true} isTopBorder={false} isComment={false} isWriteDay={true} isWriter={true} />
        <BoardElement isNumber={true} isTopBorder={false} isComment={false} isWriteDay={true} isWriter={true} />
        <BoardElement isNumber={true} isTopBorder={false} isComment={false} isWriteDay={true} isWriter={true} />
        <BoardElement isNumber={true} isTopBorder={false} isComment={false} isWriteDay={true} isWriter={true} />
        <BoardElement isNumber={true} isTopBorder={false} isComment={false} isWriteDay={true} isWriter={true} />
        <BoardElement isNumber={true} isTopBorder={false} isComment={false} isWriteDay={true} isWriter={true} />
        <BoardElement isNumber={true} isTopBorder={false} isComment={false} isWriteDay={true} isWriter={true} />
      </_Wrapper>
    </_Container>
  );
};

export default NoticePage;

const _Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

const _Wrapper = styled.div`
  margin-top: 7rem;
  width: 60rem;
  height: 38rem;
`;
