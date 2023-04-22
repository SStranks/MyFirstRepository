import { Link } from 'react-router-dom';
import styles from './_ProductInfoCard.module.scss';

type ElemProps = {
  productImg: string;
  productTitle: string;
  productDetails: string;
  newProduct: boolean;
  productCategory: string;
  productId: number;
};

function ProductInfoCard(props: ElemProps): JSX.Element {
  const {
    productImg,
    productTitle,
    productDetails,
    newProduct,
    productCategory,
    productId,
  } = props;

  return (
    <article className={styles.card} aria-labelledby={productTitle}>
      <img className={styles.card__img} src={productImg} alt="" />
      <div className={styles.card__panel}>
        {newProduct && <p className={styles.card__new}>new product</p>}
        <h2 className={styles.card__title} id={productTitle}>
          {productTitle}
        </h2>
        <p className={styles.card__details}>{productDetails}</p>
        <Link
          to={`/${productCategory}/${productId}`}
          className={styles.card__link}
          state={{ productCategory, productId }}
          aria-label={`See product ${productTitle}`}>
          see product
        </Link>
      </div>
    </article>
  );
}

export default ProductInfoCard;
