import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Button, Input, Spinner, Stack, Text, Textarea, Toast, theme } from '@team-entry/design_system';
import { Mobile, Pc } from '../hooks/useResponsive';
import { GetQnaDetail } from '@/utils/api/qna';
import { useAuthority } from '@/hooks/useAuthority';
import QnaAnswer from '@/components/Answer/QnaAnswer';
import { useInput } from '@/hooks/useInput';
import { DeleteQna, DeleteReply, EditReply, WriteReply } from '@/utils/api/admin';
import { getCookies } from '@/utils/cookies';

const CustomerDetailPage = () => {
  const navigate = useNavigate();
  const { id: qnaId } = useParams();
  const [writeAnswer, setWriteAnswer] = useState(false);
  const { authorityColor, isAdmin } = useAuthority();
  const { form, setForm, onChange } = useInput({ title: '', content: '' });
  const { mutate: writeReply } = WriteReply(form);
  const { mutate: editReply } = EditReply(form);
  const { mutate: deleteReply } = DeleteReply();
  const { mutate: deleteQna } = DeleteQna();

  const { data, isLoading } = GetQnaDetail(qnaId);
  const accessToken = getCookies('access_token');

  useEffect(() => {
    if (data) setForm({ title: data?.reply?.title, content: data?.reply?.content });
  }, [data]);

  useEffect(() => {
    if (!accessToken) {
      Toast('로그인이 필요합니다.', { type: 'error' });
      navigate('/customer');
    }
  }, []);

  if (isLoading)
    return (
      <_Loading>
        <Spinner margin={[0, 'auto']} size={40} color={authorityColor} />
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
              {data?.id} | {data?.username} | {data?.created_at?.slice(0, 10)}
            </Text>
            {isAdmin && !writeAnswer && (
              <_EditCustomerButtons>
                {data?.is_replied ? (
                  <>
                    <Button color="black" kind="contained" onClick={() => setWriteAnswer(true)}>
                      수정
                    </Button>
                    <Button color="delete" kind="delete" onClick={() => deleteReply(qnaId)}>
                      답변 삭제
                    </Button>
                  </>
                ) : (
                  <>
                    <Button color="green" kind="contained" onClick={() => setWriteAnswer(true)}>
                      답변 작성
                    </Button>
                    <Button color="delete" kind="delete" onClick={() => deleteQna(qnaId)}>
                      질문 삭제
                    </Button>
                  </>
                )}
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
              {data?.id} | {data?.username} | {data?.created_at?.slice(0, 10)}
            </Text>
          </_QuestionBottom>
        </Mobile>
        {writeAnswer ? (
          <>
            <Input
              name="title"
              type="text"
              label="제목"
              width="100%"
              placeholder="제목을 입력해주세요"
              value={form.title}
              onChange={onChange}
              margin={[30, 0, 0, 0]}
            />
            <Textarea
              name="content"
              label="답변"
              width="100%"
              placeholder="답변을 입력해주세요"
              maxLength={600}
              value={form.content}
              onChange={onChange}
              margin={['top', 20]}
            />
            <_InputButton>
              {' '}
              {data?.is_replied ? (
                <Button
                  color="black"
                  kind="contained"
                  onClick={async () => {
                    editReply(qnaId);
                    setWriteAnswer(false);
                  }}
                >
                  수정
                </Button>
              ) : (
                <Button
                  color="green"
                  kind="contained"
                  onClick={async () => {
                    writeReply(qnaId);
                    setWriteAnswer(false);
                  }}
                >
                  게시
                </Button>
              )}
            </_InputButton>
          </>
        ) : (
          <_AnswerBottom>
            <_Answer>
              {data?.is_replied ? (
                <QnaAnswer
                  title={data?.reply.title}
                  content={data?.reply.content}
                  created_at={data?.reply.created_at}
                />
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
