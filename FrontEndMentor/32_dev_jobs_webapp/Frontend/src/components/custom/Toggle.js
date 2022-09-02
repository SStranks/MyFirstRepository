import React from 'react';
import PropTypes from 'prop-types';
import styles from './_Toggle.module.scss';

function Toggle(props) {
  const { name, id } = props;

  return (
    <div className={styles['toggle-slider']}>
      <label htmlFor={id}>
        <input type="checkbox" id={id} name={name} />
        <span />
      </label>
    </div>
  );
}

Toggle.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
};

Toggle.defaultProps = {
  id: PropTypes.string,
  name: PropTypes.string,
};

export default Toggle;
