import React from 'react';
import PropTypes from 'prop-types';
import styles from './_Button.module.scss';
import IconSearch from '../../assets/svg/desktop/icon-search.svg';

function ButtonSubmit(props) {
  const { text, value, disabled } = props;

  return (
    <button type="submit" className={styles} value={value} disabled={disabled}>
      <span>{text}</span>
      <img src={IconSearch} alt="" />
    </button>
  );
}

ButtonSubmit.propTypes = {
  text: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
};

ButtonSubmit.defaultProps = {
  text: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
};

export default ButtonSubmit;
