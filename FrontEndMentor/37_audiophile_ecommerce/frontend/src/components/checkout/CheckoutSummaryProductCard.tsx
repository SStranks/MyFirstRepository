import styles from './_CheckoutSummaryProductCard.module.scss';

type ElemProps = {
  productImg: string;
  productTitle: string;
  productPrice: number;
  productQuantity: number;
};

function CheckoutSummaryProductCard(props: ElemProps): JSX.Element {
  const { productImg, productTitle, productPrice, productQuantity } = props;

  return (
    <div className={styles.card}>
      <img className={styles.card__img} src={productImg} alt="" />
      <p className={styles.card__title}>{productTitle}</p>
      <p className={styles.card__price}>
        $ {productPrice.toLocaleString('en-US')}
      </p>
      <p className={styles.card__quantity}>x{productQuantity}</p>
    </div>
  );
}

export default CheckoutSummaryProductCard;
