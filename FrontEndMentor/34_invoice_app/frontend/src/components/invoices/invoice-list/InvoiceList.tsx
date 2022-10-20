import Invoice from '#Components/invoices/invoice/Invoice';
// TEMP DEV:  // Data
import JSONData from '#Data/data.json';

import styles from './InvoiceList.module.scss';

function InvoiceList(): JSX.Element {
  // TEMP DEV:  // Data
  const invoices = JSONData.map((el) => (
    <Invoice
      key={el.id}
      invoiceId={el.id}
      paymentDue={el.paymentDue}
      clientName={el.clientName}
      total={el.total}
      status={el.status}
    />
  ));

  return <div className={styles.container}>{invoices}</div>;
}

export default InvoiceList;
