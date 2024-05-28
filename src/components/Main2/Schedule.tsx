import { getSchedule } from '@/utils/api/schedule';
import { scheduleCalculater } from '@/utils/scheduleCalculater';
import { timeformatter } from '@/utils/timeFormatter';
import styled from '@emotion/styled';
import { theme } from '@team-entry/design_system';
import React, { useEffect, useState } from 'react';

type ScheduleType = {
  scheduleName: string;
  scheduleTime: string;
};

const Schedule = () => {
  const [schedules, setSchedulesData] = useState<ScheduleType[]>();
  const { data } = getSchedule();

  useEffect(() => {
    if (data?.schedules) {
      const formatData = {
        scheduleName: scheduleCalculater(data?.schedules[0].type),
        scheduleTime: timeformatter(data.schedules[0].date, data.schedules[1].date),
      };
      const formatDatas = data?.schedules
        ?.filter((_, i) => i !== 1 && i !== 0)
        .map((schedule) => {
          return {
            scheduleName: scheduleCalculater(schedule.type),
            scheduleTime: timeformatter(schedule.date),
          };
        });
      setSchedulesData([formatData, ...formatDatas]);
    }
  }, [data]);

  return (
    <_Wrapper>
      <_ProgressProvider>
        {schedules?.map((_, index) => {
          return (
            <React.Fragment key={index}>
              <_ScheduleCircle />
              {index !== schedules.length - 1 && <_ScheduleLine />}
            </React.Fragment>
          );
        })}
      </_ProgressProvider>
      <_TextProvider>
        {schedules?.map((schedule) => {
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
  max-width: 94%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  align-self: center;
`;

const _ProgressProvider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const _TextProvider = styled.div`
  display: flex;
  justify-content: center;
  gap: 13.3vw;
  div {
    flex: none;
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
  width: 15.625vw;
  height: 1px;
  background-color: ${theme.color.orange800};
  margin: 0 20px;
`;
