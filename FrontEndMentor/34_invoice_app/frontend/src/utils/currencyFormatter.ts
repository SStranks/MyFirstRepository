const CURRENCY_FORMATTER = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  useGrouping: true,
});

export default function currencyFormatter(input: number) {
  return CURRENCY_FORMATTER.format(input);
}
