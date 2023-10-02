import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { Text, theme } from '@team-entry/design_system';
import { Mobile, Pc } from '../hooks/useResponsive';
import BoardHeader from '../components/Board/BoardHeader';
import BoardElement from '../components/Board/BoardElement';
import BoardTitle from '../components/Board/BoardTitle';
import { GetAllQna } from '@/utils/api/qna';
import { AuthorityColorType, useAuthority } from '@/hooks/useAuthority';
import { GetAllFaq } from '@/utils/api/faq';
import PageNation from '@/components/PageNation';
import { FaqType } from '@/utils/api/faq/types';

const CustomerPage = () => {
  const [category, setCategory] = useState<FaqType>('');
  const categories: Record<string, FaqType> = {
    전체: '',
    '입학 문의': 'ADMISSION',
    '진학 문의': 'COURSE',
    '학교 생활': 'SCHOOL_LIFE',
    기타: 'OTHER',
  };

  const { isAdmin, authorityColor } = useAuthority();

  const { data } = GetAllQna();

  const { data: getAllFaq } = GetAllFaq(category);

  const [searchParams, setSearchParams] = useSearchParams();
  const [current, setCurrent] = useState(0);

  const setType = (current: boolean) => {
    current ? searchParams.set('type', 'faq') : searchParams.set('type', 'qna');

    setSearchParams(searchParams);
  };

  return (
    <_Container>
      <_Wrapper>
        <BoardTitle
          click={searchParams.get('type') === 'faq'}
          setClick={setType}
          title="문의사항"
          subTitle="입학 상담 문의: 042-866-8811, 042-866-8814"
          button1="Q&A"
          button2="자주 묻는 질문"
          button3="질문 작성"
          isCustomer
          link={isAdmin ? 'writeFAQ' : 'write'}
        />

        {searchParams.get('type') !== 'faq' ? (
          <>
            <BoardHeader isNumber isTopBorder={false} isComment isWriteDay isWriter />
            {data?.questions?.map((qna, idx) => {
              return (
                <Link to={`/customer/${qna.id}`}>
                  <BoardElement
                    title={qna.title}
                    boardNumber={data.questions.length - idx}
                    createdAt={qna.created_at}
                    userName={qna.username}
                    isPublic={qna.is_public}
                    isReplied={qna.is_replied}
                    isNumber={true}
                    isTopBorder={false}
                    isComment={true}
                    isWriteDay={true}
                    isWriter={true}
                  />
                </Link>
              );
            })}
          </>
        ) : (
          <>
            <_Categories>
              {Object.entries(categories).map((res, i) => {
                return (
                  <>
                    <Pc>
                      <Text
                        color={res[1] === category ? `${authorityColor}500` : `${authorityColor}100`}
                        size="title2"
                        cursor="pointer"
                        onClick={() => setCategory(res[1])}
                      >
                        {res[0]}
                      </Text>
                    </Pc>
                    <Mobile>
                      <Text
                        color={res[1] === category ? `${authorityColor}500` : `${authorityColor}100`}
                        size="body3"
                        cursor="pointer"
                        onClick={() => setCategory(res[1])}
                      >
                        {res[0]}
                      </Text>
                    </Mobile>
                    {res[0] !== '기타' && <_Circle authorityColor={authorityColor} />}
                  </>
                );
              })}
            </_Categories>
            <BoardHeader isNumber={false} isTopBorder={true} />
            {getAllFaq?.map((faq) => (
              <BoardElement
                content={faq.content}
                createdAt={faq.created_at}
                title={faq.title}
                faq_type={faq.faq_type}
                isNumber={false}
                isTopBorder={true}
                isOpen={true}
                isPublic
              />
            ))}
          </>
        )}
        <PageNation pageNum={1} current={current} setCurrent={setCurrent} />
      </_Wrapper>
    </_Container>
  );
};

export default CustomerPage;

const _Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

const _Wrapper = styled.div`
  margin-top: 7rem;
  width: 100%;
  max-width: 60rem;
  padding: 0 20px;
  height: 38rem;
`;

const _Categories = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px;
  max-width: 60rem;
  width: 100%;
  @media screen and (max-width: 769px) {
    gap: 5px;
  }
`;

const _Circle = styled.div<{ authorityColor: AuthorityColorType }>`
  width: 4px;
  height: 4px;
  background-color: ${({ authorityColor }) => theme.color[`${authorityColor}100`]};
  border-radius: 50px;
`;
