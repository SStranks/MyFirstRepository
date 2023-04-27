import IconCheck from '#Svg/desktop/icon-check.svg';
import { useRef } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import CheckoutSummaryProductCard from './CheckoutSummaryProductCard';
import styles from './_OrderCompleteCard.module.scss';

// TEMP DEV: .
const productExample = {
  productImg: '/img/cart/image-xx99-mark-two-headphones.jpg',
  productTitle: 'xx99 mk ii',
  productPrice: 2999,
  productQuantity: 1,
};
const grandTotal = 5446;
const cartTotalQuantity = 2;

type ElemProps = {
  modalOpen: boolean;
  modalClose: () => void;
};

function OrderCompleteCard(props: ElemProps): JSX.Element | null {
  const { modalOpen, modalClose } = props;
  const navigate = useNavigate();
  const nodeRef = useRef(null);

  return ReactDOM.createPortal(
    <CSSTransition
      in={modalOpen}
      timeout={{ exit: 800 }}
      onExited={() => navigate('/')}
      unmountOnExit
      classNames="orderCompleteModal"
      nodeRef={nodeRef}>
      <div className={styles.containerTemp} ref={nodeRef}>
        <div className={styles.card} aria-labelledby="header">
          <div className={styles.card__circle}>
            <img
              className={styles.card__circle__check}
              src={IconCheck}
              alt=""
            />
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
          <button
            type="button"
            className={styles.card__homeBtn}
            onClick={modalClose}>
            back to home
          </button>
        </div>
      </div>
    </CSSTransition>,
    document.querySelector('#modal') as HTMLElement
  );
}

export default OrderCompleteCard;
