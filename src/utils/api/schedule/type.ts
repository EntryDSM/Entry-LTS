export type ScheduleType =
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
  current_status: ScheduleType;
}
