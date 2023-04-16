import InputText from '#Components/custom/input/InputText';
import ImgXX99MKII from '#Img/cart/image-xx99-mark-two-headphones.jpg';
import DefaultLayout from '#Layouts/DefaultLayout';
import { useNavigate } from 'react-router-dom';
import styles from './_CheckoutPage.module.scss';

// TEMP DEV: .
const invoiceTotal = 5396;
const invoiceShipping = 50;
const invoiceVAT = 1079;
const invoiceGrandTotal = 5446;
const cartProducts = [
  {
    productImg: ImgXX99MKII,
    productTitle: 'xx99 mk ii',
    productPrice: 2999,
    productQuantity: 1,
  },
];

function CheckoutPage(): JSX.Element {
  const navHook = useNavigate();

  const productsList = cartProducts.map((el) => {
    return (
      <div className="" key={el.productTitle}>
        test
      </div>
    );
  });

  return (
    <DefaultLayout>
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
              inputPlaceholder="Insert your name"
            />
            <InputText
              appendClass={styles.checkout__inputText}
              inputName="Email Address"
              inputPlaceholder="Insert your email address"
            />
            <InputText
              appendClass={styles.checkout__inputText}
              inputName="Phone Number"
              inputPlaceholder="Insert your phone number"
            />
            <p className={styles.checkout__subHeader}>shipping info</p>
            <InputText
              appendClass={`${styles.checkout__inputText} ${styles.gridColumnSpan}`}
              inputName="Address"
              inputPlaceholder="Insert your address"
            />
            <InputText
              appendClass={styles.checkout__inputText}
              inputName="ZIP Code"
              inputPlaceholder="Insert your ZIP code"
            />
            <InputText
              appendClass={styles.checkout__inputText}
              inputName="City"
              inputPlaceholder="Insert your city"
            />
            <InputText
              appendClass={styles.checkout__inputText}
              inputName="Country"
              inputPlaceholder="Insert your country"
            />
            <p className={styles.checkout__subHeader}>payment details</p>
            <InputText
              appendClass={styles.checkout__inputText}
              inputName="Address"
              inputPlaceholder="Insert your address"
            />
            <InputText
              appendClass={styles.checkout__inputText}
              inputName="ZIP Code"
              inputPlaceholder="Insert your ZIP code"
            />
            <InputText
              appendClass={styles.checkout__inputText}
              inputName="e-Money Number"
              inputPlaceholder="Insert your e-Money number"
            />
            <InputText
              appendClass={styles.checkout__inputText}
              inputName="e-Money PIN"
              inputPlaceholder="Insert your e-Money PIN"
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
          <button className={styles.summary__btn} type="button">
            continue &#38; pay
          </button>
        </div>
      </form>
    </DefaultLayout>
  );
}

export default CheckoutPage;
