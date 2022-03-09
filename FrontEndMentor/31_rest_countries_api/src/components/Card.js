import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  const { country, population, region, capital } = props;

  return (
    <div>
      <div className="flag" />
      <h2>{country}</h2>
      <span>{population}</span>
      <span>{region}</span>
      <span>{capital}</span>
    </div>
  );
};

Card.propTypes = {
  country: PropTypes.string,
  population: PropTypes.number,
  region: PropTypes.string,
  capital: PropTypes.string,
};

Card.defaultProps = {
  country: null,
  population: null,
  region: null,
  capital: null,
};

export default Card;
