import React from 'react';
import { UserWriteValue } from '@/pages/Application';
import { Textarea, theme } from '@team-entry/design_system';
import styled from '@emotion/styled';
import { useInput } from '@/hooks/useInput';

interface UserTypeProps {
  userWriteValues: UserWriteValue;
  setUserWriteValues: React.Dispatch<React.SetStateAction<UserWriteValue>>;
}

const UserWrite = ({ userWriteValues, setUserWriteValues }: UserTypeProps) => {
  const { form, onChange } = useInput(userWriteValues);

  return (
    <_Wrapper>
      <Textarea
        placeholder="내용을 입력해주세요"
        label="자기소개서"
        limit={2000}
        width="100%"
        name="intro"
        value={form.intro}
        onChange={onChange}
      />
      <Textarea
        placeholder="내용을 입력해주세요"
        label="학업계획서"
        limit={2000}
        width="100%"
        name="study_plan"
        value={form.study_plan}
        onChange={onChange}
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
