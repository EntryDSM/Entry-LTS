import BoardHeader from '../components/Board/BoardHeader';
import styled from '@emotion/styled';
import BoardElement from '../components/Board/BoardElement';
import { useState } from 'react';
import BoardTitle from '../components/Board/BoardTitle';
import { Link, useSearchParams } from 'react-router-dom';
import { useAuthority } from '@/hooks/useAuthority';
import { GetAllNotice } from '@/utils/api/notice';

const NoticePage = () => {
  const { isAdmin } = useAuthority();

  const [current, setCurrent] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const setType = (current: boolean) => {
    current ? searchParams.set('type', 'GUIDE') : searchParams.set('type', 'NOTICE');
    setCurrent(0);

    setSearchParams(searchParams);
  };

  const { data } = GetAllNotice(searchParams.get('type') === 'GUIDE' ? 'GUIDE' : 'NOTICE');

  return (
    <_Container>
      <_Wrapper>
        <BoardTitle
          click={searchParams.get('type') === 'GUIDE'}
          setClick={setType}
          title="공지사항"
          subTitle="학교에서 게시한 입학 공지사항을 확인하세요"
          button1="입학 공지사항"
          button2="예비 신입생 안내"
          button3={isAdmin && '공지작성'}
          isCustomer={false}
          link="write"
        />
        <BoardHeader isNumber={true} isTopBorder={false} isComment={false} isWriteDay={true} isWriter={false} />
        {data?.notices.map((notice, idx) => {
          return (
            <Link to={`/notice/${notice.id}`}>
              <BoardElement
                boardNumber={idx + 1}
                createdAt={notice.createdAt}
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
