import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { theme } from '@team-entry/design_system';
import { Link } from 'react-router-dom';

interface ScrollType {
  scroll: number;
}

export const _Wrapper = styled.div<ScrollType>`
  width: 100vw;
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  border-bottom: 1px solid ${({ scroll }) => (scroll ? '#e6e6e6' : 'transparent')};
  transition: background-color 0.5s;
  &:hover {
    background-color: white;
    border-bottom-color: #e6e6e6;
    color: black;
  }
  background-color: ${({ scroll }) => (scroll >= 1 ? '#fff' : 'transparent')};
  color: ${({ scroll }) => (scroll ? '#000' : '#fff')};
  &:hover .logoText {
    color: black;
  }
  & .modalText {
    color: #494949;
  }
`;

export const _HeaderContainer = styled.div<ScrollType>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4rem;
  max-width: 1600px;
  background-color: transparent;
  @media screen and (max-width: 768px) {
    justify-content: center;
    border: 0;
  }
`;

export const _Texts = styled.div`
  display: flex;
  gap: 1vw;
`;

export const _Text = styled.div<{ fontSize: number; fontWeight: number; fontColor?: string }>`
  color: ${(props) => (props.fontColor ? `#${props.fontColor}` : '#000')};
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

export const _DropdownWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const _DropdownMenus = styled.div`
  position: absolute;
  top: 35px;
  left: -8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  border: 1px solid ${theme.color.black100};
  padding: 14px 0px;
  background-color: white;
  border-radius: 8px;
`;

export const _DropdownMenu = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${theme.color.realWhite};
  z-index: 10;
  &:hover {
    background-color: ${theme.color.black200};
  }
  padding: 10px 15px;
`;

export const _Line = styled.div`
  width: 120px;
  height: 1px;
  background-color: ${theme.color.black200};
`;
