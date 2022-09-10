import React from 'react';
import PropTypes from 'prop-types';
import styles from './_Button.module.scss';

function ButtonSubmit(props) {
  const { text, value, disabled } = props;

  return (
    <div className={styles['button-custom']}>
      <button type="submit" value={value} disabled={disabled}>
        {text}
      </button>
    </div>
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
