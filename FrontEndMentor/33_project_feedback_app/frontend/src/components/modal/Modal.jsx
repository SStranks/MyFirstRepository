import PropTypes from 'prop-types';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import IconArrowBack from '../../assets/svg/shared/icon-arrow-left.svg';
import styles from './_Modal.module.scss';

function Modal(props) {
  const { children, handleClose, modalOpen } = props;

  useEffect(() => {
    // Toggle Overflow on active page
    if (!modalOpen) document.body.classList.remove('modal-open');
    if (modalOpen) document.body.classList.add('modal-open');

    // Escape key for Modal
    const closeOnEscapeKey = (e) =>
      e.key === 'Escape' ? handleClose() : undefined;
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [handleClose, modalOpen]);

  // eslint-disable-next-line unicorn/no-null
  if (!modalOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.container}>
      <div className={styles.modal}>
        <nav className={styles.nav}>
          <img src={IconArrowBack} alt="" />
          <Link to="/" onClick={() => handleClose()}>
            <p>Go Back</p>
          </Link>
        </nav>
        {children}
      </div>
    </div>,
    document.querySelector('#modal')
  );
}

Modal.propTypes = {
  children: PropTypes.element,
  handleClose: PropTypes.func,
  modalOpen: PropTypes.bool,
};

Modal.defaultProps = {
  children: undefined,
  handleClose: undefined,
  modalOpen: undefined,
};

export default Modal;
