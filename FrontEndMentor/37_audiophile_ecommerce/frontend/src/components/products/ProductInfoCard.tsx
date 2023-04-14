import styles from './_ProductInfoCard.module.scss';

type ElemProps = {
  productImg: string;
  productTitle: string;
  productDetails: string;
  newProduct: boolean;
};

function ProductInfoCard(props: ElemProps): JSX.Element {
  const { productImg, productTitle, productDetails, newProduct } = props;

  return (
    <div className={styles.card}>
      <img className={styles.card__img} src={productImg} alt="" />
      <div className={styles.card__panel}>
        {newProduct && <p className={styles.card__new}>new product</p>}
        <p className={styles.card__title}>{productTitle}</p>
        <p className={styles.card__details}>{productDetails}</p>
        <button className={styles.card__btn} type="button">
          see product
        </button>
      </div>
    </div>
  );
}

export default ProductInfoCard;
