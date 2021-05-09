export type Time = {
  day: number;
  hour: number;
  minute: number;
  second: number;
}

/**
 * Parse time string from LiveSplit to Time object.
 * @param time (hh):(mm):ss.ms
 */
export const timeStringToObject = (time: string): Time => {

  const [ hmsString ] = time.split('.');

  const hms = hmsString.split(':');

  const second = hms.pop();
  const minute = hms.pop();
  const hour = hms.pop();

  return {
    day: hour ? (parseInt(hour) / 24) : 0,
    hour: hour ? (parseInt(hour) % 24) : 0,
    minute: minute ? parseInt(minute) : 0,
    second: second ? parseInt(second) : 0,
  };
}