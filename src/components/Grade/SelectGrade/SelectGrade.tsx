import styled from '@emotion/styled';
import { Text, theme } from '@team-entry/design_system';
import { gradeArr } from '../../../constant/grade';
import { GradeType, ISelectGradeElement } from '@/interfaces/grade';

interface ISelectGrade {
  title: string;
  gradesKey: keyof ISelectGradeElement;
  selectGradeElement: ISelectGradeElement;
  setSelectGradeElement: React.Dispatch<React.SetStateAction<ISelectGradeElement>>;
  current: number;
}

const SelectGrade = ({ title, gradesKey, selectGradeElement, setSelectGradeElement, current }: ISelectGrade) => {
  const onClick = (grade: GradeType) => {
    const oldArray = selectGradeElement[gradesKey];
    oldArray[current] = grade;
    setSelectGradeElement({ ...selectGradeElement, [gradesKey]: oldArray });
  };
  return (
    <_Wrapper>
      <_Texts>
        <Text color="black900" size="title1">
          {title}
        </Text>
      </_Texts>
      <_Buttons>
        {gradeArr.map((grade: GradeType) => (
          <_Button
            key={grade}
            onClick={() => {
              onClick(grade);
            }}
            isClick={grade === selectGradeElement[gradesKey][current]}
          >
            {grade}
          </_Button>
        ))}
      </_Buttons>
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
  align-items: center;
  justify-content: center;
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50px;
  ${theme.font.title2};
  border: 1px solid ${theme.color.orange500};
  color: ${({ isClick }) => (isClick ? theme.color.realWhite : theme.color.orange500)};
  background-color: ${({ isClick }) => (isClick ? theme.color.orange500 : theme.color.realWhite)};
  cursor: pointer;
`;

const _Texts = styled.div`
  display: flex;
  align-items: center;
`;
