import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { theme } from '@team-entry/design_system';
import { Link } from 'react-router-dom';

export const _HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 4rem;
  border-bottom: 1px solid #e6e6e6;
  background-color: #ffffff;
  z-index: 100;
  @media screen and (max-width: 1024px) and (min-width: 768px) {
    justify-content: space-between;
    padding: 10px;
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
    border: 0;
  }
`;

export const _Texts = styled.div`
  display: flex;
  gap: 40px;
  margin-left: 52px;
`;

export const _Text = styled.div<{ fontSize: number; fontWeight: number; fontColor?: boolean }>`
  color: ${(props) => (props.fontColor ? '#FF7E36' : '#494949')};
  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWeight};
  cursor: pointer;
`;

export const _MenuIcon = styled.img`
  position: absolute;
  left: 20px;
  cursor: pointer;
`;

const MenuDown = keyframes`
  from {
    max-height: 0px;
  }
  to {
    max-height: 40vh;
  }
`;

const MenuUp = keyframes`
  from {
    max-height: 40vh;
  }
  to {
    max-height: 0px;
  }
`;

export const _Menu = styled.div<{ visibility: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  max-height: 100vh;
  background-color: ${theme.color.realWhite};
  overflow: hidden;
  animation: ${({ visibility }) => (visibility ? MenuDown : MenuUp)} 0.5s;
`;

export const _MenuElement = styled.div<{ color?: 'red' | 'black' }>`
  width: 100%;
  height: 7vh;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-top: 1px solid ${theme.color.black100};
  color: ${({ color }) => (color === 'red' ? theme.color.error : theme.color.black700)};
  ${theme.font.body3};
`;

export const _Background = styled.div`
  position: absolute;
  width: 100%;
  height: 92vh;
  overflow: hidden;
  top: 4rem;
  left: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const _LogoButton = styled(Link)`
  display: flex;
  align-items: center;
`;
