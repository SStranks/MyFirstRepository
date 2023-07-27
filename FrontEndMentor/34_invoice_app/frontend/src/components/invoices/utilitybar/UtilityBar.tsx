import BtnNewInvoice from '#Components/custom/buttons/new-invoice/BtnNewInvoice';
import DropdownFilterStatus from '#Components/custom/dropdown/filter-status/DropdownFilterStatus';
import { IFilterStatus } from '#Components/main/Main';
import styles from './UtilityBar.module.scss';

const btnNewInvoiceClickHandler = () => {
  console.log('btnNewInvoiceClickHandle clicked');
};

interface IProps {
  numberInvoicesTotal: number | undefined;
  filterStatus: IFilterStatus;
  setFilterStatus: React.Dispatch<React.SetStateAction<IFilterStatus>>;
}

function UtilityBar(props: IProps): JSX.Element {
  const { numberInvoicesTotal, filterStatus, setFilterStatus } = props;

  return (
    <div className={styles.container}>
      <div className={styles.container__titleblock}>
        <h1>Invoices</h1>
        {numberInvoicesTotal !== undefined && (
          <p>There are {numberInvoicesTotal} total invoices</p>
        )}
      </div>
      <div className={styles.container__controls}>
        <DropdownFilterStatus
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
        />
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
