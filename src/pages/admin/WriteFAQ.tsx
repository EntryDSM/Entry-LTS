import { SetStateAction, useState } from 'react';
import styled from '@emotion/styled';
import { Button, Input, Text, Textarea } from '@team-entry/design_system';
import { Mobile, Pc } from '@/hooks/useResponsive';
import { useNavigate } from 'react-router-dom';

const WriteFAQPage = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const onChange = (e: { target: { value: SetStateAction<string> } }) => {
    setValue(e.target.value);
  };

  const onClick = () => {
    navigate(-1);
  };
  return (
    <_Container>
      <_Wrapper>
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
        <Input type="text" label="질문" width="100%" placeholder="질문을 입력해주세요" />
        <Textarea
          label="답변"
          width="100%"
          placeholder="답변을 입력해주세요"
          limit={600}
          value={value}
          onChange={onChange}
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
  margin-top: 7rem;
  width: 60rem;
  height: 38rem;
  padding: 0 20px;
`;

const _Line = styled.div`
  margin: 25px 0px;
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
