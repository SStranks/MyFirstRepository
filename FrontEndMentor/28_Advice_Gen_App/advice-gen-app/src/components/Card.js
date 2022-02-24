import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  const { title, quote } = props;
  return (
    <div className="card">
      <h2 className="title">{title}</h2>
      <p className="quote">{quote}</p>
      <img
        className="divider"
        src="assets/pattern-divider-desktop.svg"
        alt=""
      />
      <div className="luminous">
        <img src="assets/icon-dice.svg" alt="dice" />
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  quote: PropTypes.string,
};

Card.defaultProps = {
  title: 'ADVICE #',
  quote: 'Silence is golden.',
};

export default Card;
