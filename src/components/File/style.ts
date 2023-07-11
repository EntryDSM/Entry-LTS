import styled from '@emotion/styled';
import { theme } from '@team-entry/design_system';

export const _File = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const _Download = styled.div<{ color: string }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: ${({ color }) => (color === 'orange' ? theme.color.orange500 : theme.color.green500)};
  border-radius: 18px;
  @media screen and (max-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

export const _Img = styled.img`
  width: 18px;
  height: 18px;
  @media screen and (max-width: 769px) {
    width: 14px;
    height: 14px;
  }
`;

export const _Files = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;
