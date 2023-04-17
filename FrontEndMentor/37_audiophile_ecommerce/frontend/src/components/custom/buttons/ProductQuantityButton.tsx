import { useState } from 'react';
import styles from './_ProductQuantityButton.module.scss';

type ElemProps = {
  appendClass: string;
};

// Component has enforced range of 1 - 99
function ProductQuantityButton(props: ElemProps): JSX.Element {
  const { appendClass } = props;
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className={`${styles.button} ${appendClass}`}>
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
