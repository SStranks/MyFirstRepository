import CartSummaryCard from '#Components/checkout/CartSummaryCard';
import useModalClose from '#Hooks/useModalClose';
import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import ReactPortal from './ReactPortal';
import styles from './_MenuCartModal.module.scss';

type ElemProps = {
  modalOpen: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

function MenuCartModal(props: ElemProps): JSX.Element {
  const { modalOpen, setModal } = props;
  const nodeRef = useRef<HTMLDivElement>(null);
  const modalContentsRef = useRef<HTMLDivElement>(null);
  useModalClose(setModal, modalContentsRef); // Handles ESC and Mouse Click

  return (
    <ReactPortal wrapperId="modal">
      <CSSTransition
        in={modalOpen}
        timeout={{ exit: 800 }}
        unmountOnExit
        classNames="orderCompleteModal"
        nodeRef={nodeRef}>
        <div className={styles.container} ref={nodeRef}>
          <CartSummaryCard closeCartModal={setModal} fRef={modalContentsRef} />
        </div>
      </CSSTransition>
    </ReactPortal>
  );
}

export default MenuCartModal;
