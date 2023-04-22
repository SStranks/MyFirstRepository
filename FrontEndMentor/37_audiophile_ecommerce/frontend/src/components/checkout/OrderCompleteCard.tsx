import IconCheck from '#Svg/desktop/icon-check.svg';
import { Link } from 'react-router-dom';
import CheckoutSummaryProductCard from './CheckoutSummaryProductCard';
import styles from './_OrderCompleteCard.module.scss';

// TEMP DEV: .
const productExample = {
  productImg: '/public/img/cart/image-xx99-mark-two-headphones.jpg',
  productTitle: 'xx99 mk ii',
  productPrice: 2999,
  productQuantity: 1,
};
const grandTotal = 5446;
const cartTotalQuantity = 2;

function OrderCompleteCard(): JSX.Element {
  return (
    <div className={styles.containerTemp}>
      <div className={styles.card} aria-labelledby="header">
        <div className={styles.card__circle}>
          <img className={styles.card__circle__check} src={IconCheck} alt="" />
        </div>
        <h3 className={styles.card__header} id="header">
          thank you for your order
        </h3>
        <p className={styles.card__subHeader}>
          You will receive an email conformation shortly
        </p>
        <div className={styles.orderDetails}>
          <div className={styles.orderDetails__items}>
            <CheckoutSummaryProductCard
              productImg={productExample.productImg}
              productTitle={productExample.productTitle}
              productPrice={productExample.productPrice}
              productQuantity={productExample.productQuantity}
            />
            <hr className={styles.orderDetails__items__hr} />
            <p className={styles.orderDetails__items__totalQuantity}>
              and {cartTotalQuantity} other item&#40;s&#41;
            </p>
          </div>
          <div className={styles.orderDetails__grandTotal}>
            <p className={styles.orderDetails__grandTotal__title}>
              grand total
            </p>
            <p className={styles.orderDetails__grandTotal__amount}>
              ${grandTotal.toLocaleString('en-US')}
            </p>
          </div>
        </div>
        <Link to="/" className={styles.card__homeBtn}>
          back to home
        </Link>
      </div>
    </div>
  );
}

export default OrderCompleteCard;
