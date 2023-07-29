import BtnNewInvoice from '#Components/custom/buttons/new-invoice/BtnNewInvoice';
import DropdownFilterStatus from '#Components/custom/dropdown/filter-status/DropdownFilterStatus';
import { IFilterStatus } from '#Components/main/Main';
// import ModalSidebar from '#Components/modal/sidebar/ModalSidebar';
import Modal from '#Components/modal_v2/Modal';
import ModalSidebar from '#Components/modal_v2/ModalSidebar';
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
          <ModalSidebar title="New Invoice" code="" />
        </Modal>
      </ReactPortal>
    </div>
  );
}

export default UtilityBar;
