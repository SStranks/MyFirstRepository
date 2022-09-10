import React from 'react';
import PropTypes from 'prop-types';
import styles from './_Button.module.scss';

function Button(props) {
  const { onClick, text, disabled } = props;

  return (
    <div className={styles['button-custom']}>
      <button type="button" onClick={onClick} disabled={disabled}>
        {text}
      </button>
    </div>
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
