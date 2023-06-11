import React from 'react';
import PropTypes from 'prop-types';
import styles from './_Button.module.scss';

function Button(props) {
  const { onClick, text, disabled } = props;

  return (
    <button
      type="button"
      className={styles}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{text}</span>
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  text: null,
  onClick: null,
  disabled: null,
};

export default Button;
