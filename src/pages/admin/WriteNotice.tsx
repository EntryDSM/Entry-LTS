import { SetStateAction, useState } from 'react';
import styled from '@emotion/styled';
import { Button, Input, Radio, Switch, Text, Textarea } from '@team-entry/design_system';
import { Mobile, Pc } from '@/hooks/useResponsive';
import { useNavigate } from 'react-router-dom';
import { useInput } from '@/hooks/useInput';
import File from '@/components/File';

const WriteNotice = () => {
  const [value, setValue] = useState('');
  const [switchCheck, setSwitchCheck] = useState(false);
  const [inputValue, setInputValue] = useState({ type: '', content: '' });
  const navigate = useNavigate();

  const { form: valueType, onChange: setValueType } = useInput(inputValue);

  const onClick = () => {
    navigate(-1);
  };
  return (
    <_Container>
      <_Wrapper>
        <Pc>
          <Text color="black900" size="header1">
            공지사항 작성
          </Text>
        </Pc>
        <Mobile>
          <Text color="black900" size="title1">
            공지사항 작성
          </Text>
        </Mobile>
        <_Line />
        <_NoticeInputs>
          <_SwitchWrapper>
            글 고정
            <Switch color="green" isClick={switchCheck} onClick={() => setSwitchCheck((prev) => !prev)} />
          </_SwitchWrapper>
          <_RadioWrapper>
            <Radio
              title="분류"
              color="green"
              label="예비 신입생 안내"
              name="type"
              value="junier"
              isChecked={valueType.type === 'junier'}
              onClick={setValueType}
            />
            <Radio
              color="green"
              label="입학 공지사항"
              name="type"
              value="entry"
              isChecked={valueType.type === 'entry'}
              onClick={setValueType}
            />
          </_RadioWrapper>
          <Input type="text" label="제목" width="100%" placeholder="제목을 입력해주세요" />
          <Textarea
            name="content"
            label="본문"
            width="100%"
            placeholder="내용을 입력해주세요"
            limit={600}
            value={value}
            onChange={setValueType}
            margin={['top', 20]}
          />
        </_NoticeInputs>
        <_ButtonBox>
          <_ButtonFooter>
            <Button color="green" kind="outlined" onClick={() => console.log('clicked')}>
              파일 업로드
            </Button>
            <Button color="green" kind="outlined" onClick={() => console.log('clicked')}>
              본업 이미지 업로드
            </Button>
          </_ButtonFooter>
          <Button color="green" onClick={onClick}>
            게시
          </Button>
        </_ButtonBox>
        <_FileWrapper>
          <File canEdit={true} />
          <File canEdit={true} />
          <File canEdit={true} />
        </_FileWrapper>
      </_Wrapper>
    </_Container>
  );
};

export default WriteNotice;

const _Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

const _Wrapper = styled.div`
  margin-top: 7rem;
  width: 60rem;
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

const _NoticeInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const _SwitchWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const _RadioWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 16px;
`;

const _ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  @media screen and (max-width: 769px) {
    margin-top: 15px;
  }
`;

const _ButtonFooter = styled.div`
  display: flex;
  gap: 12px;
`;

const _FileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 12px 0px 50px 0px;
`;
