import { useState } from 'react';
import styles from './_ProductQuantityButton.module.scss';

// Component has enforced range of 1 - 99
function ProductQuantityButton(): JSX.Element {
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className={styles.button}>
      <button
        onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
        type="button">
        -
      </button>
      <p className={styles.button__quantity}>{quantity}</p>
      <button
        onClick={() => setQuantity((prev) => Math.min(prev + 1, 99))}
        type="button">
        +
      </button>
    </div>
  );
}

export default ProductQuantityButton;
