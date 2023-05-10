import OrderCompleteCard from '#Components/checkout/OrderCompleteCard';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import ReactPortal from './ReactPortal';

import styles from './_OrderCompleteModal.module.scss';

type ElemProps = {
  modalOpen: boolean;
  modalClose: () => void;
};

function OrderCompleteModal(props: ElemProps): JSX.Element {
  const { modalOpen, modalClose } = props;
  const navigate = useNavigate();
  const nodeRef = useRef(null);

  return (
    <ReactPortal wrapperId="modal">
      <CSSTransition
        in={modalOpen}
        timeout={{ exit: 800 }}
        onExited={() => navigate('/')}
        unmountOnExit
        classNames={{
          appear: 'modal-appear',
          enterDone: 'modal-enter-done',
          exit: 'modal-exit',
          exitActive: 'modal-exit-active',
        }}
        nodeRef={nodeRef}>
        <div className={styles.container} ref={nodeRef}>
          <OrderCompleteCard modalClose={modalClose} />
        </div>
      </CSSTransition>
    </ReactPortal>
  );
}

export default OrderCompleteModal;
