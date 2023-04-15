import ProductQuantityButton from '#Components/buttons/ProductQuantityButton';
import styles from './_ProductDetailCard.module.scss';

type ElemProps = {
  appendClass: string;
  newProduct: boolean;
  productImg: string;
  productTitle: string;
  productDetail: string;
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
    productDetail,
    productPrice,
    productFeatures,
    productItems,
  } = props;

  const productInTheBox = productItems.map((el) => {
    return (
      <li key={el.item}>
        <p className={styles.cardSecondary__list__item}>
          <span className={styles.cardSecondary__list__quantity}>
            {el.quantity}x
          </span>
          {el.item}
        </p>
      </li>
    );
  });

  return (
    <div className={`${styles.container} ${appendClass}`}>
      <div className={styles.cardPrimary}>
        <img className={styles.cardPrimary__img} src={productImg} alt="" />
        <div className={styles.cardPrimary__info}>
          {newProduct && <p className={styles.cardPrimary__new}>new product</p>}
          <p className={styles.cardPrimary__title}>{productTitle}</p>
          <p className={styles.cardPrimary__details}>{productDetail}</p>
          <p className={styles.cardPrimary__price}>
            $ {productPrice.toLocaleString('en-US')}
          </p>
          <div className={styles.cardPrimary__purchase}>
            <ProductQuantityButton />
            <button className={styles.cardPrimary__btn} type="button">
              add to cart
            </button>
          </div>
        </div>
      </div>
      <div className={styles.cardSecondary}>
        <div className="">
          <p className={styles.cardSecondary__header}>features</p>
          <p className={styles.cardSecondary__featuresInfo}>
            {productFeatures}
          </p>
        </div>
        <div className="">
          <p className={styles.cardSecondary__header}>in the box</p>
          <ul className={styles.cardSecondary__list}>{productInTheBox}</ul>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailCard;
