import IconArrowRight from '#Svg/desktop/icon-arrow-right.svg';
import { Link } from 'react-router-dom';

import styles from './_ProductExampleShopCard.module.scss';

type ElemProps = {
  productName: string;
  productImg: string;
  productShopURL: string;
};

function ProductExampleShopCard(props: ElemProps): JSX.Element {
  const { productName, productImg, productShopURL } = props;

  return (
    <div className={styles.card} aria-label={`see all ${productName} shop`}>
      <img className={styles.card__img} src={productImg} alt="" />
      <p className={styles.card__name}>{productName}</p>
      <div className={styles.card__shop}>
        <Link to={productShopURL} className={styles.card__shop__text}>
          shop
        </Link>
        <img className={styles.card__shop__img} src={IconArrowRight} alt="" />
      </div>
    </div>
  );
}

export default ProductExampleShopCard;
