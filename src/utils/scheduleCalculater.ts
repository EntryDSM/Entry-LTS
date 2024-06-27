import { ScheduleStatusType, ScheduleType } from './api/schedule/type';

export const scheduleCalculater = (scheduleStatus: ScheduleType) => {
  switch (scheduleStatus) {
    case 'START_DATE':
      return '원서 제출';
    case 'END_DATE':
      return '원서 제출';
    case 'FIRST_ANNOUNCEMENT':
      return '1차 발표';
    case 'INTERVIEW':
      return '2차 전형';
    case 'SECOND_ANNOUNCEMENT':
      return '최종발표';
  }
};

export const scheduleStatusCalculater = (currentStatus: ScheduleStatusType) => {
  switch (currentStatus) {
    case 'NOT_APPLICATION_PERIOD':
    case 'BEFORE_FIRST_ANNOUNCEMENT':
    case 'BEFORE_SECOND_ANNOUNCEMENT':
      return '지금은 원서 제출 기간이 아닙니다';
    case 'APPLICATION_PERIOD':
      return '지금은 원서 제출 기간입니다';
    case 'FIRST_ANNOUNCEMENT':
    case 'BEFORE_INTERVIEW':
      return '지금은 1차 발표 기간입니다';
    case 'INTERVIEW':
      return '지금은 2차 전형 기간입니다';
    case 'SECOND_ANNOUNCEMENT':
    case 'END':
      return '지금은 최종발표 기간입니다';
  }
};
