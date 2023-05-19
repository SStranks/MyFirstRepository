import { useShoppingCartContext } from '#Context/ShoppingCartContext';
import ProductData from '#Data/Data.json';
import formatCurrency from '#Utils/formatCurrency';
import { forwardRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CartProductCard from './CartProductCard';
import styles from './_CartSummaryCard.module.scss';

type ElemProps = {
  closeCartModal: React.Dispatch<React.SetStateAction<boolean>>;
};

function CartSummaryCard(
  props: ElemProps,
  ref: React.Ref<HTMLDivElement>
): JSX.Element {
  const { closeCartModal } = props;
  const location = useLocation();
  const nav = useNavigate();
  const { cartItems, cartTotalPrice, cartItemsCount, removeAllItems } =
    useShoppingCartContext();

  const cartItemsCards = cartItems.map((cartItem) => {
    const productData = ProductData.find(
      (product) => product.id === cartItem.id
    );

    if (!productData) return false;

    return (
      <CartProductCard
        key={cartItem.id}
        productId={productData.id}
        productImg={productData.cartImg}
        productTitle={productData.cartSlug}
        productPrice={productData.price}
        productQuantity={cartItem.quantity}
      />
    );
  });

  // Hide the checkout link if already at checkout
  const onCheckoutRoute = location.pathname !== '/checkout';

  // If cart not empty, navigate to checkout
  const checkoutBtnHandler = () => {
    nav('/checkout');
    closeCartModal(false);
  };

  return (
    <div className={styles.card} ref={ref}>
      <p className={styles.card__header}>cart &#40;{cartItemsCount}&#41;</p>
      <button
        className={styles.card__removeAllBtn}
        type="button"
        onClick={removeAllItems}
        aria-label="remove all products from cart">
        remove all
      </button>
      <div className={styles.card__productList}>{cartItemsCards}</div>
      <p className={styles.card__total}>total</p>
      <p className={styles.card__amount}>
        $ {formatCurrency(cartTotalPrice())}
      </p>
      {onCheckoutRoute && (
        <button
          className={styles.card__checkoutBtn}
          type="button"
          onClick={checkoutBtnHandler}
          disabled={cartItemsCount === 0}>
          checkout
        </button>
      )}
    </div>
  );
}

export default forwardRef(CartSummaryCard);
