import { IElement } from '@/pages/GradeProgramPage';
import { Input, Text, theme } from '@team-entry/design_system';
import React, { SetStateAction } from 'react';
import styled from '@emotion/styled';
import { Grade } from './AllSelect';

interface SelectGradeProps {
  current: number;
  title: string;
  subTitle?: string;
  type: 'grade' | 'input';
  placeholder?: string;
  unit?: string;
  grade?: Grade;
  element?: IElement[][];
  setElement?: React.Dispatch<SetStateAction<IElement[][]>>;
  index?: number;
}

const SelectGrade = ({
  title,
  subTitle,
  type,
  grade,
  unit,
  placeholder,
  element,
  setElement,
  current,
  index,
}: SelectGradeProps) => {
  let arr = ['A', 'B', 'C', 'D', 'E', 'X'];

  const ChangeGrade = (grade: Grade) => {
    let findIndex = element[current].findIndex((item) => item.id === index + 1);
    let copiedItems = [...element];
    copiedItems[current][findIndex].grade = grade;
    setElement(copiedItems);
  };

  const ChangeInputScore = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    let findIndex = element[current].findIndex((item) => item.id === index + 1);
    let copiedItems = [...element];
    copiedItems[current][findIndex].value = value.replace(/[^0-9]/g, '');
    setElement(copiedItems);
  };

  return (
    <_Wrapper>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Text color="black900" size="title1">
          {title}
        </Text>
        <Text margin={['left', 10]} color="black500" size="body3">
          {subTitle}
        </Text>
      </div>
      {type === 'grade' ? (
        <_Buttons>
          {arr.map((res: Grade, i) => {
            return (
              <_Button onClick={() => ChangeGrade(res)} isClick={res === grade}>
                {res}
              </_Button>
            );
          })}
        </_Buttons>
      ) : (
        <Input
          onChange={ChangeInputScore}
          value={element[current][index].value}
          type="text"
          width={250}
          placeholder={placeholder}
          unit={unit}
          label=""
        />
      )}
    </_Wrapper>
  );
};

export default SelectGrade;

const _Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.5rem;
  width: 100%;
  border-top: 1px solid ${theme.color.black100};
  padding: 25px 10px;
  &:last-child {
    border-bottom: 1px solid ${theme.color.black100};
  }
`;

const _Buttons = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const _Button = styled.div<{ isClick?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50px;
  ${theme.font.title2};
  border: 1px solid ${theme.color.orange500};
  color: ${({ isClick }) => (isClick ? theme.color.realWhite : theme.color.orange500)};
  background-color: ${({ isClick }) => (isClick ? theme.color.orange500 : theme.color.realWhite)};
  cursor: pointer;
`;
