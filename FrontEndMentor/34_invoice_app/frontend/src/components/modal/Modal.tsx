import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';

type ModalProps = {
  open: boolean;
  modalContent: JSX.Element;
  // onClose: () => void;
};

function Modal(props: ModalProps): JSX.Element | null {
  const { open, modalContent } = props;
  // eslint-disable-next-line unicorn/no-null
  if (!open) return null;

  const domNode = document.querySelector('#modal') as HTMLElement;

  return ReactDOM.createPortal(
    <div className={styles.container}>{modalContent}</div>,
    domNode
  );
}

export default Modal;
