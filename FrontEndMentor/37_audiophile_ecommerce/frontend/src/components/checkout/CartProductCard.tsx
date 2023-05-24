import QuantityToggleButton from '#Components/custom/buttons/QuantityToggleButton';
import { useShoppingCartContext } from '#Context/ShoppingCartContext';
import formatCurrency from '#Utils/formatCurrency';
import styles from './_CartProductCard.module.scss';

type ElemProps = {
  productId: number;
  productImg: string;
  productTitle: string;
  productPrice: number;
  productQuantity: number;
};

function CartProductCard(props: ElemProps): JSX.Element {
  const { productId, productImg, productTitle, productPrice, productQuantity } =
    props;
  const { decreaseCartItem, increaseCartItem } = useShoppingCartContext();

  const decreaseFn = () => {
    decreaseCartItem(productId);
  };

  const increaseFn = () => {
    increaseCartItem(productId);
  };

  return (
    <div className={styles.card} aria-labelledby={productTitle}>
      <img className={styles.card__img} src={productImg} alt={productTitle} />
      <p className={styles.card__title} id={productTitle}>
        {productTitle}
      </p>
      <p className={styles.card__price}>$ {formatCurrency(productPrice)}</p>
      <QuantityToggleButton
        appendClass={styles.productQuantityBtn}
        currentValue={productQuantity}
        maxLimit={99}
        decreaseFn={decreaseFn}
        increaseFn={increaseFn}
      />
    </div>
  );
}

export default CartProductCard;
