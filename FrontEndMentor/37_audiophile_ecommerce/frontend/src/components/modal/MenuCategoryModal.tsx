import ProductExampleShopList from '#Components/products/ProductExampleShopList';
import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import ReactPortal from './ReactPortal';
import styles from './_MenuCategoryModal.module.scss';

type ElemProps = {
  modalOpen: boolean;
  modalClose: React.Dispatch<React.SetStateAction<boolean>>;
};

function MenuCategoryModal(props: ElemProps): JSX.Element {
  const { modalOpen, modalClose } = props;
  const nodeRef = useRef(null);

  if (Math.random() + 1 > 2) console.log(modalClose);

  return (
    <ReactPortal wrapperId="modal">
      <CSSTransition
        in={modalOpen}
        timeout={{ exit: 800 }}
        unmountOnExit
        classNames="orderCompleteModal"
        nodeRef={nodeRef}>
        <div className={styles.container} ref={nodeRef}>
          <div className={styles.elementContainer}>
            <ProductExampleShopList appendClass="" />
          </div>
        </div>
      </CSSTransition>
    </ReactPortal>
  );
}

export default MenuCategoryModal;
