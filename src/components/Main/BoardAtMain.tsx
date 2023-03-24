import React from 'react';
import styled from '@emotion/styled';
import { Text } from '@team-entry/design_system';
import Arrow from '../../assets/BoardArrow.svg';
import { boardContent } from '../../constant/main';
import { Link } from 'react-router-dom';

const BoardsAtMain = () => {
  return (
    <Boards>
      {boardContent.map((item) => (
        <Board key={item.id}>
          <BoardTitle>
            <Link to={item.link}>
              <Text color="black600" size="title2">
                {item.title} <img src={Arrow} alt="arrow" />
              </Text>
            </Link>
          </BoardTitle>
          {item.content.map((item, i) => (
            <BoardContent key={i} color="realBlack" size="body1">
              {item}
            </BoardContent>
          ))}
        </Board>
      ))}
    </Boards>
  );
};

export default BoardsAtMain;

const Boards = styled.div`
  display: flex;
  gap: 30px;
  @media screen and (max-width: 769px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Board = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 21rem;
  height: 14rem;
  margin-left: 0.5%;
`;

const BoardTitle = styled.div`
  width: 21rem;
  padding-left: 4px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`;

const BoardContent = styled(Text)`
  width: 20.5rem;
  height: 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;
