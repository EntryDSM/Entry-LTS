import BoardHeader from '../components/Board/BoardHeader';
import styled from '@emotion/styled';
import BoardElement from '../components/Board/BoardElement';
import { useState } from 'react';
import BoardTitle from '../components/Board/BoardTitle';
import { Link } from 'react-router-dom';
import { useAuthority } from '@/hooks/useAuthority';
import { GetAllNotice } from '@/utils/api/notice';
import { NoticeType } from '@/utils/api/notice/types';

const NoticePage = () => {
  const [noticeType, setNoticeType] = useState(false);
  const { isAdmin } = useAuthority();

  const { data } = GetAllNotice(noticeType ? 'FRESHMAN' : 'ADMISSION');

  return (
    <_Container>
      <_Wrapper>
        <BoardTitle
          click={noticeType}
          setClick={setNoticeType}
          title="공지사항"
          subTitle="학교에서 게시한 입학 공지사항을 확인하세요"
          button1="입학 공지사항"
          button2="예비 신입생 안내"
          button3={isAdmin && '공지작성'}
          isCustomer={false}
          link="write"
        />
        <BoardHeader isNumber={true} isTopBorder={false} isComment={false} isWriteDay={true} isWriter={false} />
        {data?.notices.reverse().map((notice, idx) => {
          return (
            <Link to={`/notice/${notice.id}`} state={{ noticeId: notice.id }}>
              <BoardElement
                boardNumber={data.notices.length - idx}
                createdAt={notice.created_at}
                title={notice.title}
                isNumber={true}
                isTopBorder={false}
                isComment={false}
                isWriteDay={true}
                isWriter={false}
                isPublic
              />
            </Link>
          );
        })}
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
  max-width: 60rem;
  width: 100%;
  height: 38rem;
  padding: 0 20px;
`;
