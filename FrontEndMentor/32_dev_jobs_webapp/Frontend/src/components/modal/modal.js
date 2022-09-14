import React from 'react';
import PropTypes from 'prop-types';
import styles from './_modal.module.scss';
import IconFilter from '../../assets/svg/desktop/icon-location.svg';

function Modal(props) {
  const { onChangeHandler, searchFields, setModalActive } = props;

  const modalClickHandler = () => {
    const body = document.querySelector('body');
    body.classList.remove('modal-open');
    setModalActive(false);
  };

  return (
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
};

Modal.defaultProps = {
  onChangeHandler: PropTypes.func,
  searchFields: PropTypes.shape({
    search: PropTypes.string,
    filter: PropTypes.string,
    time: PropTypes.bool,
  }),
  setModalActive: PropTypes.func,
};

export default Modal;
