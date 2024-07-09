import { Input } from '@team-entry/design_system';
import GradeWraper from '../GradeWraper';
import { GradeStatusType, IWriteGradeElement } from '@/interfaces/grade';
import CheckButton from './CheckButton';

interface IWriteGrade {
  gradeStatus: GradeStatusType;
  blackexam: number;
  changeBlackexam: (e: React.ChangeEvent<HTMLInputElement>) => void;
  writeGradeElement: IWriteGradeElement;
  changeWriteGradeElement: React.ChangeEventHandler<HTMLInputElement>;
}

const WriteAttendence = ({
  gradeStatus,
  blackexam,
  changeBlackexam,
  writeGradeElement,
  changeWriteGradeElement,
}: IWriteGrade) => {
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
    <>
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
      <GradeWraper title="DSM 알고리즘 대회 입상여부">
        <CheckButton value={writeGradeElement.dsm_algorithm_award} />
      </GradeWraper>
      <GradeWraper title="정보처리기능사 자격증 취득여부">
        <CheckButton value={writeGradeElement.craftsman_information_processing} />
      </GradeWraper>
    </>
  );
};

export default WriteAttendence;
