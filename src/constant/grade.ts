import { GradeType } from '@/interfaces/grade';

export const gradeArr: GradeType[] = ['A', 'B', 'C', 'D', 'E', 'X'];

export const subject = {
  국어: 'korean_grade',
  사회: 'social_grade',
  역사: 'history_grade',
  수학: 'math_grade',
  과학: 'science_grade',
  기술가정: 'english_grade',
  영어: 'tech_and_home_grade',
};

export const gradeToScore: Record<string, number> = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
  E: 1,
};
