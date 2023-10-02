import { Icon, theme } from '@team-entry/design_system';
import React, { useState } from 'react';
import * as _ from './style';
import styled from '@emotion/styled';
import { AuthorityColorType, useAuthority } from '@/hooks/useAuthority';

interface PageNationProps {
  pageNum: number;
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}

const PageNation = ({ pageNum, current, setCurrent }: PageNationProps) => {
  const [hover, setHover] = useState({ left: false, right: false });
  const { authorityColor } = useAuthority();

  return (
    <_._Buttons>
      <_Button
        onMouseOver={() =>
          setHover((prev) => {
            return { ...prev, left: true };
          })
        }
        onMouseOut={() =>
          setHover((prev) => {
            return { ...prev, left: false };
          })
        }
        onClick={() => current != 0 && setCurrent((prev) => prev - 1)}
        authorityColor={authorityColor}
      >
        <Icon color={hover.left ? 'realWhite' : `${authorityColor}500`} icon="LeftArrow" size={24} />
      </_Button>
      {[...Array(pageNum)].map((_, idx) => (
        <_Button clicked={current === idx} onClick={() => setCurrent(idx)} authorityColor={authorityColor}>
          {idx + 1}
        </_Button>
      ))}
      <_Button
        onMouseOver={() =>
          setHover((prev) => {
            return { ...prev, right: true };
          })
        }
        onMouseOut={() =>
          setHover((prev) => {
            return { ...prev, right: false };
          })
        }
        onClick={() => current != pageNum - 1 && setCurrent((prev) => prev + 1)}
        authorityColor={authorityColor}
      >
        <Icon color={hover.right ? 'realWhite' : `${authorityColor}500`} icon="RightArrow" size={24} />
      </_Button>
    </_._Buttons>
  );
};

export default PageNation;

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
