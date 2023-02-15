import styled from '@emotion/styled';

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
`;

export const _Texts = styled.div`
  display: flex;
  gap: 40px;
`;

export const _Text = styled.div<{ fontSize: number; fontWeight: number; fontColor?: boolean }>`
  color: ${(props) => (props.fontColor ? '#FF7E36' : '#494949')};
  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWeight};
  cursor: pointer;
`;
