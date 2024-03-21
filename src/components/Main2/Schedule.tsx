import styled from '@emotion/styled';
import { theme } from '@team-entry/design_system';
import React from 'react';

type ScheduleType = {
  scheduleName: string;
  scheduleTime: string;
};

const schedules: ScheduleType[] = [
  { scheduleName: '원서 제출', scheduleTime: '10/17~10/20' },
  { scheduleName: '1차 발표', scheduleTime: '10/24 18:00' },
  { scheduleName: '심층면접', scheduleTime: '10/28 9:00' },
  { scheduleName: '최종발표', scheduleTime: '11/03 10:00' },
];

const Schedule = () => {
  return (
    <_Wrapper>
      <_ProgressProvider>
        {schedules.map((_, index) => {
          return (
            <React.Fragment key={index}>
              <_ScheduleCircle />
              {index !== schedules.length - 1 && <_ScheduleLine />}
            </React.Fragment>
          );
        })}
      </_ProgressProvider>
      <_TextProvider>
        {schedules.map((schedule) => {
          return (
            <div>
              {schedule.scheduleName}
              <span>{schedule.scheduleTime}</span>
            </div>
          );
        })}
      </_TextProvider>
    </_Wrapper>
  );
};

export default Schedule;

const _Wrapper = styled.div`
  width: 1180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 148px;
`;

const _ProgressProvider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const _TextProvider = styled.div`
  display: flex;
  justify-content: center;
  gap: 256px;
  div {
    width: 104px;
    color: white;
    text-align: center;
    word-wrap: nowrap;
    font-size: 28px;
    font-weight: 500;
    span {
      font-size: 18px;
      font-weight: 500;
      color: ${theme.color.black300};
    }
  }
`;

const _ScheduleCircle = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${theme.color.orange800};
  border-radius: 50%;
`;

const _ScheduleLine = styled.div`
  width: 300px;
  height: 1px;
  background-color: ${theme.color.orange800};
  margin: 0 20px;
`;
