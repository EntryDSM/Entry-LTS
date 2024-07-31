import { SetStateAction, useEffect, useState } from 'react';
import { Text, theme } from '@team-entry/design_system';
import styled from '@emotion/styled';
import { gradeArr } from '../../../constant/grade';
import { GradeType, ISelectGradeElement } from '../interfaces/grade';

interface IAllSelect {
  selectGradeElement: ISelectGradeElement;
  setSelectGradeElement: React.Dispatch<SetStateAction<ISelectGradeElement>>;
  current: number;
}

const AllSelect = ({ selectGradeElement, setSelectGradeElement, current }: IAllSelect) => {
  const [grade, setGrade] = useState<GradeType>('X');

  useEffect(() => {
    setGrade('X');
  }, [current]);

  const onClick = (grade: string) => {
    Object.keys(selectGradeElement).map((key) => {
      const oldArray = selectGradeElement[key as keyof ISelectGradeElement];
      oldArray[current] = grade;
      setSelectGradeElement({ ...selectGradeElement, [key]: oldArray });
    });
  };

  return (
    <_Wrapper>
      <Text margin={['right', 8]} size="body3" color="black600">
        전체 선택
      </Text>
      {gradeArr.map((item) => {
        const isClick = item === grade;
        return (
          <_Button
            key={item}
            onClick={() => {
              setGrade(item);
              onClick(item);
            }}
            backgroundColor={isClick}
          >
            <Text color={isClick ? 'realWhite' : 'black600'} size="body4">
              {item}
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
