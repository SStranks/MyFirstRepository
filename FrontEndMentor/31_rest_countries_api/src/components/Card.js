import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  const { name, population, region, capital } = props;

  return (
    <div>
      <div className="flag" />
      <h2>{name}</h2>
      <span>{population}</span>
      <span>{region}</span>
      <span>{capital}</span>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  population: PropTypes.string,
  region: PropTypes.string,
  capital: PropTypes.string,
};

Card.defaultProps = {
  name: null,
  population: null,
  region: null,
  capital: null,
};

export default Card;
