import ProductQuantityButton from '#Components/custom/buttons/ProductQuantityButton';
import styles from './_CartProductCard.module.scss';

type ElemProps = {
  productImg: string;
  productTitle: string;
  productPrice: number;
};

// TODO:  Make cart toggles and quantities dynamic
function CartProductCard(props: ElemProps): JSX.Element {
  const { productImg, productTitle, productPrice } = props;

  return (
    <div className={styles.card} aria-labelledby={productTitle}>
      <img className={styles.card__img} src={productImg} alt="" />
      <p className={styles.card__title} id={productTitle}>
        {productTitle}
      </p>
      <p className={styles.card__price}>
        $ {productPrice.toLocaleString('en-US')}
      </p>
      <ProductQuantityButton appendClass={styles.productQuantityBtn} />
    </div>
  );
}

export default CartProductCard;
