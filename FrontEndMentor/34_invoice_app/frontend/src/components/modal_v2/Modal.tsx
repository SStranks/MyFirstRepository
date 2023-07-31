import {
  PropsWithChildren,
  createContext,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import styles from './Modal.module.scss';

interface IContext {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalContext = createContext<IContext | undefined>(undefined);

function Modal(props: PropsWithChildren<IProps>): JSX.Element | null {
  const { isModalOpen, setIsModalOpen, children } = props;
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { current } = modalRef;
    // On click of modal background; close modal.
    const clickHandler = (e: MouseEvent) => {
      return e.target === current && setIsModalOpen(false);
    };
    // On press of ESC key; close modal.
    const keyHandler = (e: KeyboardEvent) =>
      (e.key === 'Escape' || e.key === 'Esc') && setIsModalOpen(false);

    if (isModalOpen) {
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
  }, [isModalOpen, setIsModalOpen]);

  const contextValue = useMemo(() => {
    return { setIsModalOpen };
  }, [setIsModalOpen]);

  if (!isModalOpen) return null;

  return (
    <ModalContext.Provider value={contextValue}>
      <div className={styles.container} ref={modalRef}>
        {children}
      </div>
    </ModalContext.Provider>
  );
}

export default Modal;
