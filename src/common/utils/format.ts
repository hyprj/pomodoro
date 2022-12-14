//format seconds to mm:ss
export const numberTimeToString = (time: number) => {
  const minutes = Math.floor(time / 60);
  const formatedMins = minutes < 10 ? `0${minutes}` : minutes;

  const seconds = time % 60;
  const formatedSecs = seconds < 10 ? `0${seconds}` : seconds;

  return `${formatedMins}:${formatedSecs}`;
};
