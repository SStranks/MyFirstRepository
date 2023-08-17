/* eslint-disable unicorn/no-useless-undefined */
import IconDelete from '#Svg/icon-delete.svg';
import { Fragment, useEffect, useRef, useState } from 'react';
import styles from './FormItem.module.scss';

interface IProps {
  id?: string;
  name?: string;
  quantity?: number;
  price?: number;
  total?: number;
}

function FormItem(props: IProps): JSX.Element {
  const {
    id,
    name: nameProp,
    quantity: quantityProp,
    price: priceProp,
    total: totalProp,
  } = props;
  const [name, setName] = useState<string>(nameProp ?? '');
  const [quantity, setQuantity] = useState<number | undefined>(
    quantityProp ?? 1
  );
  const [price, setPrice] = useState<number | string | undefined>(
    priceProp ?? 0
  );
  const [total, setTotal] = useState<number>(totalProp ?? 0);
  const quantityRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (quantity !== undefined && price !== undefined)
      setTotal(quantity * Number(price));
  }, [quantity, price]);

  const nameOnChange = (e: React.ChangeEvent) => {
    setName((e.target as HTMLInputElement).value);
  };

  const quantityOnKeyDown = (e: React.KeyboardEvent) => {
    switch (true) {
      case quantity === 0 && e.key === '0':
        return e.preventDefault();
      case quantity === 0 && !Number.isNaN(Number(e.key)):
        return e.preventDefault();
      default:
        return null;
    }
  };

  const quantityOnChange = (e: React.ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    if (value === '') return setQuantity(undefined);
    if (!/\d*/.test(value)) return setQuantity(0);
    return setQuantity(Number(value));
  };

  const quantityOnBlur = () => {
    if (!quantity) return setQuantity(1);
    if (quantityRef.current) {
      const { value } = quantityRef.current;
      quantityRef.current.value = Number(value).toString();
    }
    return null;
  };

  const numFormatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
  });

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
      case price !== undefined &&
        !Number.isNaN(Number(e.key)) &&
        /\d+\.\d\d/.test(price.toString()) &&
        /\d+\.\d\d/.test(numFormatter.format(Number(price))):
        return e.preventDefault();
      default:
        return null;
    }
  };

  // eslint-disable-next-line consistent-return
  const priceOnChange = (e: React.ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    if (value === '') return setPrice(undefined);
    setPrice(value);
  };

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const priceOnBlur = () => {
    if (!price) setPrice(0);
    if (priceRef.current) {
      const { value } = priceRef.current;
      priceRef.current.value = numFormatter.format(Number(value));
    }
    return null;
  };

  const priceOnFocus = () => {
    if (priceRef.current?.value === '0.00') setPrice(undefined);
  };

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const deleteOnClick = (e: React.MouseEvent) => {
    console.log('delete', e);
  };

  return (
    <Fragment key={id}>
      <input
        className={`${styles.name} ${styles.input}`}
        type="text"
        value={name}
        onChange={nameOnChange}
        required
      />
      <input
        className={`${styles.quantity} ${styles.input}`}
        type="number"
        ref={quantityRef}
        min={1}
        max={99}
        step={1}
        value={quantity ?? ''}
        onKeyDown={quantityOnKeyDown}
        onChange={quantityOnChange}
        onBlur={quantityOnBlur}
        required
      />
      <input
        className={`${styles.price} ${styles.input}`}
        type="number"
        ref={priceRef}
        step={0.01}
        pattern="^\d*(\.\d{0,2})?$"
        min={0}
        value={price ?? ''}
        onKeyDown={priceOnKeyDown}
        onChange={priceOnChange}
        onBlur={priceOnBlur}
        onFocus={priceOnFocus}
        required
      />
      <p className={styles.total}>{numFormatter.format(total)}</p>
      <button type="button" onClick={deleteOnClick}>
        <img className={styles.deleteBtn} src={IconDelete} alt="" />
      </button>
    </Fragment>
  );
}

export default FormItem;
