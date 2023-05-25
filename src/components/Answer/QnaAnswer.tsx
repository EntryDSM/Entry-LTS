import styled from '@emotion/styled';
import { Text } from '@team-entry/design_system';
import React from 'react';

const QnaAnswer = ({ title, content, created_at }) => {
  return (
    <_Reply>
      <div>
        <_Title>
          <Text color="orange500" size="title1">
            A.
          </Text>
          <Text color="black900" size="title2">
            {title}
          </Text>
        </_Title>
        <Text color="black600" size="body2">
          {content}
        </Text>
      </div>
      <Text color="black400" size="body1">
        {created_at?.slice(0, 10)}
      </Text>
    </_Reply>
  );
};

export default QnaAnswer;

const _Reply = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 25px;
`;

const _Title = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
`;
