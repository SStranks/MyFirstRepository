import React from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import styles from './_modal.module.scss';
import Checkbox from '../custom/Checkbox';
import ButtonSubmit from '../custom/ButtonSubmit';
import IconFilter from '../../assets/svg/desktop/icon-location.svg';

function Modal(props) {
  const {
    onChangeHandler,
    searchFields,
    setSearchFields,
    modalActive,
    setModalActive,
    isSearching,
  } = props;

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
          <div className={styles.compartment}>
            <img src={IconFilter} alt="" />
            <input
              type="text"
              name="filter"
              value={searchFields.filter}
              onChange={(e) => onChangeHandler(e)}
              placeholder="Filter by location..."
            />
          </div>
          <div className={styles.compartment}>
            <Checkbox
              text="Full Time Only"
              id={styles['checkbox-control-mob']}
              name="time"
              checked={searchFields.time}
              onChange={() =>
                setSearchFields((prev) => ({ ...prev, time: !prev.time }))
              }
            />
            <ButtonSubmit
              value="Submit"
              text={isSearching ? 'Searching' : 'Search'}
              disabled={isSearching}
              modal
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
  setSearchFields: PropTypes.func,
  setModalActive: PropTypes.func,
  modalActive: PropTypes.bool,
  isSearching: PropTypes.bool,
};

Modal.defaultProps = {
  onChangeHandler: PropTypes.func,
  searchFields: PropTypes.shape({
    search: PropTypes.string,
    filter: PropTypes.string,
    time: PropTypes.bool,
  }),
  setSearchFields: PropTypes.func,
  setModalActive: PropTypes.func,
  modalActive: PropTypes.bool,
  isSearching: PropTypes.bool,
};

export default Modal;
