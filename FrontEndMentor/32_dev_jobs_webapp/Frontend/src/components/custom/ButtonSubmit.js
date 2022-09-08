import React from 'react';
import PropTypes from 'prop-types';
import styles from './_Button.module.scss';

function ButtonSubmit(props) {
  const { onClick, text, value } = props;

  return (
    <div className={styles['button-custom']}>
      <button type="submit" onClick={onClick} value={value}>
        {text}
      </button>
    </div>
  );
}

ButtonSubmit.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  value: PropTypes.string,
};

ButtonSubmit.defaultProps = {
  text: PropTypes.string,
  onClick: null,
  value: PropTypes.string,
};

export default ButtonSubmit;
