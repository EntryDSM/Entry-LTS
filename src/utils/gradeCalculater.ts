import { gradeToScore } from '../constant/grade';
import { IWriteGradeElement, ISelectGradeElement } from '../interfaces/grade';

/* 가산점 계산 */
export const getBonusScore = (writeGradeElement) => {
  let bonusScore = 0;

  if (writeGradeElement.craftsman_information_processing) {
    bonusScore += 6;
  }

  if (writeGradeElement.dsm_algorithm_award) {
    bonusScore += 3;
  }

  return bonusScore;
};

/**성적산출 최고 점수 */
export const getMaxScore = () => {
  return 110;
};

/**출석 점수 계산하는 함수 */
export const getAttendenceScore = (writeGradeElement: IWriteGradeElement) => {
  const { day_absence_count, early_leave_count, lateness_count, lecture_absence_count } = writeGradeElement;
  const absenceCount = Number(day_absence_count);
  const unauthorizedThing = Number(early_leave_count) + Number(lateness_count) + Number(lecture_absence_count);

  return Math.max(0, 15 - Math.floor(absenceCount + unauthorizedThing / 3));
};

/**봉사 점수 */
export const getVoluntterScore = (volunterrTime: number) => {
  return Math.min(15, volunterrTime);
};

/**각 학기별 점수 계산 */
const getSelectSemesterGradeScore = (gradeCurrent: number, selectGradeElement: ISelectGradeElement) => {
  let result: number;
  let gradeScoreArray: string[] = [];

  gradeScoreArray = Object.values(selectGradeElement)
    .filter((selectGradesSubjects) => selectGradesSubjects[gradeCurrent] !== 'X')
    .map((grades) => {
      return grades[gradeCurrent];
    });

  if (gradeScoreArray.length === 0) return 0;

  result = gradeScoreArray.reduce((acc, current) => (acc += gradeToScore[current]), 0);
  return (result / gradeScoreArray.length) * 4;
};

/**총 학기별 점수 계산 */
export const getSelectGradeScore = (gradeCurrent: number, selectGradeElement: ISelectGradeElement) => {
  const allSubjectsGrade: number[] = [0, 0, 0, 0];
  let result = 0;
  for (let i = 0; i < gradeCurrent; i++) {
    allSubjectsGrade[i] = getSelectSemesterGradeScore(i, selectGradeElement);
  }

  if (!allSubjectsGrade[0] && !!allSubjectsGrade[1]) allSubjectsGrade[1] *= 2;

  if (!allSubjectsGrade[2] && !allSubjectsGrade[3]) {
    allSubjectsGrade[2] = (allSubjectsGrade[0] + allSubjectsGrade[1]) / 2;
    allSubjectsGrade[3] = (allSubjectsGrade[0] + allSubjectsGrade[1]) / 2;
  } else if (!allSubjectsGrade[3]) {
    allSubjectsGrade[3] = (allSubjectsGrade[0] + allSubjectsGrade[1] + allSubjectsGrade[2]) / 3;
  } else if (!allSubjectsGrade[2]) {
    allSubjectsGrade[2] = (allSubjectsGrade[0] + allSubjectsGrade[1] + allSubjectsGrade[3]) / 3;
  }

  for (let i = 0; i < gradeCurrent; i++) {
    result += allSubjectsGrade[i];
  }

  return Math.round(result * 10) / 10;
};
