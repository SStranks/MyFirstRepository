import { Link } from 'react-router-dom';
import styles from './_ProductInfoCard.module.scss';

type ElemProps = {
  productImgs: { desktop: string; tablet: string; mobile: string };
  productTitle: string;
  productDetails: string;
  newProduct: boolean;
  productCategory: string;
  productId: number;
};

function ProductInfoCard(props: ElemProps): JSX.Element {
  const {
    productImgs,
    productTitle,
    productDetails,
    newProduct,
    productCategory,
    productId,
  } = props;

  return (
    <article className={styles.card} aria-labelledby={productTitle}>
      <picture>
        <source
          srcSet={productImgs.desktop}
          media="(min-width: 1200px)"
          width="1080px"
          height="1120px"
        />
        <source
          srcSet={productImgs.tablet}
          media="(min-width: 481px) and (max-width: 1199px)"
          width="562px"
          height="960px"
        />
        <source
          srcSet={productImgs.mobile}
          media="(max-width: 480px)"
          width="654px"
          height="654px"
        />
        <img
          className={styles.card__img}
          src={productImgs.desktop}
          alt={`${productTitle}`}
        />
      </picture>
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
