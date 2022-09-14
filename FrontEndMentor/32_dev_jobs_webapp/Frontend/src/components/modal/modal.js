import React from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import styles from './_modal.module.scss';
import IconFilter from '../../assets/svg/desktop/icon-location.svg';

function Modal(props) {
  const { onChangeHandler, searchFields, modalActive, setModalActive } = props;

  const modalClickHandler = () => {
    const body = document.querySelector('body');
    body.classList.remove('modal-open');
    setModalActive(false);
  };

  return (
    <CSSTransition
      mountOnEnter
      in={modalActive}
      classNames={styles}
      timeout={{ enter: 550, exit: 450 }}
      unmountOnExit
    >
      <div className={styles.modal} onClick={modalClickHandler} aria-hidden>
        <div className={styles.card}>
          <div>
            <img src={IconFilter} alt="" />
            <input
              type="text"
              name="filter"
              value={searchFields.filter}
              onChange={(e) => onChangeHandler(e)}
              placeholder="Filter by location..."
            />
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}

Modal.propTypes = {
  onChangeHandler: PropTypes.func,
  searchFields: PropTypes.shape({
    search: PropTypes.string,
    filter: PropTypes.string,
    time: PropTypes.bool,
  }),
  setModalActive: PropTypes.func,
  modalActive: PropTypes.bool,
};

Modal.defaultProps = {
  onChangeHandler: PropTypes.func,
  searchFields: PropTypes.shape({
    search: PropTypes.string,
    filter: PropTypes.string,
    time: PropTypes.bool,
  }),
  setModalActive: PropTypes.func,
  modalActive: PropTypes.bool,
};

export default Modal;
