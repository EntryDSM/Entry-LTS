import { ChangeEvent, SetStateAction, useState } from 'react';
import styled from '@emotion/styled';
import { Button, Input, Switch, Text, Textarea } from '@team-entry/design_system';
import { Mobile, Pc } from '../hooks/useResponsive';
import { CreateQna } from '@/utils/api/qna';
import { useInput } from '@/hooks/useInput';

const WriteCustomerPage = () => {
  const [click, setClick] = useState(true);
  const { form, onChange } = useInput({ title: '', content: '' });

  const { mutate: createQna } = CreateQna({ ...form, is_public: click });

  const writeQna = () => {
    createQna();
  };

  return (
    <_Container>
      <_Wrapper>
        <Pc>
          <Text color="black900" size="header1">
            Q&A 작성
          </Text>
        </Pc>
        <Mobile>
          <Text color="black900" size="title1">
            Q&A 작성
          </Text>
        </Mobile>
        <_Line />
        <_OpenLetter>
          <Text color="realBlack" size="body1">
            글 공개 여부
          </Text>
          <Switch isClick={click} onClick={() => setClick(!click)} color="orange" />
        </_OpenLetter>
        <Input
          name="title"
          value={form.title}
          onChange={onChange}
          type="text"
          label="제목"
          width="100%"
          placeholder="제목을 입력하세요"
        />
        <div>
          <Textarea
            name="content"
            label="본문"
            width="100%"
            placeholder="내용을 입력하세요"
            limit={300}
            value={form.content}
            onChange={onChange}
            margin={['top', 20]}
          />
        </div>
        <_ButtonBox>
          <Button color="orange" onClick={writeQna}>
            질문 작성
          </Button>
        </_ButtonBox>
      </_Wrapper>
    </_Container>
  );
};

export default WriteCustomerPage;

const _Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

const _Wrapper = styled.div`
  margin-top: 7rem;
  width: 60rem;
  height: 38rem;
  padding: 0 20px;
`;

const _Line = styled.div`
  margin-top: 25px;
  width: 70px;
  height: 1.5px;
  background-color: #cacaca;
  @media screen and (max-width: 769px) {
    margin-top: 15px;
  }
`;

const _OpenLetter = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 5px;
  @media screen and (max-width: 769px) {
    flex-direction: row-reverse;
    margin-top: 16px;
    margin-bottom: 20px;
  }
`;

const _ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
  @media screen and (max-width: 769px) {
    margin-top: 25px;
  }
`;
