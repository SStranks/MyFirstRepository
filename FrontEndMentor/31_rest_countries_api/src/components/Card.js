import React from 'react';
import PropTypes from 'prop-types';

const Card = React.forwardRef((props, ref) => {
  const { country, setCountrySelect, setModal } = props;

  const clickHandler = () => {
    setModal(true);
    setCountrySelect(country);
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className="card-country"
      ref={ref}
      data-country={country.name}
      onClick={clickHandler}
      onKeyDown={clickHandler}
    >
      <div className="card-flag">
        <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(country.flag)}`}
          alt=""
        />
      </div>
      <div className="card-info">
        <h2>{country.name}</h2>
        <p>
          Population: <span>{country.population.toLocaleString()}</span>
        </p>
        <p>
          Region: <span>{country.region}</span>
        </p>
        <p>
          Capital: <span>{country.capital}</span>
        </p>
      </div>
    </div>
  );
});

Card.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string,
    flag: PropTypes.string,
    population: PropTypes.number,
    region: PropTypes.string,
    capital: PropTypes.string,
  }),
  setCountrySelect: PropTypes.func,
  setModal: PropTypes.func,
};

Card.defaultProps = {
  country: null,
  setCountrySelect: null,
  setModal: null,
};

Card.displayName = 'Card';
export default Card;
