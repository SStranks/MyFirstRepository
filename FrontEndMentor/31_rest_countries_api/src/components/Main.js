import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Main = (props) => {
  const { countriesList } = props;
  const countriesCards = countriesList.map((country) => (
    <Card
      key={country.name}
      flag={country.flag}
      country={country.name}
      population={country.population}
      region={country.region}
      capital={country.capital}
    />
  ));

  return (
    <>
      <div className="options-panel">
        <input type="text" />
        <button type="button" aria-label="filter by region">
          <span>Filter by Region</span>
          <i className="arrow down" />
        </button>
      </div>
      <div className="grid">{countriesCards}</div>
    </>
  );
};

Main.propTypes = {
  countriesList: PropTypes.arrayOf(PropTypes.shape({})),
};

Main.defaultProps = {
  countriesList: null,
};

export default Main;
