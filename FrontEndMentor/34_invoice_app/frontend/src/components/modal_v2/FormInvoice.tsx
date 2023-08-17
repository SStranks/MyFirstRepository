import InputDate from '#Components/custom/date-picker/InputDate';
import DropdownPaymentTerms from '#Components/custom/dropdown/payment-terms/DropdownPaymentTerms';
import { IInvoice } from '#Services/ApiServiceClient';
import { useState } from 'react';

import styles from './FormInvoice.module.scss';
import FormItem from './FormItem';

interface IProps {
  invoice?: IInvoice;
}

// REFACTOR:  Need to utilize labels and inputs - see template files.
function FormInvoice(props: IProps): JSX.Element {
  const { invoice } = props;
  const [FormItems, setFormItems] = useState(() => {
    if (invoice) {
      return invoice.items.map((item) => {
        return (
          <FormItem
            key={item.id}
            id={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            total={item.total}
          />
        );
      });
    }
    return [<FormItem key="initial" />];
  });

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const addNewFormItemOnClick = (e: React.MouseEvent) => {
    // TODO:  Need to fix the key for new formItem.
    setFormItems((prev) => [...prev, <FormItem key={`a${prev.length + 1}`} />]);
    console.log('new item', e);
  };

  return (
    <form className={styles.form} action="">
      <div className={styles.form__from}>
        <p>Bill From</p>
        <div className={styles.form__from__street}>
          <label htmlFor="fromStreetAddress">
            <p className={styles.form__inputLabel}>Street Address</p>
            <input
              type="text"
              className={styles.form__input}
              id="fromStreetAddress"
              defaultValue={invoice?.senderAddress.street}
            />
          </label>
        </div>
        <label htmlFor="fromCity">
          <p className={styles.form__inputLabel}>City</p>
          <input
            type="text"
            className={styles.form__input}
            id="fromCity"
            defaultValue={invoice?.senderAddress.city}
          />
        </label>
        <label htmlFor="fromPostCode">
          <p className={styles.form__inputLabel}>Post Code</p>
          <input
            type="text"
            className={styles.form__input}
            id="fromPostCode"
            defaultValue={invoice?.senderAddress.postCode}
          />
        </label>
        <label htmlFor="fromCountry">
          <p className={styles.form__inputLabel}>Country</p>
          <input
            className={styles.form__input}
            type="text"
            id="fromCountry"
            defaultValue={invoice?.senderAddress.country}
          />
        </label>
      </div>
      <div className={styles.form__to}>
        <p>Bill To</p>
        <label htmlFor="toClientName" className={styles.form__to__name}>
          <p className={styles.form__inputLabel}>Client&#39;s Name</p>
          <input
            type="text"
            className={styles.form__input}
            id="toClientName"
            defaultValue={invoice?.clientName}
          />
        </label>
        <label htmlFor="toClientEmail" className={styles.form__to__email}>
          <p className={styles.form__inputLabel}>Client&#39;s Email</p>
          <input
            type="text"
            className={styles.form__input}
            id="toClientEmail"
            defaultValue={invoice?.clientEmail}
          />
        </label>
        <label htmlFor="toClientStreet" className={styles.form__to__address}>
          <p className={styles.form__inputLabel}>Street Address</p>
          <input
            type="text"
            className={styles.form__input}
            id="toClientStreet"
            defaultValue={invoice?.clientAddress.street}
          />
        </label>
        <label htmlFor="toClientCity">
          <p className={styles.form__inputLabel}>City</p>
          <input
            type="text"
            className={styles.form__input}
            id="toClientCity"
            defaultValue={invoice?.clientAddress.city}
          />
        </label>
        <label htmlFor="toClientPostCode">
          <p className={styles.form__inputLabel}>Post Code</p>
          <input
            type="text"
            className={styles.form__input}
            id="toClientPostCode"
            defaultValue={invoice?.clientAddress.postCode}
          />
        </label>
        <label htmlFor="toClientCountry" className={styles.form__to__country}>
          <p className={styles.form__inputLabel}>Country</p>
          <input
            type="text"
            className={styles.form__input}
            id="toClientCountry"
            defaultValue={invoice?.clientAddress.country}
          />
        </label>
      </div>
      <div className={styles.form__details}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="invoiceDate">
          <p className={styles.form__inputLabel}>Invoice Date</p>
          <InputDate min={new Date()} labelId="invoiceDate" />
        </label>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="paymentTerms">
          <p className={styles.form__inputLabel}>Payment Terms</p>
          <DropdownPaymentTerms
            value={invoice?.paymentTerms}
            labelId="paymentTerms"
          />
        </label>
        <label
          htmlFor="projectDescription"
          className={styles.form__details__description}>
          <p className={styles.form__inputLabel}>Project Description</p>
          <input
            type="text"
            className={styles.form__input}
            id="projectDescription"
            defaultValue={invoice?.description}
          />
        </label>
      </div>
      <div className={styles.form__itemlist}>
        <p className={styles.form__itemlist__title}>Item List</p>
        <div className={styles.form__itemlist__grid}>
          <p>Item Name</p>
          <p>Qty.</p>
          <p>Price</p>
          <p>Total</p>
          {FormItems}
          <button
            type="button"
            className={styles.form__itemlist__grid__btnAddItem}
            onClick={addNewFormItemOnClick}>
            + Add New Item
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormInvoice;
