import React, { useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Grid = (props) => {
  const { filteredCountries, setCountryIndex, loading } = props;
  const observer = useRef();

  const lastCardRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      // TODO:  Need to determine if there are more entries in the filtered collection to load and add check to below:
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          // console.log('callback2');
          setCountryIndex((prev) => [prev[1], prev[1] + 4]);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
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
  filteredCountries: PropTypes.arrayOf(),
  setCountryIndex: PropTypes.func,
  loading: PropTypes.bool,
};
Grid.defaultProps = {
  filteredCountries: null,
  setCountryIndex: null,
  loading: false,
};

export default Grid;
