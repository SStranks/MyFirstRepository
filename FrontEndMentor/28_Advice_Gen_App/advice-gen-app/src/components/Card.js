import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  const { title, quote, click } = props;
  return (
    <div className="card">
      <h2 className="title">ADVICE #{title}</h2>
      <p className="quote">{quote}</p>
      <img
        className="divider"
        src="assets/pattern-divider-desktop.svg"
        alt=""
      />
      <div
        className="luminous"
        onClick={click}
        onKeyDown={click}
        role="button"
        tabIndex="0"
      >
        <img className="dice" src="assets/icon-dice.svg" alt="dice" />
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.number,
  quote: PropTypes.string,
  click: PropTypes.func,
};

Card.defaultProps = {
  title: 'ADVICE #',
  quote: null,
  click: null,
};

export default Card;
