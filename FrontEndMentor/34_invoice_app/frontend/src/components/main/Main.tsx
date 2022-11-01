// import InvoiceEdit from '#Components/invoices/invoice-edit/InvoiceEdit';
import InvoiceList from '#Components/invoices/invoice-list/InvoiceList';
import UtilityBar from '#Components/invoices/utilitybar/UtilityBar';
import styles from './Main.module.scss';

function Main(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.container__subContainer}>
        {/* <InvoiceEdit /> */}
        <UtilityBar />
        <InvoiceList />
      </div>
    </div>
  );
}

export default Main;
