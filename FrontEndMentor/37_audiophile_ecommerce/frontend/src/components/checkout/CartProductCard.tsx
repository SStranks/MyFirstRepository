import ProductQuantityButton from '#Components/custom/buttons/ProductQuantityButton';
import styles from './_CartProductCard.module.scss';

type ElemProps = {
  productId: number;
  productImg: string;
  productTitle: string;
  productPrice: number;
  productQuantity: number;
};

// TODO:  Make cart toggles and quantities dynamic
function CartProductCard(props: ElemProps): JSX.Element {
  const { productId, productImg, productTitle, productPrice, productQuantity } =
    props;

  return (
    <div className={styles.card} aria-labelledby={productTitle}>
      <img className={styles.card__img} src={productImg} alt={productTitle} />
      <p className={styles.card__title} id={productTitle}>
        {productTitle}
      </p>
      <p className={styles.card__price}>
        $ {productPrice.toLocaleString('en-US')}
      </p>
      <ProductQuantityButton
        appendClass={styles.productQuantityBtn}
        productId={productId}
        productQuantity={productQuantity}
      />
    </div>
  );
}

export default CartProductCard;
