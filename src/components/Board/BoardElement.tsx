import { useState } from 'react';
import { IBoard } from '@/interfaces/Board';
import styled from '@emotion/styled';

const BoardElement = (props: IBoard) => {
  const { isNumber, isComment, isWriteDay, isWriter, isOpen = false } = props;
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <_ElementContainer onClick={() => isOpen && setClicked(!clicked)}>
        <Div>
          {isNumber ? (
            <_Text fontSize={16} fontColor={'#343434'} fontWeight={500} width={6}>
              36
            </_Text>
          ) : (
            <_Text fontSize={16} fontColor={'#343434'} fontWeight={500} width={6}>
              입학 문의
            </_Text>
          )}
          <_Text style={{ marginLeft: 20 }} fontSize={16} fontColor={'#343434'} fontWeight={500}>
            성적 입력에 관하여...
          </_Text>
        </Div>
        <Div>
          {isComment && (
            <_Text fontSize={14} fontColor={'#737373'} fontWeight={500} width={6}>
              대기중
            </_Text>
          )}
          {isWriteDay && (
            <_Text fontSize={14} fontColor={'#737373'} fontWeight={500} width={6}>
              정지관
            </_Text>
          )}
          {isWriter && (
            <_Text fontSize={14} fontColor={'#737373'} fontWeight={500} width={6}>
              2023-01-10
            </_Text>
          )}
        </Div>
      </_ElementContainer>
      {isOpen && clicked && (
        <Div style={{ height: '14rem', backgroundColor: '#FBFBFB' }}>
          <_Text fontSize={16} fontColor={'#343434'} fontWeight={500} width={6}>
            답변
          </_Text>
          <_Answer>
            <_Text fontSize={16} fontColor={'#5F5F5F'} fontWeight={400}>
              음 딱히 모르겠다 몸만 오세요
            </_Text>
            <_Text fontSize={14} fontColor={'#969696'} fontWeight={500}>
              2022-12-21
            </_Text>
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
  border-bottom: 1px solid #e6e6e6;
  cursor: pointer;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
`;

const _Text = styled.div<{ fontSize: number; fontColor?: string; fontWeight?: number; width?: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWeight};
  width: ${(props) => props.width}rem;
  height: 3rem;
  color: ${(props) => props.fontColor};
`;

const _Answer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 14rem;
  margin-left: 20px;
`;
