import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';

import Card from './Card';

const Main = (props) => {
  const { countriesList } = props;
  const [activeRegion, setActiveRegion] = useState('all');

  const countriesCards = countriesList
    .filter((el) => {
      if (activeRegion === 'all') return el;
      return activeRegion === el.region ? el : false;
    })
    .map((country) => (
      <Card
        key={country.name}
        flag={country.flag}
        country={country.name}
        population={country.population}
        region={country.region}
        capital={country.capital}
      />
    ));

  const btnMenuClickHandler = () => {
    const menu = document.querySelector('.dropdown-content');
    menu.classList.toggle('active');
  };

  const btnFilterClickHandler = (option) => {
    setActiveRegion(option);
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
            onClick={btnMenuClickHandler}
          >
            <span>Filter by Region</span>
            <FontAwesomeIcon icon={faAngleDown} className="faDownArrow" />
          </button>
          <div className="dropdown-content">
            <ul>
              <li>
                <button
                  type="button"
                  aria-label="filter show all"
                  className={activeRegion === 'all' ? 'filter-active' : ''}
                  onClick={() => {
                    btnFilterClickHandler('all');
                  }}
                >
                  All
                </button>
              </li>
              <li>
                <button
                  type="button"
                  aria-label="filter by Africa"
                  className={activeRegion === 'Africa' ? 'filter-active' : ''}
                  onClick={() => {
                    btnFilterClickHandler('Africa');
                  }}
                >
                  Africa
                </button>
              </li>
              <li>
                <button
                  type="button"
                  aria-label="filter by Americas"
                  className={activeRegion === 'Americas' ? 'filter-active' : ''}
                  onClick={() => {
                    btnFilterClickHandler('Americas');
                  }}
                >
                  Americas
                </button>
              </li>
              <li>
                <button
                  type="button"
                  aria-label="filter by Asia"
                  className={activeRegion === 'Asia' ? 'filter-active' : ''}
                  onClick={() => {
                    btnFilterClickHandler('Asia');
                  }}
                >
                  Asia
                </button>
              </li>
              <li>
                <button
                  type="button"
                  aria-label="filter by Europe"
                  className={activeRegion === 'Europe' ? 'filter-active' : ''}
                  onClick={() => {
                    btnFilterClickHandler('Europe');
                  }}
                >
                  Europe
                </button>
              </li>
              <li>
                <button
                  type="button"
                  aria-label="filter by Oceania"
                  className={activeRegion === 'Oceania' ? 'filter-active' : ''}
                  onClick={() => {
                    btnFilterClickHandler('Oceania');
                  }}
                >
                  Oceania
                </button>
              </li>
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
