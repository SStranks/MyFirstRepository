import InvoiceList from '../invoices/invoice-list/InvoiceList';
import UtilityBar from '../invoices/utilitybar/UtilityBar';
import styles from './Main.module.scss';

function Main(): JSX.Element {
  return (
    <div className={styles.container}>
      <UtilityBar />
      <InvoiceList />
    </div>
  );
}

export default Main;
