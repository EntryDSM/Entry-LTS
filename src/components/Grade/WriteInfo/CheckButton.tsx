import styled from '@emotion/styled';
import { theme } from '@team-entry/design_system';
import React, { useState } from 'react';

function CheckButton({ value }) {
  const [checked, setChecked] = useState<boolean>(value);
  return (
    <_ButtonBox>
      <_Button onClick={() => setChecked(true)} isClick={checked}>
        O
      </_Button>
      <_Button onClick={() => setChecked(false)} isClick={!checked}>
        X
      </_Button>
    </_ButtonBox>
  );
}
// value={writeGradeElement.lateness_count}
// onChange={changeWriteGradeElement}
export default CheckButton;

const _ButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const _Button = styled.div<{ isClick?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50px;
  ${theme.font.title2};
  border: 1px solid ${theme.color.orange500};
  color: ${({ isClick }) => (isClick ? theme.color.realWhite : theme.color.orange500)};
  background-color: ${({ isClick }) => (isClick ? theme.color.orange500 : theme.color.realWhite)};
  cursor: pointer;
`;
