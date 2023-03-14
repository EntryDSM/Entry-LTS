import { useState } from 'react';
import { IBoard } from '@/interfaces/Board';
import styled from '@emotion/styled';
import { Text, theme } from '@team-entry/design_system';

const BoardElement = (props: IBoard) => {
  const { isNumber, isComment, isWriteDay, isWriter, isOpen = false } = props;
  const [clicked, setClicked] = useState(false);
  const isMobile = window.innerWidth > 400;
  return (
    <>
      <_ElementContainer onClick={() => isOpen && setClicked(!clicked)}>
        <Div>
          {(isMobile || !isNumber) && (
            <Text color="black700" size={isMobile ? 'body1' : 'body3'} width={isMobile ? 6 : 5}>
              {isNumber ? '36' : '입학문의'}
            </Text>
          )}
          <Text color="black800" size={isMobile ? 'body3' : 'body5'} margin={['left', 20]}>
            성적 입력에 관하여...
          </Text>
        </Div>
        <Div>
          {isComment && (
            <Text color="black500" size="body5" width={isMobile ? 6 : 5}>
              대기중
            </Text>
          )}
          {isWriter && (
            <Text color="black500" size="body5" width={isMobile ? 6 : 5}>
              정지관
            </Text>
          )}
          {isWriteDay && (
            <Text color="black500" size="body5" width={isMobile ? 6 : 5}>
              2023-01-10
            </Text>
          )}
        </Div>
      </_ElementContainer>
      {isOpen && clicked && (
        <Div style={{ height: isMobile ? '14rem' : '10rem', backgroundColor: theme.color.black50 }}>
          <Text color="black800" size={isMobile ? 'body3' : 'body5'} width={isMobile ? 6 : 5}>
            답변
          </Text>
          <_Answer>
            <Text color="black600" size={isMobile ? 'body4' : 'body5'}>
              음 딱히 모르겠다 몸만 오세요
            </Text>
            <Text color="black400" size={isMobile ? 'body5' : 'body3'}>
              2022-12-21
            </Text>
          </_Answer>
        </Div>
      )}
    </>
  );
};

export default BoardElement;

const _ElementContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3rem;
  border-bottom: 1px solid ${theme.color.black100};
  cursor: pointer;
  @media screen and (max-width: 400px) {
    width: 22rem;
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
`;

const _Answer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 14rem;
  margin-left: 20px;
  padding: 20px 0px;
  @media screen and (max-width: 400px) {
    height: 10rem;
  }
`;
