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
  const [price, setPrice] = useState<number>(priceProp ?? 0);
  const [total, setTotal] = useState<number>(totalProp ?? 0);
  const quantityRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (quantity !== undefined && price !== undefined)
      setTotal(quantity * price);
  }, [quantity, price]);

  const nameOnChange = (e: React.ChangeEvent) => {
    setName((e.target as HTMLInputElement).value);
  };

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const quantityOnKeyDown = (e: React.KeyboardEvent) => {
    if (Number.isNaN(Number(e.key)) && e.key !== 'Backspace' && e.key !== 'Tab')
      return e.preventDefault();
    if (quantity === 0 && e.key === '0') return e.preventDefault();
    return null;
  };

  const quantityOnChange = (e: React.ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    // eslint-disable-next-line unicorn/no-useless-undefined
    if (value === '') return setQuantity(undefined);
    if (!/\d*/.test(value)) return setQuantity(0);
    return setQuantity(Number(value));
  };

  const quantityOnBlur = () => {
    if (!quantity) setQuantity(1);
    if (quantityRef.current) {
      const { value } = quantityRef.current;
      quantityRef.current.value = Number(value).toString();
    }
  };

  const priceOnChange = (e: React.ChangeEvent) => {
    // const { value } = e.target as HTMLInputElement;

    setPrice(Number((e.target as HTMLInputElement).value));
  };

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const deleteOnClick = (e: React.MouseEvent) => {
    console.log('delete', e);
  };

  console.log('QAS', quantity);

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
        step={0.01}
        pattern="^\d*(\.\d{0,2})?$"
        min={0}
        value={price}
        onChange={priceOnChange}
        required
      />
      <p className={styles.total}>{total}</p>
      <button type="button" onClick={deleteOnClick}>
        <img className={styles.deleteBtn} src={IconDelete} alt="" />
      </button>
    </Fragment>
  );
}

export default FormItem;
