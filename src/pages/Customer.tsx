import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Text, theme } from '@team-entry/design_system';
import { Mobile, Pc } from '../hooks/useResponsive';
import BoardHeader from '../components/Board/BoardHeader';
import BoardElement from '../components/Board/BoardElement';
import BoardTitle from '../components/Board/BoardTitle';
import { GetAllQna } from '@/utils/api/qna';
import { useAuthority } from '@/hooks/useAuthority';
import { GetAllFaq } from '@/utils/api/faq';

const CustomerPage = () => {
  const [click, setClick] = useState(false);
  const [category, setCategory] = useState('전체');
  const categories = [
    { name: '전체' },
    { name: '입학 문의' },
    { name: '취업 문의' },
    { name: '진학 문의' },
    { name: '기타' },
  ];
  const { isAdmin, authorityColor } = useAuthority();

  const { data } = GetAllQna();

  const { data: getAllFaq } = GetAllFaq();

  return (
    <_Container>
      <_Wrapper>
        <BoardTitle
          click={click}
          setClick={setClick}
          title="문의사항"
          subTitle="입학 상담 문의: 042-886-8814"
          button1="Q&A"
          button2="자주 묻는 질문"
          button3="질문 작성"
          isCustomer={true}
          link={isAdmin ? 'writeFAQ' : 'write'}
        />

        {!click ? (
          <>
            <BoardHeader isNumber={true} isTopBorder={false} isComment={true} isWriteDay={true} isWriter={true} />
            {data?.questions?.map((qna, idx) => {
              return (
                <Link to={`/customer/${qna.id}`} state={{ qnaId: qna.id }}>
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
              {categories.map((res, i) => {
                const { name } = res;
                return (
                  <>
                    <Pc>
                      <Text
                        color={name === category ? `${authorityColor}500` : `${authorityColor}100`}
                        size="title2"
                        cursor="pointer"
                        onClick={() => setCategory(name)}
                      >
                        {name}
                      </Text>
                    </Pc>
                    <Mobile>
                      <Text
                        color={name === category ? `${authorityColor}500` : `${authorityColor}100`}
                        size="body3"
                        cursor="pointer"
                        onClick={() => setCategory(name)}
                      >
                        {name}
                      </Text>
                    </Mobile>
                    {name !== '기타' && <_Circle />}
                  </>
                );
              })}
            </_Categories>
            <BoardHeader isNumber={false} isTopBorder={true} />
            {getAllFaq.map((faq) => (
              <BoardElement
                content={faq.content}
                createdAt={faq.created_at}
                title={faq.title}
                isNumber={false}
                isTopBorder={true}
                isOpen={true}
                isPublic
              />
            ))}
          </>
        )}
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

const _Circle = styled.div`
  width: 4px;
  height: 4px;
  background-color: ${theme.color.orange100};
  border-radius: 50px;
`;
