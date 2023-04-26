import { useEffect, useState } from 'react';
import CartProductCard from './CartProductCard';
import styles from './_CartSummaryCard.module.scss';

// TEMP DEV: .
const cartProducts = [
  {
    productImg: '/img/cart/image-xx99-mark-two-headphones.jpg',
    productTitle: 'xx99 mk ii',
    productPrice: 2999,
    productQuantity: 1,
  },
  {
    productImg: '/img/cart/image-xx99-mark-two-headphones.jpg',
    productTitle: 'xx99 mk iii',
    productPrice: 2999,
    productQuantity: 1,
  },
];

type ElemProps = {
  itemsQuantity: number;
  totalAmount: number;
};

function CartSummaryCard(props: ElemProps): JSX.Element {
  const { itemsQuantity, totalAmount } = props;
  const [cartItemsQuantity, setCartItemsQuantity] = useState(itemsQuantity);
  const [cartTotalAmount, setCartTotalAmount] = useState(totalAmount);
  const [cartItems, setCartItems] = useState<JSX.Element[]>([]);

  // let productsList = [];
  useEffect(() => {
    const productsList = cartProducts.map((el) => {
      return (
        <CartProductCard
          key={el.productTitle}
          productImg={el.productImg}
          productTitle={el.productTitle}
          productPrice={el.productPrice}
        />
      );
    });
    setCartItems(productsList);
  }, []);

  const removeAllItemsBtn = () => {
    setCartTotalAmount(0);
    setCartItemsQuantity(0);
    setCartItems([]);
  };

  return (
    // <div className={styles.containerTemp}>
    <div className={styles.card}>
      <p className={styles.card__header}>cart &#40;{cartItemsQuantity}&#41;</p>
      <button
        className={styles.card__removeAllBtn}
        type="button"
        onClick={removeAllItemsBtn}
        aria-label="remove all products from cart">
        remove all
      </button>
      <div className={styles.card__productList}>{cartItems}</div>
      <p className={styles.card__total}>total</p>
      <p className={styles.card__amount}>
        $ {cartTotalAmount.toLocaleString('en-US')}
      </p>
      <button className={styles.card__checkoutBtn} type="button">
        checkout
      </button>
    </div>
    // </div>
  );
}

export default CartSummaryCard;
