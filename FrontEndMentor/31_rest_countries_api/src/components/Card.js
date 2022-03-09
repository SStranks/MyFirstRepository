import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  const { country, population, region, capital } = props;

  return (
    <div className="card-country">
      <div className="card-flag" />
      <div className="card-info">
        <h2>{country}</h2>
        <p>
          Population: <span>{population.toLocaleString()}</span>
        </p>
        <p>
          Region: <span>{region}</span>
        </p>
        <p>
          Capital: <span>{capital}</span>
        </p>
      </div>
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
