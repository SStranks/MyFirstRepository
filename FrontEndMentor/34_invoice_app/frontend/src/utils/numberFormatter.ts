const NUMBER_FORMATTER = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  useGrouping: false,
});

export default function numberFormatter(input: number) {
  return NUMBER_FORMATTER.format(input);
}
