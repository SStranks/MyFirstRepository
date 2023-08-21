import InputDate from '#Components/custom/date-picker/InputDate';
import DropdownPaymentTerms from '#Components/custom/dropdown/payment-terms/DropdownPaymentTerms';
import useComponentIdGenerator from '#Hooks/useComponentIdGenerator';
import { IInvoice, IItem } from '#Services/ApiServiceClient';
import React, { useState } from 'react';
import FormItem from './FormItem';

import styles from './FormInvoice.module.scss';

interface INewFormItem {
  id: string;
  name: undefined;
  quantity: undefined;
  price: undefined;
  total: undefined;
}

type FormItem = INewFormItem & IItem;

const newFormItem = (id: string) => {
  return {
    id,
    name: '',
    quantity: 0,
    price: 0,
    total: 0,
  };
};

interface IProps {
  invoice?: IInvoice;
}

function FormInvoice(props: IProps): JSX.Element {
  const { invoice } = props;
  const generateId = useComponentIdGenerator();
  const [formItems, setFormItems] = useState(invoice?.items || []);

  const formOnSumbit = (e: React.FormEvent) => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    const isValid = formElement.checkValidity();

    const dataObject2 = new FormData(formElement);
    console.log(Object.fromEntries(dataObject2.entries()));

    formElement.classList.add(styles.form__submitted);

    // Focus on first invalid input
    const firstInvalidInput = formElement.querySelector(
      ':invalid'
    ) as HTMLInputElement;
    firstInvalidInput?.focus();

    // Add error validation msg to invalid fields
    const invalidInputs = formElement.querySelectorAll(':invalid');
    if (invalidInputs) {
      // eslint-disable-next-line unicorn/no-array-for-each
      invalidInputs.forEach((el) => {
        const inputLabels = (el as HTMLInputElement)?.labels;
        if (inputLabels && inputLabels[0]?.firstElementChild) {
          inputLabels[0].firstElementChild.textContent = (
            el as HTMLInputElement
          ).validationMessage;
        }
      });
    }

    // Submit if valid
    if (isValid) {
      const dataObject = new FormData(formElement);
      // Faux Submission
      console.log(Object.fromEntries(dataObject.entries()));
    }
  };

  const addNewFormItemOnClick = () => {
    const id = `new-${generateId()}`;
    setFormItems((prev) => [...prev, newFormItem(id)]);
  };

  const deleteFormItemOnClick = (id: string) => {
    setFormItems((prev) => {
      return prev.filter((formItem) => formItem.id !== id);
    });
  };

  const formItemsComponents = formItems.map((formItem) => {
    return (
      <FormItem
        key={formItem.id}
        id={formItem.id}
        name={formItem.name}
        quantity={formItem.quantity}
        price={formItem.price}
        deleteItem={deleteFormItemOnClick}
      />
    );
  });

  return (
    <form
      id="submitFormInvoice"
      className={styles.form}
      onSubmit={formOnSumbit}
      noValidate>
      <div className={styles.form__from}>
        <p>Bill From</p>
        <div className={styles.form__from__street}>
          <label
            htmlFor="fromStreetAddress"
            className={styles.form__inputLabel}>
            Street Address
            <p className={styles.form__inputError} />
            <input
              type="text"
              className={styles.form__input}
              name="fromStreetAddress"
              id="fromStreetAddress"
              defaultValue={invoice?.senderAddress.street}
              required
            />
          </label>
        </div>
        <label htmlFor="fromCity" className={styles.form__inputLabel}>
          City
          <p className={styles.form__inputError} />
          <input
            type="text"
            className={styles.form__input}
            id="fromCity"
            name="fromCity"
            defaultValue={invoice?.senderAddress.city}
            required
          />
        </label>
        <label htmlFor="fromPostCode" className={styles.form__inputLabel}>
          Post Code
          <p className={styles.form__inputError} />
          <input
            type="text"
            className={styles.form__input}
            id="fromPostCode"
            name="fromPostCode"
            defaultValue={invoice?.senderAddress.postCode}
            required
          />
        </label>
        <label htmlFor="fromCountry" className={styles.form__inputLabel}>
          Country
          <p className={styles.form__inputError} />
          <input
            type="text"
            className={styles.form__input}
            id="fromCountry"
            name="fromCountry"
            defaultValue={invoice?.senderAddress.country}
            required
          />
        </label>
      </div>
      <div className={styles.form__to}>
        <p>Bill To</p>
        <label
          htmlFor="toClientName"
          className={`${styles.form__inputLabel} ${styles.form__to__name}`}>
          Client&#39;s Name
          <p className={styles.form__inputError} />
          <input
            type="text"
            className={styles.form__input}
            id="toClientName"
            name="toClientName"
            defaultValue={invoice?.clientName}
            required
          />
        </label>
        <label
          htmlFor="toClientEmail"
          className={`${styles.form__inputLabel} ${styles.form__to__email}`}>
          Client&#39;s Email
          <p className={styles.form__inputError} />
          <input
            type="email"
            className={styles.form__input}
            id="toClientEmail"
            name="toClientEmail"
            placeholder="e.g. email@example.com"
            defaultValue={invoice?.clientEmail}
            required
          />
        </label>
        <label
          htmlFor="toClientStreet"
          className={`${styles.form__inputLabel} ${styles.form__to__address}`}>
          Street Address
          <p className={styles.form__inputError} />
          <input
            type="text"
            className={styles.form__input}
            id="toClientStreet"
            name="toClientStreet"
            defaultValue={invoice?.clientAddress.street}
            required
          />
        </label>
        <label htmlFor="toClientCity" className={styles.form__inputLabel}>
          City
          <p className={styles.form__inputError} />
          <input
            type="text"
            className={styles.form__input}
            id="toClientCity"
            name="toClientCity"
            defaultValue={invoice?.clientAddress.city}
            required
          />
        </label>
        <label htmlFor="toClientPostCode" className={styles.form__inputLabel}>
          Post Code
          <p className={styles.form__inputError} />
          <input
            type="text"
            className={styles.form__input}
            id="toClientPostCode"
            name="toClientPostCode"
            defaultValue={invoice?.clientAddress.postCode}
            required
          />
        </label>
        <label
          htmlFor="toClientCountry"
          className={`${styles.form__inputLabel} ${styles.form__to__country}`}>
          Country
          <p className={styles.form__inputError} />
          <input
            type="text"
            className={styles.form__input}
            id="toClientCountry"
            name="toClientCountry"
            defaultValue={invoice?.clientAddress.country}
            required
          />
        </label>
      </div>
      <div className={styles.form__details}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="invoiceDate" className={styles.form__inputLabel}>
          Invoice Date
          <p className={styles.form__inputError} />
          <InputDate labelId="invoiceDate" />
        </label>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="paymentTerms" className={styles.form__inputLabel}>
          Payment Terms
          <p className={styles.form__inputError} />
          <DropdownPaymentTerms
            value={invoice?.paymentTerms}
            labelId="paymentTerms"
          />
        </label>
        <label
          htmlFor="projectDescription"
          className={`${styles.form__inputLabel} ${styles.form__details__description}`}>
          Project Description
          <p className={styles.form__inputError} />
          <input
            type="text"
            className={styles.form__input}
            id="projectDescription"
            name="projectDescription"
            placeholder="e.g. Graphic Design Service"
            defaultValue={invoice?.description}
            required
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
          {formItemsComponents}
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
