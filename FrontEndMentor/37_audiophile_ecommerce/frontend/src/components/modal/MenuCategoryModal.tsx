import ProductExampleShopList from '#Components/products/ProductExampleShopList';
import useModalClose from '#Hooks/useModalClose';
import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import ReactPortal from './ReactPortal';
import styles from './_MenuCategoryModal.module.scss';

const scrollUnlock = () => {
  document.body.style.overflow = 'unset';
};

type ElemProps = {
  modalOpen: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalButtonRef: React.Ref<HTMLButtonElement>;
};

function MenuCategoryModal(props: ElemProps): JSX.Element {
  const { modalOpen, setModal, modalButtonRef } = props;
  const nodeRef = useRef(null);
  const modalContentsRef = useRef<HTMLDivElement>(null);
  useModalClose(setModal, modalContentsRef, modalButtonRef); // Handles ESC and Mouse Click

  return (
    <ReactPortal wrapperId="modal">
      <CSSTransition
        in={modalOpen}
        onExit={scrollUnlock}
        timeout={{ exit: 800 }}
        unmountOnExit
        classNames="orderCompleteModal"
        nodeRef={nodeRef}>
        <div className={styles.container} ref={nodeRef}>
          <div className={styles.elementContainer} ref={modalContentsRef}>
            <ProductExampleShopList />
          </div>
        </div>
      </CSSTransition>
    </ReactPortal>
  );
}

export default MenuCategoryModal;
