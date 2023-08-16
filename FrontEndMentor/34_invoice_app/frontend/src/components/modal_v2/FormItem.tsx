import IconDelete from '#Svg/icon-delete.svg';
import { Fragment, useEffect, useState } from 'react';
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
  const [name, setName] = useState<string | undefined>(nameProp);
  const [quantity, setQuantity] = useState<number | undefined>(quantityProp);
  const [price, setPrice] = useState<number | undefined>(priceProp);
  const [total, setTotal] = useState<number | undefined>(totalProp);

  useEffect(() => {
    if (quantity && price) setTotal(quantity * price);
  }, [quantity, price]);

  const nameOnChange = (e: React.ChangeEvent) => {
    setName((e.target as HTMLInputElement).value);
  };

  const quantityOnChange = (e: React.ChangeEvent) => {
    setQuantity(Number((e.target as HTMLInputElement).value));
  };

  const priceOnChange = (e: React.ChangeEvent) => {
    setPrice(Number((e.target as HTMLInputElement).value));
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
      />
      <input
        className={`${styles.quantity} ${styles.input}`}
        type="number"
        min={1}
        value={quantity}
        onChange={quantityOnChange}
      />
      <input
        className={`${styles.price} ${styles.input}`}
        type="number"
        value={price}
        onChange={priceOnChange}
      />
      <p className={styles.total}>{total}</p>
      <button type="button" onClick={deleteOnClick}>
        <img className={styles.deleteBtn} src={IconDelete} alt="" />
      </button>
    </Fragment>
  );
}

export default FormItem;
