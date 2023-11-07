import { AuthorityColorType } from '@/hooks/useAuthority';
import styled from '@emotion/styled';
import { theme } from '@team-entry/design_system';

export const _Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 50px auto 0;
`;

export const _Button = styled.div<{ clicked?: boolean; authorityColor?: AuthorityColorType }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50px;
  border: 1px solid ${({ authorityColor }) => theme.color[authorityColor + '500']};
  color: ${({ clicked, authorityColor }) => (clicked ? theme.color.realWhite : theme.color[authorityColor + '500'])};
  cursor: pointer;
  background-color: ${({ clicked, authorityColor }) =>
    clicked ? theme.color[authorityColor + '500'] : theme.color.realWhite};
  &:hover {
    color: ${theme.color.realWhite};
    background-color: ${({ authorityColor }) => theme.color[authorityColor + '500']};
  }
`;
