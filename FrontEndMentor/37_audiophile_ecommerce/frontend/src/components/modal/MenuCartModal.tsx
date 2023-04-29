import CartSummaryCard from '#Components/checkout/CartSummaryCard';
import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import ReactPortal from './ReactPortal';
import styles from './_MenuCartModal.module.scss';

type ElemProps = {
  modalOpen: boolean;
  modalClose: React.Dispatch<React.SetStateAction<boolean>>;
};

function MenuCartModal(props: ElemProps): JSX.Element {
  const { modalOpen, modalClose } = props;
  const nodeRef = useRef(null);

  console.log(modalClose);

  return (
    <ReactPortal wrapperId="modal">
      <CSSTransition
        in={modalOpen}
        timeout={{ exit: 800 }}
        unmountOnExit
        classNames="orderCompleteModal"
        nodeRef={nodeRef}>
        <div className={styles.container} ref={nodeRef}>
          <CartSummaryCard
            itemsQuantity={3}
            totalAmount={5396}
            closeCartModal={modalClose}
          />
        </div>
      </CSSTransition>
    </ReactPortal>
  );
}

export default MenuCartModal;
