import BtnNewInvoice from '#Components/custom/buttons/new-invoice/BtnNewInvoice';
import DropdownFilterStatus from '#Components/custom/dropdown/filter-status/DropdownFilterStatus';
import styles from './UtilityBar.module.scss';

const btnNewInvoiceClickHandler = () => {
  console.log('btnNewInvoiceClickHandle clicked');
};

function UtilityBar(): JSX.Element {
  // Temporary Dev
  const number = 7;

  return (
    <div className={styles.container}>
      <div className={styles.container__titleblock}>
        <h1>Invoices</h1>
        <p>
          <span>There are </span>
          {number}
          <span> total </span>invoices
        </p>
      </div>
      <div className={styles.container__controls}>
        <DropdownFilterStatus />
        <BtnNewInvoice
          onClick={btnNewInvoiceClickHandler}
          value={undefined}
          disabled={undefined}
        />
      </div>
    </div>
  );
}

export default UtilityBar;
