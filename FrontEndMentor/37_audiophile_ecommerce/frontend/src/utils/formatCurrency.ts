// const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
//   currency: 'USD',
//   style: 'currency',
// });

const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  style: 'decimal',
  minimumFractionDigits: 2,
});

export default function formatCurrency(number: number) {
  return CURRENCY_FORMATTER.format(number);
}
