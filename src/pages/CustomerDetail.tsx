import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Input, Spinner, Stack, Text, Textarea, theme } from '@team-entry/design_system';
import { Mobile, Pc } from '../hooks/useResponsive';
import { GetQnaDetail } from '@/utils/api/qna';
import { useAuthority } from '@/hooks/useAuthority';
import QnaAnswer from '@/components/Answer/QnaAnswer';
const { isAdmin, authorityColor } = useAuthority();

const CustomerDetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { qnaId } = location.state;
  const [writeAnswer, setWriteAnswer] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const { data, isLoading } = GetQnaDetail(qnaId);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };

  if (isLoading)
    return (
      <_Loading>
        <Spinner margin={[0, 'auto']} size={40} color="orange" />
      </_Loading>
    );
  return (
    <_Container>
      <_Wrapper>
        {writeAnswer && (
          <Text size="header1" color="black" margin={[0, 0, 30, 0]}>
            Q&A 답변작성
          </Text>
        )}
        <_QustionBackground isWriteAnswer={writeAnswer} />
        <Pc>
          <_Title>
            <Text color={`${authorityColor}500`} size="header2">
              Q.
            </Text>
            <Text color="black900" size="title1">
              {data?.title}
            </Text>
          </_Title>
          <Text color="black600" size="body2">
            {data?.content}
          </Text>
          <_QuestionBottom>
            <Text color="black400" size="body1">
              36 | {data?.username} | {data?.created_at?.slice(0, 10)}
            </Text>
            {isAdmin && !writeAnswer && (
              <_EditCustomerButtons>
                {data?.is_replied ? (
                  <Button color="black" kind="contained" onClick={() => {}}>
                    수정
                  </Button>
                ) : (
                  <Button color="green" kind="contained" onClick={() => setWriteAnswer(true)}>
                    답변 작성
                  </Button>
                )}
                <Button color="delete" kind="delete" onClick={() => console.log('작성')}>
                  질문 삭제
                </Button>
              </_EditCustomerButtons>
            )}
          </_QuestionBottom>
        </Pc>
        <Mobile>
          <_Title>
            <Text color={`${authorityColor}500`} size="title1">
              Q.
            </Text>
            <Text color="black900" size="title2">
              {data?.title.replace(/\n/g, '<br/>')}
            </Text>
          </_Title>
          <Text color="black600" size="body5">
            {data?.content.replace(/\n/g, '<br/>')}
          </Text>
          <_QuestionBottom>
            <Text color="black400" size="body3" margin={['top', 80]}>
              36 | {data?.username} | {data?.created_at?.slice(0, 10)}
            </Text>
          </_QuestionBottom>
        </Mobile>
        {writeAnswer ? (
          <>
            <Input type="text" label="제목" width="100%" placeholder="제목을 입력해주세요" margin={[30, 0, 0, 0]} />
            <Textarea
              label="답변"
              width="100%"
              placeholder="답변을 입력해주세요"
              maxLength={600}
              value={inputValue}
              onChange={onChange}
              margin={['top', 20]}
            />
            <_InputButton>
              <Button color="green" kind="contained" onClick={() => setWriteAnswer(false)}>
                게시
              </Button>
            </_InputButton>
          </>
        ) : (
          <_AnswerBottom>
            <_Answer>
              {data?.is_replied ? (
                <QnaAnswer title={data?.title} content={data?.content} created_at={data?.created_at} />
              ) : (
                <Text color="black500" size="title2">
                  아직 작성된 답변이 없습니다
                </Text>
              )}
            </_Answer>
            <Button onClick={() => navigate(-1)}>목록으로</Button>
          </_AnswerBottom>
        )}
      </_Wrapper>
    </_Container>
  );
};

export default CustomerDetailPage;

const _Loading = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const _Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100vw;
`;

const _Wrapper = styled.div`
  margin-top: 7rem;
  width: 100%;
  max-width: 60rem;
  padding: 0 20px;
`;

const _Title = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
`;

const _QustionBackground = styled.div<{ isWriteAnswer: boolean }>`
  position: absolute;
  top: 170px;
  left: 0px;
  width: 100vw;
  height: 200px;
  background-color: ${({ isWriteAnswer }) => (isWriteAnswer ? theme.color.black50 : null)};
  z-index: -100;
`;

const _EditCustomerButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const _QuestionBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
`;

const _InputButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px 0px 50px 0px;
`;

const _AnswerBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  margin-top: 5rem;
  @media screen and (max-width: 769px) {
    width: 100%;
    align-items: flex-start;
  }
`;

const _Answer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 60rem;
  width: 100%;
  height: 15rem;
  background-color: ${theme.color.realWhite};
  border: 1px solid ${theme.color.black200};
  border-radius: 5px;
  padding: 25px;
  @media screen and (max-width: 769px) {
    width: 100%;
    height: 10rem;
    border: none;
    padding: 0;
  }
`;
