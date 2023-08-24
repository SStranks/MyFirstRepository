/* eslint-disable unicorn/no-useless-undefined */
import IconDelete from '#Svg/icon-delete.svg';
import { useEffect, useRef, useState } from 'react';
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

export interface IProps {
  id: string;
  index: number;
  itemName?: string;
  quantity?: number;
  price?: number;
  total?: number;
  deleteItem: (id: string) => void;
}

function FormItem(props: IProps): JSX.Element {
  const {
    id,
    index,
    itemName: itemNameProp,
    quantity: quantityProp,
    price: priceProp,
    total: totalProp,
    deleteItem,
  } = props;
  const [itemName, setItemName] = useState<string>(itemNameProp ?? '');
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
    setItemName((e.target as HTMLInputElement).value);
  };

  const quantityOnKeyDown = (e: React.KeyboardEvent) => {
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
      case quantity === 0 && e.key === '0':
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
  const deleteOnClick = () => {
    deleteItem(id);
  };

  return (
    <div key={id} className={styles.container}>
      <input
        className={`${styles.name} ${styles.input}`}
        type="text"
        name={`listItem-${index}-${id}-name`}
        value={itemName}
        onChange={nameOnChange}
        data-input-element="formItem"
        required
      />
      <input
        className={`${styles.quantity} ${styles.input}`}
        type="number"
        name={`listItem-${index}-${id}-quantity`}
        ref={quantityRef}
        min={1}
        max={99}
        step={1}
        value={quantity ?? ''}
        onKeyDown={quantityOnKeyDown}
        onChange={quantityOnChange}
        onBlur={quantityOnBlur}
        data-input-element="formItem"
        required
      />
      <InputPrice
        price={price}
        setPrice={setPrice}
        name={`listItem-${index}-${id}-price`}
        currencyFormatter={numberFormatter}
        data-input-element="formItem"
        required
      />
      <p className={styles.total}>{currencyFormatter.format(total)}</p>
      <button type="button" onClick={deleteOnClick}>
        <img className={styles.deleteBtn} src={IconDelete} alt="" />
      </button>
    </div>
  );
}

export default FormItem;
