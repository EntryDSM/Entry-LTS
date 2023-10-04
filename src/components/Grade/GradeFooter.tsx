import { Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';
import { Button, theme } from '@team-entry/design_system';
import { GradeStatusType } from '@/interfaces/grade';

interface IGradeFooterProps {
  gradeStatus: GradeStatusType;
  current: number;
  setCurrent: Dispatch<SetStateAction<number>>;
}

const GradeFooter = ({ gradeStatus, current, setCurrent }: IGradeFooterProps) => {
  return (
    <_Footer>
      <Button
        color="black"
        kind="outlined"
        disabled={current === 0 || gradeStatus === 'qualificationExam'}
        onClick={() => {
          setCurrent(current - 1);
        }}
      >
        이전
      </Button>
      {current !== 4 ? (
        <Button
          color="orange"
          kind="contained"
          onClick={() => {
            setCurrent(current + 1);
          }}
        >
          다음
        </Button>
      ) : (
        <Button color="orange" kind="contained" onClick={() => {}}>
          완료
        </Button>
      )}
    </_Footer>
  );
};

export default GradeFooter;

const _Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 60rem;
  margin-top: 45px;
  margin-bottom: 100px;
`;
