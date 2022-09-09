import React from 'react';
import PropTypes from 'prop-types';
import styles from './_Checkbox.module.scss';

function Checkbox(props) {
  const { text, id, name, checked, onChange } = props;

  return (
    <div className={styles['checkbox-control']}>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{text}</label>
    </div>
  );
}

Checkbox.propTypes = {
  text: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.string,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  text: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.string,
  onChange: PropTypes.func,
};

export default Checkbox;
