import { ChangeEvent, SetStateAction, useState } from 'react';
import styled from '@emotion/styled';
import { Button, Input, Radio, Stack, Text, TextAreaProps, Textarea } from '@team-entry/design_system';
import { Mobile, Pc } from '@/hooks/useResponsive';
import { useInput } from '@/hooks/useInput';
import { useTextArea } from '@/hooks/useTextArea';
import { CreateFaq } from '@/utils/api/faq';
import { ICreateFaq } from '@/utils/api/faq/types';
import { useAuthority } from '@/hooks/useAuthority';

const WriteFAQPage = () => {
  const { form: inputValue, onChange: setInputValue } = useInput<Omit<ICreateFaq, 'content'>>({
    title: '',
    faq_type: 'ADMISSION',
  });
  const { form: textAreaValue, onChange: setTextAreaValue } = useTextArea({ content: '' });
  const { mutate: createFaq } = CreateFaq();
  const { authorityColor } = useAuthority();

  const onClick = () => {
    createFaq({ ...inputValue, ...textAreaValue });
  };
  return (
    <_Container>
      <_Wrapper>
        <></>
        <Pc>
          <Text color="black900" size="header1">
            FAQ 작성
          </Text>
        </Pc>
        <Mobile>
          <Text color="black900" size="title1">
            FAQ 작성
          </Text>
        </Mobile>
        <_Line />
        <Text color="black900" size="body5" margin={[0, 0, 6, 5]}>
          분류
        </Text>
        <Stack gap={60} margin={['bottom', 20]}>
          <Radio
            name="faq_type"
            label="입학"
            value="ADMISSION"
            color={authorityColor}
            onClick={setInputValue}
            checked={inputValue.faq_type === 'ADMISSION'}
          />
          <Radio
            name="faq_type"
            label="진로"
            value="COURSE"
            color={authorityColor}
            onClick={setInputValue}
            checked={inputValue.faq_type === 'COURSE'}
          />
          <Radio
            name="faq_type"
            label="학교생활"
            value="SCHOOL_LIFE"
            color={authorityColor}
            onClick={setInputValue}
            checked={inputValue.faq_type === 'SCHOOL_LIFE'}
          />
          <Radio
            name="faq_type"
            label="기타"
            value="OTHER"
            color={authorityColor}
            onClick={setInputValue}
            checked={inputValue.faq_type === 'OTHER'}
          />
        </Stack>
        <Input
          name="title"
          type="text"
          label="질문"
          width="100%"
          placeholder="질문을 입력해주세요"
          value={inputValue.title}
          onChange={setInputValue}
        />
        <Textarea
          name="content"
          label="답변"
          width="100%"
          placeholder="답변을 입력해주세요"
          maxLength={600}
          value={textAreaValue.content}
          onChange={setTextAreaValue}
          margin={['top', 20]}
        />
        <_ButtonBox>
          <Button color="green" onClick={onClick}>
            게시
          </Button>
        </_ButtonBox>
      </_Wrapper>
    </_Container>
  );
};

export default WriteFAQPage;

const _Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

const _Wrapper = styled.div`
  margin-top: 85px;
  width: 60rem;
  height: 38rem;
  padding: 0 20px;
`;

const _Line = styled.div`
  margin: 20px 0px;
  width: 70px;
  height: 1.5px;
  background-color: #cacaca;
  @media screen and (max-width: 769px) {
    margin-top: 15px;
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
