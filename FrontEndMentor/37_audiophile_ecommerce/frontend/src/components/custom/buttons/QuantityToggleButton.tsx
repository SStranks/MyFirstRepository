import styles from './_ProductQuantityButton.module.scss';

type ElemProps = {
  appendClass: string;
  currentValue: number;
  maxLimit?: number;
  minLimit?: number;
  decreaseFn: (val: number) => void;
  increaseFn: (val: number) => void;
};

// Component requires decrease/increase functions; parent component should handle currentValue state.
function QuantityToggleButton(props: ElemProps): JSX.Element {
  const {
    appendClass,
    currentValue,
    maxLimit = Number.POSITIVE_INFINITY,
    minLimit = Number.NEGATIVE_INFINITY,
    decreaseFn,
    increaseFn,
  } = props;

  const decreaseBtn = () => {
    decreaseFn(Math.max(currentValue - 1, minLimit));
  };

  const increaseBtn = () => {
    increaseFn(Math.min(currentValue + 1, maxLimit));
  };

  return (
    <div className={`${styles.button} ${appendClass}`}>
      <button onClick={decreaseBtn} type="button">
        -
      </button>
      <p className={styles.button__quantity}>{currentValue}</p>
      <button onClick={increaseBtn} type="button">
        +
      </button>
    </div>
  );
}

export default QuantityToggleButton;
