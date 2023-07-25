import PropTypes from 'prop-types';
import React from 'react';
import styles from './_Toggle.module.scss';

function Toggle(props) {
  const { name, id, onClick, ariaLabel } = props;

  return (
    <div className={styles.toggleSlider} aria-label={ariaLabel}>
      <label htmlFor={id}>
        <input type="checkbox" id={id} name={name} onClick={onClick} />
        <span />
      </label>
    </div>
  );
}

Toggle.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string,
};

Toggle.defaultProps = {
  id: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string,
};

export default Toggle;
