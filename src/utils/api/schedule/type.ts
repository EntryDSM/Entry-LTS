export type ScheduleType = 'START_DATE' | 'END_DATE' | 'FIRST_ANNOUNCEMENT' | 'INTERVIEW' | 'SECOND_ANNOUNCEMENT';
export type ScheduleStatusType =
  | 'NOT_APPLICATION_PERIOD'
  | 'APPLICATION_PERIOD'
  | 'BEFORE_FIRST_ANNOUNCEMENT'
  | 'FIRST_ANNOUNCEMENT'
  | 'BEFORE_INTERVIEW'
  | 'INTERVIEW'
  | 'BEFORE_SECOND_ANNOUNCEMENT'
  | 'SECOND_ANNOUNCEMENT'
  | 'END';

export interface IEditScheduleRequest {
  type: ScheduleType;
  date: string;
}

export interface IGetScheduleResponse {
  schedules: IEditScheduleRequest[];
  currentStatus: ScheduleStatusType;
}
