import Invoice from '#Components/invoices/invoice/Invoice';
import { IInvoice } from '#Services/ApiServiceClient';
import IllustrationEmpty from '#Svg/illustration-empty.svg';
import styles from './InvoiceList.module.scss';

interface IProps {
  invoices: IInvoice[] | undefined;
}

function InvoiceList(props: IProps): JSX.Element {
  const { invoices } = props;
  const invoicesList = invoices?.map((el) => (
    <Invoice
      key={el.id}
      invoiceId={el.id}
      slug={el.slug}
      paymentDue={el.paymentDue}
      clientName={el.clientName}
      total={el.total}
      status={el.status}
    />
  ));

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
        <div className={styles.container__invoices}>{invoicesList}</div>
      )) || <div className={styles.container__noInvoices}>{noInvoices}</div>}
    </div>
  );
}

export default InvoiceList;
