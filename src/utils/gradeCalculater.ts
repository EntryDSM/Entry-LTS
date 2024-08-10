import { gradeToScore } from '@/constant/grade';
import { IWriteGradeElement, ISelectGradeElement } from '@/interfaces/grade';

/* 가산점 계산 */
export const getBonusScore = (writeGradeElement) => {
  let certificateScore = 0;
  let dsmAlgorithmScore = 0;
  if (writeGradeElement.certificate) {
    certificateScore += 6;
  }
  if (writeGradeElement.dsm_algorithm_award) {
    dsmAlgorithmScore += 3;
  }
  return { certificateScore, dsmAlgorithmScore };
};

/* 검정고시 점수 계산 */
export const getQualificationExamScore = (writeGradeElement: IWriteGradeElement) => {
  const { korean_grade, english_grade, math_grade, social_grade, science_grade, optional_grade } = writeGradeElement;

  const scores = [korean_grade, english_grade, math_grade, social_grade, science_grade, optional_grade];

  const convertToScore = (grade: number): number => {
    if (grade >= 98) return 5;
    if (grade >= 94) return 4;
    if (grade >= 90) return 3;
    if (grade >= 86) return 2;
    return 1;
  };

  const totalScore = scores.reduce((acc, grade) => acc + convertToScore(grade), 0);

  const averageScore = totalScore / scores.length;

  return Math.round(averageScore * 10) / 10;
};

/**성적산출 최고 점수 */
export const getMaxScore = () => {
  return 170;
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
const getSelectSemesterGradeScore = (
  gradeCurrent: number,
  selectGradeElement: ISelectGradeElement,
  isGraduate: boolean,
) => {
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
export const getSelectGradeScore = (
  gradeCurrent: number,
  selectGradeElement: ISelectGradeElement,
  isGraduate: boolean,
) => {
  const allSubjectsGrade: number[] = [0, 0, 0, 0];
  let result = 0;
  for (let i = 0; i < gradeCurrent; i++) {
    allSubjectsGrade[i] = getSelectSemesterGradeScore(i, selectGradeElement, isGraduate);
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

  if (!isGraduate && gradeCurrent > 0) {
    result += allSubjectsGrade[0];
  }

  return Math.round(result * 10) / 10;
};
