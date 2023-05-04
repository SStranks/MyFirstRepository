import CheckoutSummaryProductCard from '#Components/checkout/CheckoutSummaryProductCard';
import OrderCompleteModal from '#Components/modal/OrderCompleteModal';
import { useShoppingCartContext } from '#Context/ShoppingCartContext';
import ProductData from '#Data/Data.json';
import MainTagLayout from '#Layouts/MainTagLayout';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import styles from './_CheckoutPage.module.scss';

function CheckoutPage(): JSX.Element {
  const navHook = useNavigate();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { cartItems, cartTotalPrice } = useShoppingCartContext();

  const productsList = cartItems.map((cartItem) => {
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

  const openOrderCompleteModal = () => {
    document.body.style.overflow = 'hidden';
    setModalOpen(true);
  };

  const closeOrderCompleteModal = () => {
    document.body.style.overflow = 'unset';
    setModalOpen(false);
  };

  const totalAmount = cartTotalPrice();

  return (
    <MainTagLayout appendClass={styles.mainTag}>
      <button
        className={styles.btnBack}
        onClick={() => navHook(-1)}
        type="button">
        go back
      </button>
      <CheckoutForm
        totalAmount={totalAmount}
        openOrderCompleteModal={openOrderCompleteModal}
        productsList={productsList}
      />
      <OrderCompleteModal
        modalOpen={modalOpen}
        modalClose={closeOrderCompleteModal}
      />
    </MainTagLayout>
  );
}

export default CheckoutPage;
