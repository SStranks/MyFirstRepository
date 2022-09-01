import React from 'react';
import PropTypes, { func, string } from 'prop-types';
import './Button.scss';

// function Button() {
//   return <button type="button">Test</button>;
// }

function Button(props) {
  const { onClick, children } = props;

  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: string,
  onClick: func,
};

export default Button;
