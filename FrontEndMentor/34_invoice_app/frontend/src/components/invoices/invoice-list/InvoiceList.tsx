// import Invoice from '#Components/invoices/invoice/Invoice';
import IllustrationEmpty from '#Svg/illustration-empty.svg';
// TEMP DEV:  // Data
// import JSONData from '#Data/data.json';

import styles from './InvoiceList.module.scss';

function InvoiceList(): JSX.Element {
  // TEMP DEV:  // Data
  // const invoices = JSONData.map((el) => (
  //   <Invoice
  //     key={el.id}
  //     invoiceId={el.id}
  //     paymentDue={el.paymentDue}
  //     clientName={el.clientName}
  //     total={el.total}
  //     status={el.status}
  //   />
  // ));

  const invoices = undefined;

  const noInvoices = (
    <>
      <img src={IllustrationEmpty} alt="" />
      <h2>There is nothing here</h2>
      <p>
        Create an invoice by clicking the <b>New Invoice</b> button and get
        started
      </p>
    </>
  );

  return (
    <div className={styles.container}>
      {(invoices && (
        <div className={styles.container__invoices}>{invoices}</div>
      )) || <div className={styles.container__noInvoices}>{noInvoices}</div>}
    </div>
  );
}

export default InvoiceList;
