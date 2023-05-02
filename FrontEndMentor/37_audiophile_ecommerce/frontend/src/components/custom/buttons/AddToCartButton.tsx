import { useShoppingCartContext } from '#Context/ShoppingCartContext';
import { useState } from 'react';
import QuantityToggleButton from './QuantityToggleButton';
import styles from './_AddToCartButton.module.scss';

type ElemProps = {
  productId: number;
};

function AddToCartButton(props: ElemProps): JSX.Element {
  const { productId } = props;
  const [currentValue, setCurrentValue] = useState<number>(1);
  const { increaseCartItem } = useShoppingCartContext();

  const addProductToCart = () => {
    increaseCartItem(productId, currentValue);
  };

  const decreaseFn = (val: number) => {
    setCurrentValue(val);
  };

  const increaseFn = (val: number) => {
    setCurrentValue(val);
  };

  return (
    <div className={styles.container}>
      <QuantityToggleButton
        appendClass=""
        currentValue={currentValue}
        minLimit={1}
        maxLimit={99}
        decreaseFn={decreaseFn}
        increaseFn={increaseFn}
      />
      <button
        className={styles.container__btn}
        type="button"
        onClick={addProductToCart}>
        add to cart
      </button>
    </div>
  );
}

export default AddToCartButton;
