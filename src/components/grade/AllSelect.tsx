import { IElement } from '@/pages/GradeProgramPage';
import { Text, theme } from '@team-entry/design_system';
import React, { SetStateAction, useEffect, useState } from 'react';
import styled from '@emotion/styled';

export type Grade = 'A' | 'B' | 'C' | 'D' | 'E' | 'X';

interface PropsType {
  current: number;
  element?: IElement[][];
  setElement?: React.Dispatch<SetStateAction<IElement[][]>>;
}

const AllSelect = ({ current, element, setElement }: PropsType) => {
  const [grade, setGrade] = useState<Grade>('A');
  const arr = ['A', 'B', 'C', 'D', 'E'];

  useEffect(() => {
    setGrade('A');
  }, [current]);

  const ChangeAllGrade = (grade: Grade) => {
    let copiedItems = [...element];
    copiedItems[current].map((res) => (res.grade = grade));
    setElement(copiedItems);
    setGrade(grade);
  };

  return (
    <_Wrapper>
      <Text margin={['right', 8]} size="body3" color="black600">
        전체 선택
      </Text>
      {arr.map((arr: Grade) => {
        let isClick = arr === grade;
        return (
          <_Button onClick={() => ChangeAllGrade(arr)} backgroundColor={isClick}>
            <Text color={isClick ? 'realWhite' : 'black600'} size="body4">
              {arr}
            </Text>
          </_Button>
        );
      })}
    </_Wrapper>
  );
};

export default AllSelect;

const _Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const _Button = styled.div<{ backgroundColor?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  border: 1px solid ${theme.color.black600};
  margin-right: 15px;
  background-color: ${({ backgroundColor }) => (backgroundColor ? theme.color.black600 : theme.color.realWhite)};
  cursor: pointer;
`;
