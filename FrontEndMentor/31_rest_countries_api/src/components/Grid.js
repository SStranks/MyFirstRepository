import React, { useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Grid = (props) => {
  const { filteredCountries, countryIndex, setCountryIndex, loading } = props;
  const observer = useRef();

  const lastCardRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (
          entries[0].isIntersecting &&
          filteredCountries.length >= countryIndex[1]
        ) {
          setCountryIndex((prev) => [prev[1], prev[1] + 4]);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, filteredCountries]
  );

  const countryCards = filteredCountries.map((country, i) => {
    return (
      <Card
        key={country.name}
        ref={filteredCountries.length === i + 1 ? lastCardRef : null}
        flag={country.flag}
        country={country.name}
        population={country.population}
        region={country.region}
        capital={country.capital}
      />
    );
  });

  return <div className="grid">{countryCards}</div>;
};

// TODO:  Add in proper proptypes
Grid.propTypes = {
  filteredCountries: PropTypes.arrayOf(PropTypes.shape({})),
  countryIndex: PropTypes.arrayOf(PropTypes.number),
  setCountryIndex: PropTypes.func,
  loading: PropTypes.bool,
};
Grid.defaultProps = {
  filteredCountries: [],
  countryIndex: null,
  setCountryIndex: null,
  loading: false,
};

export default Grid;
