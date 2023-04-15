import { useState } from 'react';
import styles from './_ProductQuantityButton.module.scss';

function ProductQuantityButton(): JSX.Element {
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className={styles.button}>
      <button onClick={() => setQuantity((prev) => prev - 1)} type="button">
        -
      </button>
      <p className={styles.button__quantity}>{quantity}</p>
      <button onClick={() => setQuantity((prev) => prev + 1)} type="button">
        +
      </button>
    </div>
  );
}

export default ProductQuantityButton;
