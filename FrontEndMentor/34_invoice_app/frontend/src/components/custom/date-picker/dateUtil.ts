const DATE_FORMATTER = new Intl.DateTimeFormat('en-GB', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

export function formatDate(date: number | Date | undefined) {
  // console.log('DATE', date);
  const newDate = DATE_FORMATTER.formatToParts(date).map((obj) => {
    if (obj.type === 'year') {
      return obj.value.padStart(4, '0');
    }
    return obj.value;
  });
  return newDate.join('');
}

export const DAYS_LETTER_SUNDAY = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
export const DAYS_LETTER_MONDAY = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

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

export const CUR_MONTH: number = +new Date().getMonth() + 1;

export const CUR_DAY: number = +new Date().getDate();

// Month; January = 1
export function getNumberOfDaysInMonth(
  year = CUR_YEAR,
  month = CUR_MONTH
): number {
  return new Date(year, month + 1, 0).getDate();
}

export function getDatePortions(
  dateString: string,
  delimiter: string
): string[] {
  // '30/12/1999' => ['30', '12', '1999']
  return dateString.split(`${delimiter}`);
}

export function getMonthFirstDay(month = CUR_MONTH, year = CUR_YEAR): number {
  return new Date(year, month, 1).getDay();
}

export function isValidDate(date: string) {
  // date should be in format: dd/mm/yyyy
  if (!/^(?:\d{2}\/){2}\d{4}$/.test(date)) {
    return false;
  }
  const parts = date.split('/').map((p) => Number.parseInt(p, 10));
  // Adjust month value to zero-based
  parts[1] -= 1;
  const d = new Date(parts[2], parts[1], parts[0]);
  return (
    d.getDate() === parts[0] &&
    d.getMonth() === parts[1] &&
    d.getFullYear() === parts[2]
  );
}
