const defaults: Intl.DateTimeFormatOptions = {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
};

function formatDate(date: Date, options = defaults, locale = 'en-GB') {
  return date.toLocaleDateString(locale, options);
}

export default formatDate;
