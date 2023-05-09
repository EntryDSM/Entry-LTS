import styled from '@emotion/styled';
import { Text } from '@team-entry/design_system';
import React from 'react';
import ProgressBar from './ProgressBar';
import SelectGrade from './SelectGrade';
import AllSelect from './AllSelect';
import { IElement } from '@/pages/GradeProgramPage';

interface arrProps {
  step: number;
  title: string;
  element: IElement[][];
  subTitle?: string | undefined;
}

interface ProgramProps {
  arr: arrProps[];
  current: number;
  element: IElement[][];
  setElement: React.Dispatch<React.SetStateAction<IElement[][]>>;
}

const Program = ({ arr, current, element, setElement }: ProgramProps) => {
  return (
    <_Wrapper>
      <Title>
        <div>
          <Text color="black900" size="header1">
            {arr[current].title}
          </Text>
          {arr[current].subTitle && (
            <Text color="black600" size="body1">
              {arr[current].subTitle}
            </Text>
          )}
        </div>
        {current < 3 && <AllSelect current={current} element={element} setElement={setElement} />}
      </Title>
      <ProgressBar step={arr[current].step} />
      <_Selects>
        {arr[current]?.element[current]?.map((res, index) => {
          const { title, subTitle, type, grade, placeholder, unit } = res;
          return (
            <SelectGrade
              current={current}
              title={title}
              subTitle={subTitle}
              type={type}
              placeholder={placeholder}
              unit={unit}
              grade={grade}
              element={element}
              setElement={setElement}
              index={index}
            />
          );
        })}
      </_Selects>
    </_Wrapper>
  );
};

export default Program;

const _Wrapper = styled.div`
  width: 100%;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const _Selects = styled.div`
  margin-top: 0.7rem;
  margin-bottom: 1rem;
`;
