import CheckoutSummaryProductCard from '#Components/checkout/CheckoutSummaryProductCard';
import InputEmail from '#Components/custom/input/InputEmail';
import InputRadio from '#Components/custom/input/InputRadio';
import InputTel from '#Components/custom/input/InputTel';
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

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElement = e.target as HTMLFormElement;
    const isValid = formElement.checkValidity();

    // TODO:  Make class for this;
    formElement.classList.add(styles.submitted);

    // Focus on first invalid input
    const firstInvalidInput = formElement.querySelector(
      ':invalid'
    ) as HTMLInputElement;
    firstInvalidInput?.focus();

    // Submit if valid
    if (isValid) {
      const dataObject = new FormData(formElement);
      // Faux Submission
      console.log(Object.fromEntries(dataObject.entries()));
      openOrderCompleteModal();
    }
  };

  return (
    <MainTagLayout appendClass={styles.mainTag}>
      <button
        className={styles.form__btnBack}
        onClick={() => navHook(-1)}
        type="button">
        go back
      </button>
      <form className={styles.form} onSubmit={onSubmit} noValidate>
        <div className={styles.checkout}>
          <p className={styles.checkout__header}>checkout</p>
          <div className={styles.checkout__grid}>
            <p className={styles.checkout__subHeader}>billing details</p>
            <InputText
              appendClass={styles.checkout__inputText}
              name="Name"
              placeholder="Insert full name"
              required
            />
            <InputEmail
              appendClass={styles.checkout__inputText}
              name="Email Address"
              placeholder="Insert email address"
              required
            />
            <InputTel
              appendClass={styles.checkout__inputText}
              name="Phone Number"
              placeholder="Insert phone number"
              required
            />

            <p className={styles.checkout__subHeader}>shipping info</p>
            <InputText
              appendClass={`${styles.checkout__inputText} ${styles.gridColumnSpan}`}
              name="Address"
              placeholder="Insert address"
              required
            />
            <InputText
              appendClass={styles.checkout__inputText}
              name="ZIP Code"
              placeholder="Insert ZIP code"
              required
            />
            <InputText
              appendClass={styles.checkout__inputText}
              name="City"
              placeholder="Insert city"
              required
            />
            <InputText
              appendClass={styles.checkout__inputText}
              name="Country"
              placeholder="Insert country"
              required
            />
            <p className={styles.checkout__subHeader}>payment details</p>
            <div className={styles.checkout__paymentMethod}>
              <p className={styles.checkout__labelTitle}>payment method</p>
              <InputRadio
                appendClass=""
                name="payment method"
                id="e-Money"
                required
              />
              <InputRadio
                appendClass={styles.gridColumn2}
                name="payment method"
                id="CashOnDelivery"
                required
              />
            </div>
            <InputText
              appendClass={styles.checkout__inputText}
              name="e-Money Number"
              placeholder="Insert e-Money number"
              required
            />
            <InputText
              appendClass={styles.checkout__inputText}
              name="e-Money PIN"
              placeholder="Insert e-Money PIN"
              required
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
            type="submit"
            // onClick={openOrderCompleteModal}
          >
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
