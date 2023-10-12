import { getSchedule } from '@/utils/api/schedule';
import { Skeleton, Text } from '@team-entry/design_system';
import * as _ from './style';
import { useAuthority } from '@/hooks/useAuthority';

export const ProgressBar = () => {
  const { data, isLoading } = getSchedule();
  const currentDate = new Date();
  const startDate = new Date(data?.schedules[0]?.date ?? '');
  const endDate = new Date(data?.schedules[1]?.date ?? '');
  const firstAnnouncementDate = new Date(data?.schedules[2]?.date ?? '');
  const interviewDate = new Date(data?.schedules[3]?.date ?? '');
  const secondAnnouncementDate = new Date(data?.schedules[4]?.date ?? '');

  const { authorityColor } = useAuthority();

  if (isLoading) {
    return <></>;
  }

  const progressState = [
    {
      title: '원서 제출',
      date: `${startDate.getMonth() + 1}/${startDate.getDate()}~${endDate.getMonth() + 1}/${endDate.getDate()}`,
      condition: startDate <= currentDate && currentDate <= endDate,
    },
    {
      title: '1차 발표',
      date: `${
        firstAnnouncementDate.getMonth() + 1
      }/${firstAnnouncementDate.getDate()} ${firstAnnouncementDate.getHours()}:${firstAnnouncementDate
        .getMinutes()
        .toString()
        .padStart(2, '0')}`,
      condition: firstAnnouncementDate <= currentDate && currentDate < interviewDate,
    },
    {
      title: '2차 전형',
      date: `${interviewDate.getMonth() + 1}/${interviewDate.getDate()} ${interviewDate.getHours()}:${interviewDate
        .getMinutes()
        .toString()
        .padStart(2, '0')}`,
      condition: interviewDate <= currentDate && currentDate <= secondAnnouncementDate,
    },
    {
      title: '2차 발표',
      date: `${
        secondAnnouncementDate.getMonth() + 1
      }/${secondAnnouncementDate.getDate()} ${secondAnnouncementDate.getHours()}:${secondAnnouncementDate
        .getMinutes()
        .toString()
        .padStart(2, '0')}`,
      condition: secondAnnouncementDate <= currentDate && currentDate.getDate() <= secondAnnouncementDate.getDate() + 3,
    },
  ];

  const progressBar = [
    {
      element: (
        <_._ProgressCircle
          now={startDate <= currentDate && currentDate.getDate() <= secondAnnouncementDate.getDate() + 3}
        />
      ),
    },
    {
      element: (
        <_._ProgressStep now={endDate < currentDate && currentDate.getDate() <= secondAnnouncementDate.getDate() + 3} />
      ),
    },

    {
      element: (
        <_._ProgressCircle
          now={firstAnnouncementDate <= currentDate && currentDate.getDate() <= secondAnnouncementDate.getDate() + 3}
        />
      ),
    },
    {
      element: (
        <_._ProgressStep
          now={interviewDate <= currentDate && currentDate.getDate() <= secondAnnouncementDate.getDate() + 3}
        />
      ),
    },
    {
      element: (
        <_._ProgressCircle
          now={interviewDate <= currentDate && currentDate.getDate() <= secondAnnouncementDate.getDate() + 3}
        />
      ),
    },
    {
      element: (
        <_._ProgressStep
          now={secondAnnouncementDate <= currentDate && currentDate.getDate() <= secondAnnouncementDate.getDate() + 3}
        />
      ),
    },
    {
      element: (
        <_._ProgressCircle
          now={secondAnnouncementDate <= currentDate && currentDate.getDate() <= secondAnnouncementDate.getDate() + 3}
        />
      ),
    },
  ];

  if (isLoading) return <Skeleton width={720} height={112} isLoaded rounded={5} />;

  return (
    <_._Overflow>
      <_._Progress>
        <_._ProgressCards>
          {progressState.map((state, idx) => (
            <_._ProgressCard key={idx} now={state.condition} authorityColor={authorityColor}>
              <Text color="realWhite" size="title1">
                {state.title}
              </Text>
              <Text color="realWhite" size="body1">
                {state.date}
              </Text>
            </_._ProgressCard>
          ))}
        </_._ProgressCards>
        <_._ProgressBar>
          {progressBar.map((state) => (
            <>{state.element}</>
          ))}
        </_._ProgressBar>
      </_._Progress>
    </_._Overflow>
  );
};
