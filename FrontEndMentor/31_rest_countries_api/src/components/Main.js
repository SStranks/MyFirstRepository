import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';

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
    <main>
      <div className="options-panel">
        <div className="search">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="faMagnifyingGlass"
          />
          <input type="text" placeholder="Search for a country..." />
        </div>
        <button type="button" aria-label="filter by region">
          <span>Filter by Region</span>
          <FontAwesomeIcon icon={faAngleDown} className="faDownArrow" />
        </button>
      </div>
      <div className="grid">{countriesCards}</div>
    </main>
  );
};

Main.propTypes = {
  countriesList: PropTypes.arrayOf(PropTypes.shape({})),
};

Main.defaultProps = {
  countriesList: null,
};

export default Main;
