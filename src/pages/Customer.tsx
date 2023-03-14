import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Text, theme } from '@team-entry/design_system';
import { Mobile, Pc } from '../hooks/useResponsive';
import BoardHeader from '../components/Board/BoardHeader';
import BoardElement from '../components/Board/BoardElement';
import BoardTitle from '../components/Board/BoardTitle';

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
  return (
    <_Container>
      <_Wrapper>
        <BoardTitle
          click={click}
          setClick={setClick}
          title="고객문의"
          subTitle="입학 상담 문의: 042-8832-1121"
          button1="Q&A"
          button2="자주 묻는 질문"
          button3="질문 작성"
          isCustomer={true}
          link={'write'}
        ></BoardTitle>

        {!click ? (
          <>
            <BoardHeader isNumber={true} isTopBorder={false} isComment={true} isWriteDay={true} isWriter={true} />
            <Link to="/customer/1">
              <BoardElement isNumber={true} isTopBorder={false} isComment={true} isWriteDay={true} isWriter={true} />
            </Link>
            <BoardElement isNumber={true} isTopBorder={false} isComment={true} isWriteDay={true} isWriter={true} />
            <BoardElement isNumber={true} isTopBorder={false} isComment={true} isWriteDay={true} isWriter={true} />
            <BoardElement isNumber={true} isTopBorder={false} isComment={true} isWriteDay={true} isWriter={true} />
            <BoardElement isNumber={true} isTopBorder={false} isComment={true} isWriteDay={true} isWriter={true} />
            <BoardElement isNumber={true} isTopBorder={false} isComment={true} isWriteDay={true} isWriter={true} />
            <BoardElement isNumber={true} isTopBorder={false} isComment={true} isWriteDay={true} isWriter={true} />
            <BoardElement isNumber={true} isTopBorder={false} isComment={true} isWriteDay={true} isWriter={true} />
            <BoardElement isNumber={true} isTopBorder={false} isComment={true} isWriteDay={true} isWriter={true} />
            <BoardElement isNumber={true} isTopBorder={false} isComment={true} isWriteDay={true} isWriter={true} />
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
                        color={name === category ? `orange500` : `orange100`}
                        size="title2"
                        cursor="pointer"
                        onClick={() => setCategory(name)}
                      >
                        {name}
                      </Text>
                    </Pc>
                    <Mobile>
                      <Text
                        color={name === category ? `orange500` : `orange100`}
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
            <BoardElement isNumber={false} isTopBorder={true} isOpen={true} />
            <BoardElement isNumber={false} isTopBorder={true} isOpen={true} />
            <BoardElement isNumber={false} isTopBorder={true} />
            <BoardElement isNumber={false} isTopBorder={true} />
            <BoardElement isNumber={false} isTopBorder={true} />
            <BoardElement isNumber={false} isTopBorder={true} />
            <BoardElement isNumber={false} isTopBorder={true} />
            <BoardElement isNumber={false} isTopBorder={true} />
            <BoardElement isNumber={false} isTopBorder={true} />
            <BoardElement isNumber={false} isTopBorder={true} />
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
  width: 60rem;
  height: 38rem;
  @media screen and (max-width: 769px) {
    padding: 20px;
  }
`;

const _Categories = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px;
  width: 60rem;
  @media screen and (max-width: 769px) {
    width: 100%;
    gap: 5px;
  }
`;

const _Circle = styled.div`
  width: 4px;
  height: 4px;
  background-color: ${theme.color.orange100};
  border-radius: 50px;
`;
