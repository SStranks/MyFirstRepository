import {
  PropsWithChildren,
  createContext,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import styles from './Modal.module.scss';
import useScrollLock from './useScrollLock';

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
  useScrollLock(isModalOpen);

  useEffect(() => {
    const { current } = modalRef;

    // On click of modal background; close modal.
    const clickHandler = (e: MouseEvent) => {
      return e.target === current && setIsModalOpen(false);
    };

    // On press of ESC key; close modal.
    const keyHandler = (e: KeyboardEvent) => {
      const { activeElement } = document;
      const inputs = new Set([
        'a',
        'area',
        'button',
        'details',
        'input',
        'iframe',
        'select',
        'textarea',
      ]);
      // Abort if an input has focus
      if (activeElement && inputs.has(activeElement?.tagName.toLowerCase())) {
        return null;
      }
      return (e.key === 'Escape' || e.key === 'Esc') && setIsModalOpen(false);
    };

    if (isModalOpen) {
      current?.addEventListener('click', clickHandler);
      document?.addEventListener('keyup', keyHandler);
      // Disable TAB cycling on App
      document.querySelector('#root')?.setAttribute('inert', 'true');
    }

    return () => {
      current?.removeEventListener('click', clickHandler);
      document?.removeEventListener('keyup', keyHandler);
      document.querySelector('#root')?.removeAttribute('inert');
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
