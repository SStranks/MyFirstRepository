import CheckoutSummaryProductCard from '#Components/checkout/CheckoutSummaryProductCard';
import InputRadio from '#Components/custom/input/InputRadio';
import InputText from '#Components/custom/input/InputText';
import OrderCompleteModal from '#Components/modal/OrderCompleteModal';
import MainTagLayout from '#Layouts/MainTagLayout';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './_CheckoutPage.module.scss';

// TEMP DEV: .
const invoiceTotal = 5396;
const invoiceShipping = 50;
const invoiceVAT = 1079;
const invoiceGrandTotal = 5446;
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

function CheckoutPage(): JSX.Element {
  const navHook = useNavigate();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const productsList = cartProducts.map((el) => {
    return (
      <CheckoutSummaryProductCard
        key={el.productTitle}
        productImg={el.productImg}
        productTitle={el.productTitle}
        productPrice={el.productPrice}
        productQuantity={el.productQuantity}
      />
    );
  });

  const openOrderCompleteModal = () => {
    document.body.style.overflow = 'hidden';
    setModalOpen(true);
  };

  const closeOrderCompleteModal = () => {
    console.log('btn clicked');
    document.body.style.overflow = 'unset';
    setModalOpen(false);
  };

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
            <p className={styles.summary__financial__total}>
              $ {invoiceTotal.toLocaleString('en-US')}
            </p>
            <p className={styles.summary__financial__heading}>shipping</p>
            <p className={styles.summary__financial__total}>
              $ {invoiceShipping.toLocaleString('en-US')}
            </p>
            <p className={styles.summary__financial__heading}>
              vat &#40;included&#41;
            </p>
            <p className={styles.summary__financial__total}>
              $ {invoiceVAT.toLocaleString('en-US')}
            </p>
            <p
              className={`${styles.summary__financial__heading} ${styles.gridLastRow}`}>
              grand total
            </p>
            <p
              className={`${styles.summary__financial__grandTotal} ${styles.gridLastRow}`}>
              $ {invoiceGrandTotal.toLocaleString('en-US')}
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
