import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';

type ModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalContent: JSX.Element;
};

function Modal(props: ModalProps): JSX.Element | null {
  const { isOpen, setIsOpen, modalContent } = props;
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { current } = modalRef;
    // On click of modal background; close modal.
    const clickHandler = (e: MouseEvent) => {
      console.log(e.target, current);
      return e.target === current && setIsOpen(false);
    };
    // On press of ESC key; close modal.
    const keyHandler = (e: KeyboardEvent) =>
      (e.key === 'Escape' || e.key === 'Esc') && setIsOpen(false);

    if (isOpen) {
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
  }, [isOpen, setIsOpen]);

  if (!isOpen) return null;

  const domNode = document.querySelector('#modal') as HTMLElement;

  return ReactDOM.createPortal(
    <div className={styles.container} ref={modalRef}>
      {modalContent}
    </div>,
    domNode
  );
}

export default Modal;
