import { Link } from 'react-router-dom';
import styles from './_ProductExampleSeeCard.module.scss';

type ElemProps = {
  productImg: string;
  productTitle: string;
  productCategory: string;
  productId: number;
};

function ProductExampleSeeCard(props: ElemProps): JSX.Element {
  const { productImg, productTitle, productCategory, productId } = props;

  return (
    <div className={styles.card} aria-label={`see product ${productTitle}`}>
      <img className={styles.card__img} src={productImg} alt={productTitle} />
      <h5 className={styles.card__title}>{productTitle}</h5>
      <Link
        to={`/${productCategory}/${productId}`}
        className={styles.card__btn}
        state={{ productCategory, productId }}>
        see product
      </Link>
    </div>
  );
}

export default ProductExampleSeeCard;
