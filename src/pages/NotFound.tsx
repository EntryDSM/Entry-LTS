import React from 'react';
import styled from '@emotion/styled';
import { Button, Text, theme } from '@team-entry/design_system';
import { useNavigate } from 'react-router-dom';
import { useAuthority } from '@/hooks/useAuthority';

const NotFound = () => {
  const location = useNavigate();
  const { authorityColor, isAdmin } = useAuthority();

  return (
    <_Container>
      <_Wrapper>
        <_Title>
          <Text color={`${authorityColor}500`} size="header1">
            404
          </Text>
          <Text color="black900" size="header1">
            Not Found
          </Text>
        </_Title>
        <_Line isAdmin={isAdmin} />
        <Text color="black600" size="title2">
          존재하지 않는 페이지입니다.
        </Text>
        <Button color={authorityColor} onClick={() => location(-1)}>
          돌아가기
        </Button>
      </_Wrapper>
    </_Container>
  );
};

export default NotFound;

const _Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-bottom: 80px;
`;

const _Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const _Line = styled.div<{ isAdmin: boolean }>`
  width: 90px;
  height: 2px;
  background-color: ${({ isAdmin }) => (isAdmin ? theme.color.green500 : theme.color.orange500)};
  border: 0;
`;
