import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Text, Textarea, theme } from '@team-entry/design_system';
import { Mobile, Pc } from '../hooks/useResponsive';
import { useAthority } from '@/hooks/useAuthority';

const CustomerDetailPage = () => {
  const navigate = useNavigate();
  const [writeAnswer, setWriteAnswer] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const { isAdmin, authorityColor } = useAthority();
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };
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
              성적 입력에 관하여...
            </Text>
          </_Title>
          <Text color="black600" size="body2">
            성적 입력시에 자퇴의 경우는 어떻게 해야 될까요?
          </Text>
          <_QuestionBottom>
            <Text color="black400" size="body1">
              36 | 김*연 | 2022-12-21
            </Text>
            {isAdmin && !writeAnswer && (
              <_EditCustomerButtons>
                <Button color="green" kind="contained" onClick={() => setWriteAnswer(true)}>
                  질문 작성
                </Button>
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
              성적 입력에 관하여...
            </Text>
          </_Title>
          <Text color="black600" size="body5">
            성적 입력시에 자퇴의 경우는 어떻게 해야 될까요?
          </Text>
          <_QuestionBottom>
            <Text color="black400" size="body3">
              36 | 김*연 | 2022-12-21
            </Text>
            {isAdmin && !writeAnswer && (
              <_EditCustomerButtons>
                <Button color="green" kind="contained" onClick={() => setWriteAnswer(true)}>
                  질문 작성
                </Button>
                <Button color="delete" kind="delete" onClick={() => console.log('작성')}>
                  질문 삭제
                </Button>
              </_EditCustomerButtons>
            )}
          </_QuestionBottom>
        </Mobile>
        {writeAnswer ? (
          <>
            <Input type="text" label="질문" width="100%" placeholder="질문을 입력해주세요" margin={[30, 0, 0, 0]} />
            <Textarea
              label="답변"
              width="100%"
              placeholder="답변을 입력해주세요"
              limit={600}
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
              <Text color="black500" size="title2">
                아직 작성된 답변이 없습니다
              </Text>
            </_Answer>
            <Button onClick={() => navigate(-1)}>목록으로</Button>
          </_AnswerBottom>
        )}
      </_Wrapper>
    </_Container>
  );
};

export default CustomerDetailPage;

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
  margin-bottom: 1rem;
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
  @media screen and (max-width: 769px) {
    width: 100%;
    height: 10rem;
    border: none;
    padding: 20px;
  }
`;
