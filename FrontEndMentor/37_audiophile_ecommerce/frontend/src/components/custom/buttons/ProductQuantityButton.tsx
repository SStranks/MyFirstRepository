import { useShoppingCartContext } from '#Context/ShoppingCartContext';
import styles from './_ProductQuantityButton.module.scss';

type ElemProps = {
  appendClass: string;
  productId: number;
  productQuantity: number;
};

// Component has enforced range of 1 - 99
function ProductQuantityButton(props: ElemProps): JSX.Element {
  const { appendClass, productId, productQuantity } = props;
  const { increaseCartItem, decreaseCartItem } = useShoppingCartContext();

  // TODO:  Refactor this code; two separate buttons (same button used on detailProductPage)?

  // const decreaseClickHandler = () => {
  //   return decreaseFn
  //     ? decreaseFn(productId)
  //     : setQuantity((prev) => Math.max(prev - 1, 1));
  // };

  // const increaseClickHandler = () => {
  //   return increaseFn
  //     ? increaseFn(productId)
  //     : setQuantity((prev) => Math.min(prev + 1, 99));
  // };

  return (
    <div className={`${styles.button} ${appendClass}`}>
      <button onClick={() => decreaseCartItem(productId)} type="button">
        -
      </button>
      <p className={styles.button__quantity}>{productQuantity}</p>
      <button onClick={() => increaseCartItem(productId)} type="button">
        +
      </button>
    </div>
  );
}

export default ProductQuantityButton;
