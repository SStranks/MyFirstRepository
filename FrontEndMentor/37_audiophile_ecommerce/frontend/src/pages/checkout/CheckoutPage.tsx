import CheckoutSummaryProductCard from '#Components/checkout/CheckoutSummaryProductCard';
import InputRadio from '#Components/custom/input/InputRadio';
import InputText from '#Components/custom/input/InputText';
import OrderCompleteModal from '#Components/modal/OrderCompleteModal';
import { useShoppingCartContext } from '#Context/ShoppingCartContext';
import ProductData from '#Data/Data.json';
import MainTagLayout from '#Layouts/MainTagLayout';
import formatCurrency from '#Utils/formatCurrency';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const vatAmount = totalAmount * 0.2;
  const shippingAmount = 50;
  const grandTotal = formatCurrency(totalAmount + vatAmount + shippingAmount);

  return (
    <MainTagLayout appendClass={styles.mainTag}>
      <form className={styles.form}>
        <button
          className={styles.form__btnBack}
          onClick={() => navHook(-1)}
          type="button">
          go back
        </button>
        <div className={styles.checkout}>
          <p className={styles.checkout__header}>checkout</p>
          <div className={styles.checkout__grid}>
            <p className={styles.checkout__subHeader}>billing details</p>
            <InputText
              appendClass={styles.checkout__inputText}
              inputName="Name"
              inputPlaceholder="Insert full name"
            />
            <InputText
              appendClass={styles.checkout__inputText}
              inputName="Email Address"
              inputPlaceholder="Insert email address"
            />
            <InputText
              appendClass={styles.checkout__inputText}
              inputName="Phone Number"
              inputPlaceholder="Insert phone number"
            />
            <p className={styles.checkout__subHeader}>shipping info</p>
            <InputText
              appendClass={`${styles.checkout__inputText} ${styles.gridColumnSpan}`}
              inputName="Address"
              inputPlaceholder="Insert address"
            />
            <InputText
              appendClass={styles.checkout__inputText}
              inputName="ZIP Code"
              inputPlaceholder="Insert ZIP code"
            />
            <InputText
              appendClass={styles.checkout__inputText}
              inputName="City"
              inputPlaceholder="Insert city"
            />
            <InputText
              appendClass={styles.checkout__inputText}
              inputName="Country"
              inputPlaceholder="Insert country"
            />
            <p className={styles.checkout__subHeader}>payment details</p>
            <div className={styles.checkout__paymentMethod}>
              <p className={styles.checkout__labelTitle}>payment method</p>
              <InputRadio
                appendClass=""
                inputName="e-Money"
                inputId="e-Money"
                inputGroup="payment method"
              />
              <InputRadio
                appendClass={styles.gridColumn2}
                inputName="Cash on Delivery"
                inputId="CashOnDelivery"
                inputGroup="payment method"
              />
            </div>
            <InputText
              appendClass={styles.checkout__inputText}
              inputName="e-Money Number"
              inputPlaceholder="Insert e-Money number"
            />
            <InputText
              appendClass={styles.checkout__inputText}
              inputName="e-Money PIN"
              inputPlaceholder="Insert e-Money PIN"
            />
          </div>
        </div>
        <div className={styles.summary}>
          <p className={styles.summary__header}>summary</p>
          <div className={styles.summary__products}>{productsList}</div>
          <div className={styles.summary__financial}>
            <p className={styles.summary__financial__heading}>total</p>
            <p className={styles.summary__financial__total}>$ {totalAmount}</p>
            <p className={styles.summary__financial__heading}>shipping</p>
            <p className={styles.summary__financial__total}>
              $ {shippingAmount}
            </p>
            <p className={styles.summary__financial__heading}>
              vat &#40;included&#41;
            </p>
            <p className={styles.summary__financial__total}>$ {vatAmount}</p>
            <p
              className={`${styles.summary__financial__heading} ${styles.gridLastRow}`}>
              grand total
            </p>
            <p
              className={`${styles.summary__financial__grandTotal} ${styles.gridLastRow}`}>
              $ {grandTotal}
            </p>
          </div>
          <button
            className={styles.summary__btn}
            type="button"
            onClick={openOrderCompleteModal}>
            continue &#38; pay
          </button>
        </div>
      </form>
      <OrderCompleteModal
        modalOpen={modalOpen}
        modalClose={closeOrderCompleteModal}
      />
    </MainTagLayout>
  );
}

export default CheckoutPage;
