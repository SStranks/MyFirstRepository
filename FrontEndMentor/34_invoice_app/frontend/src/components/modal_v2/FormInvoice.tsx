import InputDate from '#Components/custom/date-picker/InputDate';
import DropdownPaymentTerms from '#Components/custom/dropdown/payment-terms/DropdownPaymentTerms';
import useComponentIdGenerator from '#Hooks/useComponentIdGenerator';
import { IInvoice, IItem, TBody } from '#Services/ApiServiceClient';
import ApiService from '#Services/Services';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import FormItem from './FormItem';

import styles from './FormInvoice.module.scss';
import { ModalContext } from './Modal';

async function postInvoice(requestBody: TBody) {
  const responseData = await ApiService.postInvoice(requestBody);
  if (!responseData) throw new Error('Unable to create invoice');
  return responseData;
}

async function patchInvoice(variables: {
  invoiceId: string;
  requestBody: TBody;
}) {
  const { invoiceId, requestBody } = variables;
  const responseData = await ApiService.patchInvoice(invoiceId, requestBody);
  if (!responseData) throw new Error('Unable to update invoice');
  return responseData;
}

interface INewFormItem {
  id: string;
  name: undefined;
  quantity: undefined;
  price: undefined;
  total: undefined;
}

type FormItem = INewFormItem & IItem;

const newFormItem = (id: number) => {
  return {
    id: `new${id}`,
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
  const queryClient = useQueryClient();
  const { mutateAsync: mutateAsyncPostInvoice } = useMutation({
    mutationFn: postInvoice,
  });
  const { mutateAsync: mutateAsyncPatchInvoice } = useMutation({
    mutationFn: patchInvoice,
  });
  const contextValue = useContext(ModalContext);

  const formOnSumbit = (e: React.FormEvent) => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    const isValid = formElement.checkValidity();

    formElement.classList.add(styles.form__submitted);

    // Focus on first invalid input
    const firstInvalidInput = formElement.querySelector(
      ':invalid'
    ) as HTMLInputElement;
    firstInvalidInput?.focus();

    // Add error validation message to invalid fields
    const invalidInputs = formElement.querySelectorAll(':invalid');
    if (invalidInputs) {
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
      const formDataEntryValues = Object.fromEntries(dataObject.entries());
      const {
        createdAt,
        description,
        paymentTerms,
        clientName,
        clientEmail,
        clientAddressStreet,
        clientAddressCity,
        clientAddressPostCode,
        clientAddressCountry,
        senderAddressStreet,
        senderAddressCity,
        senderAddressPostCode,
        senderAddressCountry,
        ...listItems
      } = formDataEntryValues;

      // Parse and format listItems into array of objects.
      const items = ((listItemsObj) => {
        const obj: { [x: string]: { [y: string]: string } } = {};
        Object.entries(listItemsObj).forEach(([key, value]) => {
          const [_A, index, _B, property] = key.split('-');
          obj[index] ??= {};
          obj[index][property] = value as string;
        });

        return Object.values(obj);
      })(listItems);

      const senderAddress = {
        street: senderAddressStreet,
        city: senderAddressCity,
        postCode: senderAddressPostCode,
        country: senderAddressCountry,
      };

      const clientAddress = {
        street: clientAddressStreet,
        city: clientAddressCity,
        postCode: clientAddressPostCode,
        country: clientAddressCountry,
      };

      // TODO:  SenderAddress; backend; senderAddress is referencing User document - can't update without ID. Fix this issue when new functionality for user login system is implemented.
      console.log(senderAddress);
      const requestBody: { [x: string]: unknown } = {
        createdAt,
        clientName,
        clientEmail,
        // senderAddress,
        clientAddress,
        paymentTerms,
        description,
        items,
      };

      // Submit buttons are external to form; utilize name attribute to determine action.
      const submitButtonName = (
        (e.nativeEvent as SubmitEvent)?.submitter as HTMLButtonElement
      )?.name;

      if (submitButtonName === 'saveDraft') {
        toast.promise(mutateAsyncPostInvoice(requestBody), {
          loading: 'Creating Draft Invoice',
          success: () => {
            queryClient.invalidateQueries({ queryKey: ['invoices'] });
            contextValue?.setIsModalOpen(false);
            return 'Draft Invoice Successfully Created!';
          },
          error: (error) => `${error.message}`,
        });
      }

      if (submitButtonName === 'saveSend') {
        requestBody.status = 'pending';
        toast.promise(mutateAsyncPostInvoice(requestBody), {
          loading: 'Creating Invoice',
          success: () => {
            queryClient.invalidateQueries({ queryKey: ['invoices'] });
            contextValue?.setIsModalOpen(false);
            return `Invoice Successfully Created!`;
          },
          error: (error) => `${error.message}`,
        });
      }

      if (submitButtonName === 'saveChanges' && invoice) {
        const invoiceId = invoice.id;
        toast.promise(mutateAsyncPatchInvoice({ invoiceId, requestBody }), {
          loading: 'Updating Invoice',
          success: () => {
            queryClient.invalidateQueries({ queryKey: ['invoices'] });
            queryClient.invalidateQueries({ queryKey: [invoice?.id] });
            contextValue?.setIsModalOpen(false);
            return 'Invoice Updated';
          },
          error: (error) => `${error.message}`,
        });
      }
    }
  };

  const addNewFormItemOnClick = () => {
    const id = generateId();
    setFormItems((prev) => [...prev, newFormItem(id)]);
  };

  const deleteFormItemOnClick = (id: string) => {
    setFormItems((prev) => {
      return prev.filter((formItem) => formItem.id !== id);
    });
  };

  const formItemsComponents = formItems.map((formItem, i) => {
    return (
      <FormItem
        key={formItem.id}
        id={formItem.id}
        index={i}
        itemName={formItem.name}
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
            htmlFor="senderAddressStreet"
            className={styles.form__inputLabel}>
            Street Address
            <p className={styles.form__inputError} />
            <input
              type="text"
              className={styles.form__input}
              name="senderAddressStreet"
              id="senderAddressStreet"
              defaultValue={invoice?.senderAddress.street}
              required
            />
          </label>
        </div>
        <label htmlFor="senderAddressCity" className={styles.form__inputLabel}>
          City
          <p className={styles.form__inputError} />
          <input
            type="text"
            className={styles.form__input}
            id="senderAddressCity"
            name="senderAddressCity"
            defaultValue={invoice?.senderAddress.city}
            required
          />
        </label>
        <label
          htmlFor="senderAddressPostCode"
          className={styles.form__inputLabel}>
          Post Code
          <p className={styles.form__inputError} />
          <input
            type="text"
            className={styles.form__input}
            id="senderAddressPostCode"
            name="senderAddressPostCode"
            defaultValue={invoice?.senderAddress.postCode}
            required
          />
        </label>
        <label
          htmlFor="senderAddressCountry"
          className={styles.form__inputLabel}>
          Country
          <p className={styles.form__inputError} />
          <input
            type="text"
            className={styles.form__input}
            id="senderAddressCountry"
            name="senderAddressCountry"
            defaultValue={invoice?.senderAddress.country}
            required
          />
        </label>
      </div>
      <div className={styles.form__to}>
        <p>Bill To</p>
        <label
          htmlFor="clientName"
          className={`${styles.form__inputLabel} ${styles.form__to__name}`}>
          Client&#39;s Name
          <p className={styles.form__inputError} />
          <input
            type="text"
            className={styles.form__input}
            id="clientName"
            name="clientName"
            defaultValue={invoice?.clientName}
            required
          />
        </label>
        <label
          htmlFor="clientEmail"
          className={`${styles.form__inputLabel} ${styles.form__to__email}`}>
          Client&#39;s Email
          <p className={styles.form__inputError} />
          <input
            type="email"
            className={styles.form__input}
            id="clientEmail"
            name="clientEmail"
            placeholder="e.g. email@example.com"
            defaultValue={invoice?.clientEmail}
            required
          />
        </label>
        <label
          htmlFor="clientAddressStreet"
          className={`${styles.form__inputLabel} ${styles.form__to__address}`}>
          Street Address
          <p className={styles.form__inputError} />
          <input
            type="text"
            className={styles.form__input}
            id="clientAddressStreet"
            name="clientAddressStreet"
            defaultValue={invoice?.clientAddress.street}
            required
          />
        </label>
        <label htmlFor="clientAddressCity" className={styles.form__inputLabel}>
          City
          <p className={styles.form__inputError} />
          <input
            type="text"
            className={styles.form__input}
            id="clientAddressCity"
            name="clientAddressCity"
            defaultValue={invoice?.clientAddress.city}
            required
          />
        </label>
        <label
          htmlFor="clientAddressPostCode"
          className={styles.form__inputLabel}>
          Post Code
          <p className={styles.form__inputError} />
          <input
            type="text"
            className={styles.form__input}
            id="clientAddressPostCode"
            name="clientAddressPostCode"
            defaultValue={invoice?.clientAddress.postCode}
            required
          />
        </label>
        <label
          htmlFor="clientAddressCountry"
          className={`${styles.form__inputLabel} ${styles.form__to__country}`}>
          Country
          <p className={styles.form__inputError} />
          <input
            type="text"
            className={styles.form__input}
            id="clientAddressCountry"
            name="clientAddressCountry"
            defaultValue={invoice?.clientAddress.country}
            required
          />
        </label>
      </div>
      <div className={styles.form__details}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor="createdAt" className={styles.form__inputLabel}>
          Invoice Date
          <p className={styles.form__inputError} />
          <InputDate
            initialDate={invoice?.createdAt}
            labelId="createdAt"
            name="createdAt"
            disabled={Boolean(invoice?.createdAt)}
          />
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
          htmlFor="description"
          className={`${styles.form__inputLabel} ${styles.form__details__description}`}>
          Project Description
          <p className={styles.form__inputError} />
          <input
            type="text"
            className={styles.form__input}
            id="description"
            name="description"
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
