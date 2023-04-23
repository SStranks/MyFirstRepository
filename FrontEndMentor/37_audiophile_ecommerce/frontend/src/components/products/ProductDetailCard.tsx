import ProductQuantityButton from '#Components/custom/buttons/ProductQuantityButton';
import styles from './_ProductDetailCard.module.scss';

type ElemProps = {
  appendClass: string;
  newProduct: boolean;
  productImg: string;
  productTitle: string;
  productDescription: string;
  productPrice: number;
  productFeatures: string;
  productItems: { quantity: number; item: string }[];
};

function ProductDetailCard(props: ElemProps): JSX.Element {
  const {
    appendClass,
    newProduct,
    productImg,
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
        <img
          className={styles.cardPrimary__img}
          src={productImg}
          alt={`${productTitle}`}
        />
        <div className={styles.cardPrimary__info}>
          {newProduct && <p className={styles.cardPrimary__new}>new product</p>}
          <h2 className={styles.cardPrimary__title}>{productTitle}</h2>
          <p className={styles.cardPrimary__details}>{productDescription}</p>
          <p className={styles.cardPrimary__price}>
            $ {productPrice.toLocaleString('en-US')}
          </p>
          <div className={styles.cardPrimary__purchase}>
            <ProductQuantityButton appendClass="" />
            <button className={styles.cardPrimary__btn} type="button">
              add to cart
            </button>
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
