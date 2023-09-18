import React, { SetStateAction } from 'react';
import { IUserWriteValue } from '@/pages/Application';
import { Textarea, theme } from '@team-entry/design_system';
import styled from '@emotion/styled';
import { useInput } from '@/hooks/useInput';

interface IUserTypeProps {
  userWriteValues: IUserWriteValue;
  setUserWriteValues: React.Dispatch<SetStateAction<IUserWriteValue>>;
}

const UserWrite = ({ userWriteValues, setUserWriteValues }: IUserTypeProps) => {
  const { form: inputValues, onChange: changeInputValues } = useInput(userWriteValues);
  setUserWriteValues(inputValues);

  return (
    <_Wrapper>
      <Textarea
        placeholder="내용을 입력해주세요"
        label="자기소개서"
        maxLength={2000}
        width="100%"
        name="intro"
        value={inputValues.intro}
        onChange={changeInputValues}
      />
      <Textarea
        placeholder="내용을 입력해주세요"
        label="학업계획서"
        maxLength={2000}
        width="100%"
        name="study_plan"
        value={inputValues.study_plan}
        onChange={changeInputValues}
      />
    </_Wrapper>
  );
};

export default UserWrite;

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  width: 60rem;
  margin: 40px 0;
`;
