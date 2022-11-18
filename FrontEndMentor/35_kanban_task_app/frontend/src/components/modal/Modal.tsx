import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styles from './_Modal.module.scss';

const domNode = document.querySelector('#modal') as HTMLElement;

type ModalProps = {
  modalIsOpen: boolean;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalContent: JSX.Element;
};

function Modal(props: ModalProps): JSX.Element | null {
  const { modalIsOpen, setModalIsOpen, modalContent } = props;
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { current } = modalRef;
    // On click of modal background; close modal.
    const clickHandler = (e: MouseEvent) => {
      console.log(e.target, current);
      return e.target === current && setModalIsOpen(false);
    };
    // On press of ESC key; close modal.
    const keyHandler = (e: KeyboardEvent) =>
      (e.key === 'Escape' || e.key === 'Esc') && setModalIsOpen(false);

    if (modalIsOpen) {
      current?.addEventListener('click', clickHandler);
      document?.addEventListener('keyup', keyHandler);
      // Disable TAB cycling on App
      // document.querySelector('#root')?.setAttribute('inert', 'true');
    }

    return () => {
      current?.removeEventListener('click', clickHandler);
      current?.removeEventListener('keyup', keyHandler);
      // document.querySelector('#root')?.removeAttribute('inert');
    };
  }, [modalIsOpen, setModalIsOpen]);

  // eslint-disable-next-line unicorn/no-null
  if (!modalIsOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.modal}>{modalContent}</div>,
    domNode
  );
}

export default Modal;
