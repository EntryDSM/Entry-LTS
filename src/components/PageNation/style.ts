import styled from '@emotion/styled';
import { Button, theme } from '@team-entry/design_system';

export const _Pages = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 25px 0 50px 0;
`;

export const _Arrow = styled(Button)`
  border-radius: 50px;
`;

export const _PageButton = styled.button`
  width: 42px;
  height: 42px;
  border-radius: 50px;
  background-color: ${theme.color.realWhite};
  border: 1px solid ${theme.color.orange500};
  color: ${theme.color.orange500};
  ${theme.font.body3};
  &:hover {
    background-color: ${theme.color.orange500};
    color: ${theme.color.realWhite};
  }
`;
