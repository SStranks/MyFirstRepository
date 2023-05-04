import InputEmail from '#Components/custom/input/InputEmail';
import InputRadio from '#Components/custom/input/InputRadio';
import InputTel from '#Components/custom/input/InputTel';
import InputText from '#Components/custom/input/InputText';
import IconCash from '#Svg/desktop/icon-cash.svg';
import formatCurrency from '#Utils/formatCurrency';
import { useState } from 'react';
import styles from './_CheckoutForm.module.scss';

type ElemProps = {
  totalAmount: number;
  openOrderCompleteModal: () => void;
  productsList: (false | JSX.Element)[];
};

function CheckoutForm(props: ElemProps): JSX.Element {
  const { totalAmount, openOrderCompleteModal, productsList } = props;
  const [paymentMethod, setPaymentMethod] = useState<string>('');

  const vatAmount = totalAmount * 0.2;
  const shippingAmount = 50;
  const grandTotal = formatCurrency(totalAmount + vatAmount + shippingAmount);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElement = e.target as HTMLFormElement;
    const isValid = formElement.checkValidity();

    formElement.classList.add(styles.form__submitted);

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

  const onRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked && e.target.id === 'e-Money')
      setPaymentMethod('e-Money');
    if (e.target.checked && e.target.id === 'cash') setPaymentMethod('cash');
  };

  return (
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
              name="payment method"
              id="e-Money"
              required
              onChange={onRadioChange}
            />
            <InputRadio
              appendClass={styles.gridColumn2}
              name="payment method"
              id="cash"
              required
              onChange={onRadioChange}
            />
          </div>
          {paymentMethod === 'e-Money' && (
            <>
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
            </>
          )}
          {paymentMethod === 'cash' && (
            <div className={styles.checkout__cash}>
              <img src={IconCash} alt="" width="48px" height="48px" />
              <p>
                The &#8216;Cash on Delivery&#8217; option enables you to pay in
                cash when our delivery courier arrives at your residence. Just
                make sure your address is correct so that your order will not be
                cancelled.
              </p>
            </div>
          )}
        </div>
      </div>
      <div className={styles.summary}>
        <p className={styles.summary__header}>summary</p>
        <div className={styles.summary__products}>{productsList}</div>
        <div className={styles.summary__financial}>
          <p className={styles.summary__financial__heading}>total</p>
          <p className={styles.summary__financial__total}>$ {totalAmount}</p>
          <p className={styles.summary__financial__heading}>shipping</p>
          <p className={styles.summary__financial__total}>$ {shippingAmount}</p>
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
        <button className={styles.summary__btn} type="submit">
          continue &#38; pay
        </button>
      </div>
    </form>
  );
}

export default CheckoutForm;
