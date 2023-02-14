import { useState } from 'react';
import { IBoard } from '@/interfaces/Board';
import styled from '@emotion/styled';
import { Text, theme } from '@team-entry/design_system';

const BoardElement = (props: IBoard) => {
  const { isNumber, isComment, isWriteDay, isWriter, isOpen = false } = props;
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <_ElementContainer onClick={() => isOpen && setClicked(!clicked)}>
        <Div>
          {isNumber ? (
            <Text color="black800" size="body3" width={6}>
              36
            </Text>
          ) : (
            <Text color="black800" size="body3" width={6}>
              입학 문의
            </Text>
          )}
          <Text color="black800" size="body3" margin={['left', 20]}>
            성적 입력에 관하여...
          </Text>
        </Div>
        <Div>
          {isComment && (
            <Text color="black500" size="body5" width={6}>
              대기중
            </Text>
          )}
          {isWriteDay && (
            <Text color="black500" size="body5" width={6}>
              정지관
            </Text>
          )}
          {isWriter && (
            <Text color="black500" size="body5" width={6}>
              2023-01-10
            </Text>
          )}
        </Div>
      </_ElementContainer>
      {isOpen && clicked && (
        <Div style={{ height: '14rem', backgroundColor: theme.color.black50 }}>
          <Text color="black800" size="body3" width={6}>
            답변
          </Text>
          <_Answer>
            <Text color="black600" size="body4">
              음 딱히 모르겠다 몸만 오세요
            </Text>
            <Text color="black400" size="body5">
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
  width: 60rem;
  height: 3rem;
  border-bottom: 1px solid ${theme.color.black100};
  cursor: pointer;
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
`;
