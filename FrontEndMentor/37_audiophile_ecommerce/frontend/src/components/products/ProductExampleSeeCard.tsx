import styles from './_ProductExampleSeeCard.module.scss';

type ElemProps = {
  productImg: string;
  productTitle: string;
};

function ProductExampleSeeCard(props: ElemProps): JSX.Element {
  const { productImg, productTitle } = props;

  return (
    <div className={styles.card}>
      <img className={styles.card__img} src={productImg} alt="" />
      <p className={styles.card__title}>{productTitle}</p>
      <button className={styles.card__btn} type="button">
        see product
      </button>
    </div>
  );
}

export default ProductExampleSeeCard;
