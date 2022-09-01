import React from 'react';
import PropTypes from 'prop-types';
import styles from './_Checkbox.module.scss';

function Checkbox(props) {
  const { text, id, name } = props;

  return (
    <label className={styles['checkbox-control']} htmlFor={id}>
      <input type="checkbox" id={id} name={name} />
      {text}
    </label>
  );
}

Checkbox.propTypes = {
  text: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
};

Checkbox.defaultProps = {
  text: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
};

export default Checkbox;
