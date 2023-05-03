import ViewMoreCartItemsButton from '#Components/custom/buttons/ViewMoreCartItemsButton';
import { useShoppingCartContext } from '#Context/ShoppingCartContext';
import ProductData from '#Data/Data.json';
import IconCheck from '#Svg/desktop/icon-check.svg';
import formatCurrency from '#Utils/formatCurrency';
import { useRef } from 'react';
import CheckoutSummaryProductCard from './CheckoutSummaryProductCard';
import styles from './_OrderCompleteCard.module.scss';

type ElemProps = {
  modalClose: React.Dispatch<React.SetStateAction<boolean>>;
};

function OrderCompleteCard(props: ElemProps): JSX.Element | null {
  const { modalClose } = props;
  const { cartTotalPrice, cartItems } = useShoppingCartContext();
  const grandTotalRef = useRef<HTMLDivElement>(null);
  const itemsListRef = useRef<HTMLDivElement>(null);

  const cartItemsCards = cartItems.map((cartItem) => {
    const productData = ProductData.find(
      (product) => product.id === cartItem.id
    );

    if (!productData) return false;

    return (
      <CheckoutSummaryProductCard
        key={cartItem.id}
        productImg={productData.cartImg}
        productTitle={productData.cartSlug}
        productPrice={productData.price}
        productQuantity={cartItem.quantity}
      />
    );
  });

  const viewMoreBtnHandler = () => {
    grandTotalRef.current?.classList.toggle(
      styles['orderDetails__grandTotal--active']
    );
    itemsListRef.current?.classList.toggle(
      styles['orderDetails__items--active']
    );
  };

  return (
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
        <div className={styles.orderDetails__items} ref={itemsListRef}>
          {cartItemsCards}
          {cartItems.length > 1 && (
            <hr className={styles.orderDetails__items__hr} />
          )}
          {cartItems.length > 1 && (
            <ViewMoreCartItemsButton
              cartItemLength={cartItems.length}
              onClickFn={viewMoreBtnHandler}
            />
          )}
        </div>
        <div className={styles.orderDetails__grandTotal} ref={grandTotalRef}>
          <p className={styles.orderDetails__grandTotal__title}>grand total</p>
          <p className={styles.orderDetails__grandTotal__amount}>
            ${formatCurrency(cartTotalPrice())}
          </p>
        </div>
      </div>
      <button
        type="button"
        className={styles.card__homeBtn}
        onClick={() => modalClose(true)}>
        back to home
      </button>
    </div>
  );
}

export default OrderCompleteCard;
