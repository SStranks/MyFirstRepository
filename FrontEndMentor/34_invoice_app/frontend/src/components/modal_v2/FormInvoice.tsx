import Button from '#Components/custom/buttons/generic/Button';
import DropdownPaymentTerms from '#Components/custom/dropdown/payment-terms/DropdownPaymentTerms';
import { IInvoice } from '#Services/ApiServiceClient';
import IconDelete from '#Svg/icon-delete.svg';

import styles from './FormInvoice.module.scss';

interface IProps {
  invoice?: IInvoice;
}

// REFACTOR:  Need to utilize labels and inputs - see template files.
function FormInvoice(props: IProps): JSX.Element {
  const { invoice } = props;
  return (
    <form className={styles.form} action="">
      <div className={styles.form__from}>
        <p>Bill From</p>
        <div className={styles.form__from__street}>
          <p>Street Address</p>
          <input type="text" defaultValue={invoice?.senderAddress.street} />
        </div>
        <div className="">
          <p>City</p>
          <input type="text" defaultValue={invoice?.senderAddress.city} />
        </div>
        <div className="">
          <p>Post Code</p>
          <input type="text" defaultValue={invoice?.senderAddress.postCode} />
        </div>
        <div className="">
          <p>Country</p>
          <input type="text" defaultValue={invoice?.senderAddress.country} />
        </div>
      </div>
      <div className={styles.form__to}>
        <p>Bill To</p>
        <div className={styles.form__to__name}>
          <p>Client&#39;s Name</p>
          <input type="text" defaultValue={invoice?.clientName} />
        </div>
        <div className={styles.form__to__email}>
          <p>Client&#39;s Email</p>
          <input type="text" defaultValue={invoice?.clientEmail} />
        </div>
        <div className={styles.form__to__address}>
          <p>Street Address</p>
          <input type="text" defaultValue={invoice?.clientAddress.street} />
        </div>
        <div className="">
          <p>City</p>
          <input type="text" defaultValue={invoice?.clientAddress.city} />
        </div>
        <div className="">
          <p>Post Code</p>
          <input type="text" defaultValue={invoice?.clientAddress.postCode} />
        </div>
        <div className={styles.form__to__country}>
          <p>Country</p>
          <input type="text" defaultValue={invoice?.clientAddress.country} />
        </div>
      </div>
      <div className={styles.form__details}>
        <div className="">
          <p>Invoice Date</p>
          <input
            type="text"
            defaultValue={invoice?.createdAt}
            disabled={invoice !== undefined}
          />
        </div>
        <div className="">
          <p>Payment Terms</p>
          <DropdownPaymentTerms value={invoice?.paymentTerms} />
        </div>
        <div className={styles.form__details__description}>
          <p>Project Description</p>
          <input type="text" defaultValue={invoice?.description} />
        </div>
      </div>
      <div className={styles.form__itemlist}>
        <p className={styles.form__itemlist__title}>Item List</p>
        <div className={styles.form__itemlist__grid}>
          <p>Item Name</p>
          <p>Qty.</p>
          <p>Price</p>
          <p>Total</p>
          <input className={styles['form__itemlist__grid--col1']} type="text" />
          <input className={styles['form__itemlist__grid--col2']} type="text" />
          <input className={styles['form__itemlist__grid--col3']} type="text" />
          <p className={styles['form__itemlist__grid--col4']}>£156.00</p>
          <img
            className={styles['form__itemlist__grid--col5']}
            src={IconDelete}
            alt=""
          />
          <div className={styles.form__itemlist__grid__btnAddItem}>
            <Button
              text="+ Add New Item"
              color="grey"
              // eslint-disable-next-line unicorn/no-useless-undefined
              onClick={() => undefined}
              value="additem"
              disabled={false}
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default FormInvoice;
