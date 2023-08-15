import BtnNewInvoice from '#Components/custom/buttons/new-invoice/BtnNewInvoice';
// import Dropdown from '#Components/custom/dropdown/dropdown-test/Dropdown';
import DatePicker from '#Components/custom/date-picker/InputDate';
import DropdownFilterStatus from '#Components/custom/dropdown/filter-status/DropdownFilterStatus';
import { IFilterStatus } from '#Components/main/Main';
import Modal from '#Components/modal_v2/Modal';
import ModalNewInvoice from '#Components/modal_v2/ModalNewInvoice';
import ReactPortal from '#Components/modal_v2/ReactPortal';
import { useState } from 'react';
import styles from './UtilityBar.module.scss';

interface IProps {
  numberInvoicesTotal: number | undefined;
  filterStatus: IFilterStatus;
  setFilterStatus: React.Dispatch<React.SetStateAction<IFilterStatus>>;
}

function UtilityBar(props: IProps): JSX.Element {
  const { numberInvoicesTotal, filterStatus, setFilterStatus } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const btnNewInvoiceClickHandler = () => {
    setIsModalOpen(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__titleblock}>
        <h1>Invoices</h1>
        {numberInvoicesTotal !== undefined && (
          <p>There are {numberInvoicesTotal} total invoices</p>
        )}
      </div>
      {/* // TEMP DEV: Datepicker and dropdown testing */}
      <DatePicker
      // min={new Date('February 03, 2022')}
      // max={new Date('October 17, 2023')}
      />
      {/* <Dropdown ariaLabel="Select" /> */}
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
      <ReactPortal wrapperId="modal">
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
          <ModalNewInvoice />
        </Modal>
      </ReactPortal>
    </div>
  );
}

export default UtilityBar;
