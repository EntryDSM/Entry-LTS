import { SetStateAction, useState } from 'react';
import styled from '@emotion/styled';
import { Button, Input, Switch, Text, Textarea } from '@team-entry/design_system';

const WriteCustomerPage = () => {
  const [click, setClick] = useState(false);
  const [value, setValue] = useState('');
  const onChange = (e: { target: { value: SetStateAction<string> } }) => {
    setValue(e.target.value);
  };
  const onClick = () => {
    console.log('clicked!');
  };
  const isMobile = window.innerWidth > 400;
  return (
    <_Container>
      <_Wrapper>
        <Text color="black900" size={isMobile ? 'header1' : 'title1'}>
          Q&A 작성
        </Text>
        <_Line />
        <_OpenLetter>
          <Text color="realBlack" size="body1">
            글 공개 여부
          </Text>
          <Switch isClick={click} onClick={() => setClick(!click)} color="orange" />
        </_OpenLetter>
        <Input type="text" label="제목" width={isMobile ? 960 : 352} placeholder="제목을 입력하세요" />
        <Textarea
          label="본문"
          width={isMobile ? 60 : 22}
          placeholder="내용을 입력하세요"
          limit={300}
          value={value}
          onChange={onChange}
          margin={['top', 20]}
        />
        <_ButtonBox>
          <Button color="orange" onClick={onClick}>
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
  @media screen and (max-width: 400px) {
    width: 22rem;
  }
`;

const _Line = styled.div`
  margin-top: 25px;
  width: 70px;
  height: 1.5px;
  background-color: #cacaca;
  @media screen and (max-width: 400px) {
    margin-top: 15px;
  }
`;

const _OpenLetter = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 5px;
  @media screen and (max-width: 400px) {
    flex-direction: row-reverse;
    margin-top: 16px;
    margin-bottom: 20px;
  }
`;

const _ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
  @media screen and (max-width: 400px) {
    margin-top: 25px;
  }
`;
