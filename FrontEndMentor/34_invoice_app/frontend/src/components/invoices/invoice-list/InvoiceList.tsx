import Invoice from '#Components/invoices/invoice/Invoice';
import styles from './InvoiceList.module.scss';

function InvoiceList(): JSX.Element {
  return (
    <div className={styles.container}>
      <Invoice />
    </div>
  );
}

export default InvoiceList;
