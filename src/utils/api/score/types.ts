export interface ScoreRequest {
  volunteerTime: number;
  absenceDayCount: number;
  lectureAbsenceCount: number;
  latenessCount: number;
  earlyLeaveCount: number;

  koreanGrade: string;
  socialGrade: string;
  historyGrade: string;
  mathGrade: string;
  scienceGrade: string;
  techAndHomeGrade: string;
  englishGrade: string;
}

export interface GedScoreRequest {
  averageScore: number;
}
