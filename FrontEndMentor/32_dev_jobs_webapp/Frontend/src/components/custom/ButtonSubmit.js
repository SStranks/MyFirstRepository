import React from 'react';
import PropTypes from 'prop-types';
import styles from './_Button.module.scss';

function ButtonSubmit(props) {
  const { text, value } = props;

  return (
    <div className={styles['button-custom']}>
      <button type="submit" value={value}>
        {text}
      </button>
    </div>
  );
}

ButtonSubmit.propTypes = {
  text: PropTypes.string,
  value: PropTypes.string,
};

ButtonSubmit.defaultProps = {
  text: PropTypes.string,
  value: PropTypes.string,
};

export default ButtonSubmit;
