import React from 'react';
import PropTypes from 'prop-types';

const Card = React.forwardRef((props, ref) => {
  const { country, population, region, capital, flag } = props;

  const clickHandler = (e) => {
    console.log(e.currentTarget.getAttribute('data-country'));
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className="card-country"
      ref={ref}
      data-country={country}
      onClick={clickHandler}
      onKeyDown={clickHandler}
    >
      <div className="card-flag">
        <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(flag)}`}
          alt=""
        />
      </div>
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
});

Card.propTypes = {
  country: PropTypes.string,
  population: PropTypes.number,
  region: PropTypes.string,
  capital: PropTypes.string,
  flag: PropTypes.string,
};

Card.defaultProps = {
  country: null,
  population: null,
  region: null,
  capital: null,
  flag: null,
};

Card.displayName = 'Card';
export default Card;
