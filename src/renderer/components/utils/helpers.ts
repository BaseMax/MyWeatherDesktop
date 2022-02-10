const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
export const getDay = (timeStamp: number): string => {
  const d = new Date(timeStamp * 1000);
  const dayName = days[d.getDay()];
  return dayName;
};

export function formatAMPM(date: number) {
  const d = new Date(date * 1000);
  let hours: number = d.getHours();
  let minutes: string | number = d.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours %= 12;
  hours = hours || 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  const strTime = `${hours}:${minutes} ${ampm}`;
  return strTime;
}
