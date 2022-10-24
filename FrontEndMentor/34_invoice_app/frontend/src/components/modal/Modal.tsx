import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';

type ModalProps = {
  open: boolean;
  children?: React.ReactNode;
  onClose: () => void;
};

function Modal(props: ModalProps): JSX.Element | undefined {
  const { open, children, onClose } = props;
  if (!open) return undefined;

  const domNode = document.querySelector('#modal') as HTMLElement;

  return ReactDOM.createPortal(
    <div className={styles.container} onClick={onClose}>
      {children}
    </div>,
    domNode
  );
}

export default Modal;
