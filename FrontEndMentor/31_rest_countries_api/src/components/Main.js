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

  const btnClickHandler = () => {
    const menu = document.querySelector('.dropdown-content');
    menu.classList.toggle('active');
  };

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
        <div className="dropdown">
          <button
            type="button"
            aria-label="filter by region"
            onClick={btnClickHandler}
          >
            <span>Filter by Region</span>
            <FontAwesomeIcon icon={faAngleDown} className="faDownArrow" />
          </button>
          <div className="dropdown-content">
            <ul>
              <li>Africa</li>
              <li>Americas</li>
              <li>Asia</li>
              <li>Europe</li>
              <li>Oceania</li>
            </ul>
          </div>
        </div>
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
