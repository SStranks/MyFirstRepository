import ModalConfirmDelete from '#Components/modal/confirm-deletion/ModalConfirmDelete';
import Modal from '#Components/modal/Modal';
import { useState } from 'react';

import styles from './ButtonDeleteModal.module.scss';

type ButtonProps = {
  text: string;
  color: string;
  value: string;
  disabled: boolean;
};

function ButtonDeleteModal(props: ButtonProps): JSX.Element {
  const { text, color, value, disabled } = props;
  const [isOpen, setIsOpen] = useState(false);

  const btnClickHandler = () => {
    setIsOpen(true);
  };

  // const modalToggle = () => {
  //   if (isOpen) setIsOpen(false);

  // }

  // Temporary Dev
  const invoiceCodeTmp = 'XM9141';

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
        modalContent={
          <ModalConfirmDelete
            invoiceCode={invoiceCodeTmp}
            modalStateHandler={setIsOpen}
          />
        }
      />
    </>
  );
}

export default ButtonDeleteModal;
