import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { Text } from '@team-entry/design_system';
import Arrow from '../../assets/BoardArrow.svg';
import { Link } from 'react-router-dom';
import { GetAllNotice } from '@/utils/api/notice';
import { GetAllFaq } from '@/utils/api/faq';

const BoardsAtMain = () => {
  const { data: noticeData } = GetAllNotice('FRESHMAN');
  const { data: faqData } = GetAllFaq();
  console.log(!!faqData);
  return (
    <Boards>
      <Board>
        <BoardTitle>
          <Link to="/notice">
            <Text color="black600" size="title2">
              입학 공지사항 <img src={Arrow} alt="arrow" />
            </Text>
          </Link>
        </BoardTitle>
        {noticeData?.notices.splice(0, 5).map((item, i) => (
          <BoardContent key={i} color="black900" size="body1">
            <Link to={`/notice/${item.id}`}>{item.title}</Link>
          </BoardContent>
        ))}
        {!noticeData?.notices?.length && (
          <BoardContent color="black900" size="body1">
            등록된 공지사항이 없습니다.
          </BoardContent>
        )}
      </Board>

      <Board>
        <BoardTitle>
          <Link to="/customer?type=faq">
            <Text color="black600" size="title2">
              자주 묻는 질문 <img src={Arrow} alt="arrow" />
            </Text>
          </Link>
        </BoardTitle>
        {faqData?.splice(0, 5).map((item, i) => (
          <BoardContent key={i} color="black900" size="body1">
            <Link to="/customer?type=faq">{item.title}</Link>
          </BoardContent>
        ))}
        {!faqData?.length && (
          <BoardContent color="black900" size="body1">
            등록된 질문이 없습니다.
          </BoardContent>
        )}
      </Board>
    </Boards>
  );
};

export default BoardsAtMain;

const Boards = styled.div`
  display: flex;
  gap: 20px;
  margin-right: 6px;
  margin-left: 20px;
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
  justify-content: flex-start;
  gap: 10px;
  width: 20rem;
  height: 14rem;
  margin-left: 0.5%;
`;

const BoardTitle = styled.div`
  width: 20rem;
  padding-left: 4px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`;

const BoardContent = styled(Text)`
  width: 20rem;
  height: 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;
