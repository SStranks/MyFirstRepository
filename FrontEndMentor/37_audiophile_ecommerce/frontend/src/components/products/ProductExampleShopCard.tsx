import IconArrowRight from '#Svg/desktop/icon-arrow-right.svg';

import styles from './_ProductExampleShopCard.module.scss';

type ElemProps = {
  productName: string;
  productImg: string;
};

function ProductExampleShopCard(props: ElemProps): JSX.Element {
  const { productName, productImg } = props;

  return (
    <div className={styles.card}>
      <img className={styles.card__img} src={productImg} alt="" />
      <p className={styles.card__name}>{productName}</p>
      <div className={styles.card__shop}>
        <p className={styles.card__shop__text}>shop</p>
        <img className={styles.card__shop__img} src={IconArrowRight} alt="" />
      </div>
    </div>
  );
}

export default ProductExampleShopCard;
