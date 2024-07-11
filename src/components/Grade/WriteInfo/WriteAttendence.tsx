import { Input, theme } from '@team-entry/design_system';
import GradeWraper from '../GradeWraper';
import { GradeStatusType, IWriteGradeElement } from '@/interfaces/grade';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

interface WriteAttendenceProps {
  gradeStatus: GradeStatusType;
  blackexam: number;
  changeBlackexam: (e: React.ChangeEvent<HTMLInputElement>) => void;
  writeGradeElement: IWriteGradeElement;
  changeWriteGradeElement: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setWriteGradeElement: React.Dispatch<React.SetStateAction<IWriteGradeElement>>;
}

const WriteAttendence = ({
  gradeStatus,
  blackexam,
  changeBlackexam,
  writeGradeElement,
  changeWriteGradeElement,
  setWriteGradeElement,
}: WriteAttendenceProps) => {
  const { dsm_algorithm_award, certificate } = writeGradeElement;

  const [checked, setChecked] = useState(dsm_algorithm_award);
  const [checked2, setChecked2] = useState(certificate);

  useEffect(() => {
    setWriteGradeElement((prev) => ({
      ...prev,
      dsm_algorithm_award: checked,
    }));
    console.log(writeGradeElement.dsm_algorithm_award);
  }, [checked, setWriteGradeElement]);

  useEffect(() => {
    setWriteGradeElement((prev) => ({
      ...prev,
      certificate: checked2,
    }));
    console.log(writeGradeElement.certificate);
  }, [checked2, setWriteGradeElement]);

  return gradeStatus === 'qualificationExam' ? (
    <GradeWraper title="검정고시">
      <Input
        type="number"
        placeholder="검정고시 평균"
        width={230}
        name="score"
        value={blackexam}
        onChange={changeBlackexam}
        unit="점"
      />
    </GradeWraper>
  ) : (
    <_ReferenceBox>
      <GradeWraper title="미인정 결석">
        <Input
          type="number"
          width={230}
          name="day_absence_count"
          placeholder="결석 횟수"
          value={writeGradeElement.day_absence_count}
          onChange={changeWriteGradeElement}
          unit="일"
        />
      </GradeWraper>
      <GradeWraper title="미인정 지각">
        <Input
          type="number"
          width={230}
          name="lateness_count"
          placeholder="지각 횟수"
          value={writeGradeElement.lateness_count}
          onChange={changeWriteGradeElement}
          unit="회"
        />
      </GradeWraper>
      <GradeWraper title="미인정 조퇴">
        <Input
          type="number"
          width={230}
          name="early_leave_count"
          placeholder="조퇴 횟수"
          value={writeGradeElement.early_leave_count}
          onChange={changeWriteGradeElement}
          unit="회"
        />
      </GradeWraper>
      <GradeWraper title="미인정 결과">
        <Input
          type="number"
          width={230}
          name="lecture_absence_count"
          placeholder="결과 횟수"
          value={writeGradeElement.lecture_absence_count}
          onChange={changeWriteGradeElement}
          unit="일"
        />
      </GradeWraper>
      <GradeWraper title="봉사활동 시간">
        <Input
          type="number"
          width={230}
          name="volunteer_time"
          placeholder="봉사 시간"
          value={writeGradeElement.volunteer_time}
          onChange={changeWriteGradeElement}
          unit="시간"
        />
      </GradeWraper>

      <GradeWraper title="DSM 알고리즘 대회 입상">
        <_ButtonBox>
          <_Button onClick={() => setChecked(1)} isClick={checked === 1}>
            O
          </_Button>
          <_Button onClick={() => setChecked(0)} isClick={!(checked === 1)}>
            X
          </_Button>
        </_ButtonBox>
      </GradeWraper>
      <GradeWraper title="정보처리기능사 자격증 취득">
        <_ButtonBox>
          <_Button onClick={() => setChecked2(1)} isClick={checked2 === 1}>
            O
          </_Button>
          <_Button onClick={() => setChecked2(0)} isClick={!(checked2 === 1)}>
            X
          </_Button>
        </_ButtonBox>
      </GradeWraper>
      <_ReferenceText>* 정보처리기능사 자격증 취득여부 가산점은 일반전형일 경우 들어가지 않습니다.</_ReferenceText>
    </_ReferenceBox>
  );
};

export default WriteAttendence;

const _ButtonBox = styled.div`
  display: flex;
  gap: 20px;
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

const _ReferenceBox = styled.div`
  position: relative;
  border-bottom: 1px solid #e6e6e6;
`;

const _ReferenceText = styled.p`
  font-size: 12px;
  color: #868686;
  font-weight: 400;
  position: absolute;
  right: 0;
  margin-top: 6px;
`;
