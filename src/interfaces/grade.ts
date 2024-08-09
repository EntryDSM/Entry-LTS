export type GradeType = 'A' | 'B' | 'C' | 'D' | 'E' | 'X';

export type GradeStatusType = 'prospectiveGraduate' | 'graduate' | 'qualificationExam';

export interface IPatchGraduation {
  volunteer_time: number;
  day_absence_count: number;
  lecture_absence_count: number;
  lateness_count: number;
  early_leave_count: number;
  korean_grade: string;
  social_grade: string;
  history_grade: string;
  math_grade: string;
  science_grade: string;
  english_grade: string;
  tech_and_home_grade: string;
}

export interface ISelectGradeElement {
  korean_grade: string[];
  social_grade: string[];
  history_grade: string[];
  math_grade: string[];
  science_grade: string[];
  english_grade: string[];
  tech_and_home_grade: string[];
}

export interface IWriteGradeElement {
  volunteer_time: number;
  day_absence_count: number;
  lecture_absence_count: number;
  lateness_count: number;
  early_leave_count: number;
  dsm_algorithm_award: number;
  certificate: number;

  korean_grade: number;
  english_grade: number;
  math_grade: number;
  social_grade: number;
  science_grade: number;
  optional_grade: number;
}
