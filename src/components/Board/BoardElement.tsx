import { useState } from 'react';
import styled from '@emotion/styled';
import { IBoard } from '@/interfaces/Board';
import { Text, theme } from '@team-entry/design_system';
import { Mobile, Pc } from '../../hooks/useResponsive';

const BoardElement = (props: IBoard) => {
  const { isNumber, isComment, isWriteDay, isWriter, isOpen = false } = props;
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <_ElementContainer onClick={() => isOpen && setClicked(!clicked)}>
        <Div>
          <Pc>
            <Text color="black700" size="body1" width={6}>
              {isNumber ? '36' : '입학문의'}
            </Text>
            <Text color="black800" size="body3" margin={['left', 20]}>
              성적 입력에 관하여...
            </Text>
          </Pc>
          <Mobile>
            {!isNumber && (
              <Text color="black700" size="body3" margin={['right', 20]}>
                입학문의
              </Text>
            )}
            <Text color="black800" size="body5">
              성적 입력에 관하여...
            </Text>
          </Mobile>
        </Div>
        <Div>
          {isComment && (
            <>
              <Pc>
                <Text color="black500" size="body5" width={6}>
                  대기중
                </Text>
              </Pc>
              <Mobile>
                <Text color="black500" size="body5" width={5}>
                  대기중
                </Text>
              </Mobile>
            </>
          )}
          {isWriter && (
            <Pc>
              <Text color="black500" size="body5" width={6}>
                정지관
              </Text>
            </Pc>
          )}
          {isWriteDay && (
            <>
              <Pc>
                <Text color="black500" size="body5" width={6}>
                  2023-01-10
                </Text>
              </Pc>
              <Mobile>
                <Text color="black500" size="body5" width={5}>
                  2023-01-10
                </Text>
              </Mobile>
            </>
          )}
        </Div>
      </_ElementContainer>
      {isOpen && clicked && (
        <>
          <Pc>
            <_AnswerPart style={{ height: '14rem' }}>
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
            </_AnswerPart>
          </Pc>
          <Mobile>
            <_AnswerPart style={{ height: '10rem' }}>
              <Text color="black800" size="body5" width={5}>
                답변
              </Text>
              <_Answer>
                <Text color="black600" size="body5">
                  음 딱히 모르겠다 몸만 오세요
                </Text>
                <Text color="black400" size="body3">
                  2022-12-21
                </Text>
              </_Answer>
            </_AnswerPart>
          </Mobile>
        </>
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
  @media screen and (max-width: 769px) {
    padding: 20px;
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
`;

const _AnswerPart = styled.div`
  display: flex;
  align-items: center;
  background-color: ${theme.color.black50};
`;

const _Answer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 14rem;
  margin-left: 20px;
  padding: 20px 0px;
  @media screen and (max-width: 769px) {
    height: 10rem;
  }
`;
