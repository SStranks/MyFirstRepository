import AddToCartButton from '#Components/custom/buttons/AddToCartButton';
import formatCurrency from '#Utils/formatCurrency';
import styles from './_ProductDetailCard.module.scss';

type ElemProps = {
  appendClass?: string;
  productId: number;
  newProduct: boolean;
  productImages: { desktop: string; tablet: string; mobile: string };
  productTitle: string;
  productDescription: string;
  productPrice: number;
  productFeatures: string;
  productItems: { quantity: number; item: string }[];
};

function ProductDetailCard(props: ElemProps): JSX.Element {
  const {
    appendClass,
    productId,
    newProduct,
    productImages,
    productTitle,
    productDescription,
    productPrice,
    productFeatures,
    productItems,
  } = props;

  // '&nbsp;' to add space char; ensure capitalize style works
  const productInTheBox = productItems.map((el) => {
    return (
      <li key={el.item}>
        <p className={styles.cardSecondary__list__quantity}>{el.quantity}x</p>
        <p className={styles.cardSecondary__list__item}>&nbsp;{el.item}</p>
      </li>
    );
  });

  return (
    <div className={`${styles.container} ${appendClass}`}>
      <div className={styles.cardPrimary}>
        <picture className={styles.cardPrimary__picture}>
          <source
            srcSet={productImages.desktop}
            media="(min-width: 992px)"
            width="1080px"
            height="1120px"
          />
          <source
            srcSet={productImages.tablet}
            media="(min-width: 667px)"
            width="562px"
            height="960px"
          />
          <source
            srcSet={productImages.mobile}
            media="(max-width: 666px)"
            width="654px"
            height="654px"
          />
          <img
            className={styles.cardPrimary__img}
            src={productImages.desktop}
            alt={`${productTitle}`}
          />
        </picture>
        <div className={styles.cardPrimary__info}>
          {newProduct && <p className={styles.cardPrimary__new}>new product</p>}
          <h2 className={styles.cardPrimary__title}>{productTitle}</h2>
          <p className={styles.cardPrimary__details}>{productDescription}</p>
          <p className={styles.cardPrimary__price}>
            $ {formatCurrency(productPrice)}
          </p>
          <div className={styles.cardPrimary__purchase}>
            <AddToCartButton productId={productId} />
          </div>
        </div>
      </div>
      <div className={styles.cardSecondary}>
        <div className={styles.cardSecondary__features}>
          <h3 className={styles.cardSecondary__header}>features</h3>
          <p className={styles.cardSecondary__featuresInfo}>
            {productFeatures}
          </p>
        </div>
        <div className={styles.cardSecondary__inBox}>
          <h3 className={styles.cardSecondary__header}>in the box</h3>
          <ul className={styles.cardSecondary__list}>{productInTheBox}</ul>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailCard;
