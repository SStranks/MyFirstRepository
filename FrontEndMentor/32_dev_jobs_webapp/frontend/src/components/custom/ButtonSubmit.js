import PropTypes from 'prop-types';
import React from 'react';
import IconSearch from '../../assets/svg/desktop/icon-search.svg';
import styles from './_Button.module.scss';

function ButtonSubmit(props) {
  const { text, value, disabled, modal } = props;

  return (
    <button type="submit" className={styles} value={value} disabled={disabled}>
      <span className={modal ? null : styles.btnText}>{text}</span>
      <img
        className={modal ? styles.btnIconNone : styles.btnIcon}
        src={IconSearch}
        alt=""
      />
    </button>
  );
}

ButtonSubmit.propTypes = {
  text: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  modal: PropTypes.bool,
};

ButtonSubmit.defaultProps = {
  text: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  modal: PropTypes.bool,
};

export default ButtonSubmit;
