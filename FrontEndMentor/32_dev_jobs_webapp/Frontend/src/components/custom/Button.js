import React from 'react';
import PropTypes from 'prop-types';
import styles from './_Button.module.scss';

function Button(props) {
  const { onClick, text } = props;

  return (
    <div className={styles['button-custom']}>
      <button type="button" onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  text: null,
  onClick: null,
};

export default Button;
