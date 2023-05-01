import { useShoppingCartContext } from '#Context/ShoppingCartContext';
import ProductData from '#Data/Data.json';
import { Link, useLocation } from 'react-router-dom';
import CartProductCard from './CartProductCard';
import styles from './_CartSummaryCard.module.scss';

type ElemProps = {
  closeCartModal: React.Dispatch<React.SetStateAction<boolean>>;
};

function CartSummaryCard(props: ElemProps): JSX.Element {
  const { closeCartModal } = props;
  const location = useLocation();
  const { cartItems, cartTotalPrice, cartItemsCount, removeAllItems } =
    useShoppingCartContext();

  const cartItemsCards = cartItems.map((product) => {
    const productData = ProductData.find((el) => el.id === product.id);

    if (!productData) return false;

    return (
      <CartProductCard
        key={productData.id}
        productId={productData.id}
        productImg={productData.cartImg}
        productTitle={productData.cartSlug}
        productPrice={productData.price}
        productQuantity={product.quantity}
      />
    );
  });

  // Hide the checkout link if already at checkout
  const onCheckoutRoute = location.pathname !== '/checkout';

  return (
    <div className={styles.card}>
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
        $ {cartTotalPrice().toLocaleString('en-US')}
      </p>
      {onCheckoutRoute && (
        <Link
          to="/checkout"
          className={styles.card__checkoutBtn}
          onClick={() => closeCartModal(false)}>
          {/* // TODO:  on click check if cart is empty; don't nav. */}
          <button
            type="button"
            // onClick={navigateToCheckout}
            disabled={cartItemsCount < 0}>
            checkout
          </button>
        </Link>
      )}
    </div>
  );
}

export default CartSummaryCard;
