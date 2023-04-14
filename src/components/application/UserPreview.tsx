import React from 'react';
import styled from '@emotion/styled';
import { Text, theme } from '@team-entry/design_system';

const UserPreview = () => {
  return (
    <_Wrapper>
      <_Title>
        <Text size="body1" color="realWhite">
          입학원서 미리보기
        </Text>
      </_Title>
      <_PDFWrapper>
        <_PDF />
      </_PDFWrapper>
    </_Wrapper>
  );
};

export default UserPreview;

const _Wrapper = styled.div`
  width: 60rem;
  margin: 50px 0;
`;

const _Title = styled.div`
  display: flex;
  align-items: center;
  width: 60rem;
  height: 4rem;
  background-color: #36373c;
  padding-left: 48px;
`;

const _PDFWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60rem;
  height: 71rem;
  background-color: #646569;
`;

const _PDF = styled.div`
  width: 45rem;
  height: 60rem;
  background-color: ${theme.color.realWhite};
`;
