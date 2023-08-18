/* eslint-disable unicorn/no-useless-undefined */
import IconDelete from '#Svg/icon-delete.svg';
import { Fragment, useEffect, useRef, useState } from 'react';
import styles from './FormItem.module.scss';
import InputPrice from './InputPrice';

const numberFormatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  useGrouping: false,
});

const currencyFormatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
  useGrouping: true,
});

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
      <InputPrice
        price={price}
        setPrice={setPrice}
        currencyFormatter={numberFormatter}
        required
      />
      <p className={styles.total}>{currencyFormatter.format(total)}</p>
      <button type="button" onClick={deleteOnClick}>
        <img className={styles.deleteBtn} src={IconDelete} alt="" />
      </button>
    </Fragment>
  );
}

export default FormItem;
