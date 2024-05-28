export const timeformatter = (startTime: string, endTime?: string) => {
  if (endTime) {
    startTime = startTime.slice(5, 10);
    endTime = endTime.slice(5, 10);
    return (startTime + '~' + endTime).replace('-', '/').replace('-', '/');
  }
  startTime = startTime.slice(5, 16).replace('-', '/').replace('T', ' ');
  return startTime;
};
