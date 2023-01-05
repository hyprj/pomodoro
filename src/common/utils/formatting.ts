export namespace Time {
  //seconds to `mm:ss`
  export const toString = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const stringMinutes = minutes < 10 ? `0${minutes}` : minutes;

    const secs = seconds % 60;
    const stringSecs = secs < 10 ? `0${secs}` : secs;

    return `${stringMinutes}:${stringSecs}`;
  };
  //timestamp to hh:mm
  export const getHoursWithMinutes = (date: Date) => {
    const hours = date.getUTCHours();
    const stringHours = hours < 10 ? `0${hours}` : hours;

    const minutes = date.getMinutes();
    const stringMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${stringHours}:${stringMinutes}`;
  };
}
