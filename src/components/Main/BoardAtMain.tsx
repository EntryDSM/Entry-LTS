import React from 'react';
import styled from '@emotion/styled';
import { Text } from '@team-entry/design_system';
import Arrow from '../../assets/BoardArrow.svg';

const boardContent = [
  {
    id: 0,
    title: '입학 공지사항',
    content: [
      '2023학년도 신입생 입학전 과제 제출 안내',
      '2023학년도 신입생 오리엔테이션 집행 안내',
      '2023학년도 신입생 대상 정밀 건강검진 안내',
      '2023학년도 신입생 2차전형 안내',
    ],
  },
  {
    id: 1,
    title: '자주 묻는 질문',
    content: [
      '전학 또는 편입으로 입학할 수 있나요?',
      '자기소개서는 공백을 포함하나요?',
      '다른 마이스터고에 중복 지원이 가능한가요?',
      '여런 전형에 중복 지원이 가능한가요?',
    ],
  },
];

const BoardsAtMain = () => {
  return (
    <>
      {boardContent.map((item) => (
        <Board key={item.id}>
          <BoardTitle>
            <Text color="black600" size="title2">
              {item.title} <img src={Arrow} alt="arrow" />
            </Text>
          </BoardTitle>
          {item.content.map((item, i) => (
            <BoardContent key={i}>
              <Text color="realBlack" size="body1">
                {item.length > 20 ? `${item.slice(0, 20)}...` : item}
              </Text>
            </BoardContent>
          ))}
        </Board>
      ))}
    </>
  );
};

export default BoardsAtMain;

const Board = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 21rem;
  height: 14rem;
  margin-left: 2rem;
`;

const BoardTitle = styled.div`
  width: 21rem;
  padding-left: 4px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`;

const BoardContent = styled.div`
  width: 20.5rem;
  height: 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
