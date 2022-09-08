import React from 'react';
import PropTypes from 'prop-types';
import styles from './_Checkbox.module.scss';

function Checkbox(props) {
  const { text, id, name, value } = props;

  return (
    <div className={styles['checkbox-control']}>
      <input type="checkbox" id={id} name={name} value={value} />
      <label htmlFor={id}>{text}</label>
    </div>
  );
}

Checkbox.propTypes = {
  text: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
};

Checkbox.defaultProps = {
  text: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
};

export default Checkbox;
