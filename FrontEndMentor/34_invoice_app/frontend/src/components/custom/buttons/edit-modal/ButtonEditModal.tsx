import Modal from '#Components/modal/Modal';
import ModalSidebar from '#Components/modal/sidebar/ModalSidebar';
import { useState } from 'react';
import styles from './ButtonEditModal.module.scss';

type ButtonProps = {
  text: string;
  color: string;
  value: string;
  disabled: boolean;
};

function ButtonEditModal(props: ButtonProps): JSX.Element {
  const { text, color, value, disabled } = props;
  const [isOpen, setIsOpen] = useState(false);

  const btnClickHandler = () => {
    setIsOpen(true);
  };

  // NOTE:  Temporary Dev
  const title = 'Edit';
  const invoiceCode = 'XM9141';

  return (
    <>
      <button
        type="button"
        className={styles[`container--${color}`]}
        onClick={btnClickHandler}
        value={value}
        disabled={disabled}>
        <p>{text}</p>
      </button>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        modalContent={<ModalSidebar title={title} code={invoiceCode} />}
      />
    </>
  );
}

export default ButtonEditModal;
