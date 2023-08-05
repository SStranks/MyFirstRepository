export const DAYS_NUMERICAL = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const DAYS_STRING = {
  Sunday: 'Sun',
  Monday: 'Mon',
  Tuesday: 'Tue',
  Wednesday: 'Wed',
  Thursday: 'Thu',
  Friday: 'Fri',
  Saturday: 'Sat',
};

export const MONTHS_NUMERICAL = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const MONTHS_STRING = {
  January: 'Jan',
  February: 'Feb',
  March: 'Mar',
  April: 'Apr',
  May: 'May',
  June: 'Jun',
  July: 'Jul',
  August: 'Aug',
  September: 'Sep',
  October: 'Oct',
  November: 'Nov',
  December: 'Dec',
};

export const CUR_YEAR: number = +new Date().getFullYear();

export const CUR_MONTH: number = +new Date().getMonth();

export function getNumberOfDaysInMonth(
  year = CUR_YEAR,
  month = CUR_MONTH
): number {
  return new Date(year, month, 0).getDate();
}

export function getDatePortions(dateString: string): string[] {
  // '30/12/1999' => ['30', '12', '1999']
  return dateString.split('/');
}

export function getMonthFirstDay(month = CUR_MONTH, year = CUR_YEAR): number {
  return new Date(year, month, 1).getDay();
}
