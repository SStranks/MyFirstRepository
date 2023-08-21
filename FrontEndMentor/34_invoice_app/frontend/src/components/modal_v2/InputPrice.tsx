import { useMemo, useState } from 'react';
import styles from './FormItem.module.scss';

interface IProps {
  price?: string | number | undefined;
  setPrice?: React.Dispatch<React.SetStateAction<number | string | undefined>>;
  name: string;
  currencyFormatter?: Intl.NumberFormat;
  'data-input-element'?: string;
  required: boolean;
}

function InputPrice(props: IProps): JSX.Element {
  const {
    price: priceProp,
    setPrice: setPriceProp,
    name,
    currencyFormatter: currencyFormatterProp,
    'data-input-element': dataInputElement,
    required,
  } = props;
  const [priceInternal, setPriceInternal] = useState<
    number | string | undefined
  >(0);

  // If price is managed by parent component, use that components state setter function.
  const setPrice = (value: number | string | undefined) => {
    if (setPriceProp) return setPriceProp(value);
    return setPriceInternal(value);
  };

  // If price is managed by parent component, use that components state value.
  const price = priceProp === undefined ? priceInternal : priceProp;

  // If currency/number formatter is managed by parent component, use that.
  const currencyFormatter = useMemo(() => {
    if (currencyFormatterProp === undefined)
      return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        useGrouping: false,
      });
    return currencyFormatterProp;
  }, [currencyFormatterProp]);

  const priceOnKeyDown = (e: React.KeyboardEvent) => {
    switch (true) {
      case e.key === 'Backspace':
      case e.key === 'Tab':
      case e.key === 'ArrowUp':
      case e.key === 'ArrowDown':
      case e.key === 'ArrowLeft':
      case e.key === 'ArrowRight':
        return null;
      case e.key === '-':
      case e.key === '+':
      case e.key === 'e':
        return e.preventDefault();
      case price === 0 && e.key === '0':
        return e.preventDefault();
      default:
        return null;
    }
  };

  const priceOnChange = (e: React.ChangeEvent) => {
    // Constrain input to two decimal places
    let { value } = e.target as HTMLInputElement;
    if (/\d+\.\d{3}/.test(value)) value = value.slice(0, -1);
    return setPrice(value);
  };

  const priceOnBlur = () => {
    const formattedValue = currencyFormatter.format(Number(price ?? 0));
    return setPrice(formattedValue);
  };

  return (
    <input
      className={`${styles.price} ${styles.input}`}
      type="number"
      name={name}
      step={0.01}
      pattern="^\d*(\.\d{0,2})?$"
      min={0}
      value={price ?? ''}
      onKeyDown={priceOnKeyDown}
      onChange={priceOnChange}
      onBlur={priceOnBlur}
      data-input-element={dataInputElement}
      required={required}
    />
  );
}

export default InputPrice;
