import { Link } from 'react-router-dom';
import styles from './_ProductExampleSeeCard.module.scss';

type ElemProps = {
  productImages: { desktop: string; tablet: string; mobile: string };
  productTitle: string;
  productCategory: string;
  productId: number;
};

function ProductExampleSeeCard(props: ElemProps): JSX.Element {
  const { productImages, productTitle, productCategory, productId } = props;
  console.log(productImages);
  return (
    <div className={styles.card} aria-label={`see product ${productTitle}`}>
      <picture>
        <source
          srcSet={productImages.desktop}
          media="(min-width: 1200px)"
          width="700px"
          height="636px"
        />
        <source
          srcSet={productImages.tablet}
          media="(min-width: 768px)"
          width="446px"
          height="636px"
        />
        <source
          srcSet={productImages.mobile}
          media="(max-width: 480px)"
          width="654px"
          height="240px"
        />
        <img
          className={styles.card__img}
          src={productImages.desktop}
          alt={productTitle}
        />
      </picture>
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
