import React from 'react';
import PropTypes from 'prop-types';

const StatSelector = (props) => {
  const { active, click, id, txt } = props;

  return (
    <span
      id={id}
      className={active ? 'menu__stats' : 'menu__stats active'}
      onClick={click}
      onKeyDown={click}
      role="button"
      tabIndex="0"
    >
      {txt}
    </span>
  );
};

StatSelector.propTypes = {
  active: PropTypes.bool,
  click: PropTypes.func,
  id: PropTypes.string,
  txt: PropTypes.string,
};

StatSelector.defaultProps = {
  active: null,
  click: null,
  id: null,
  txt: null,
};

export default StatSelector;
