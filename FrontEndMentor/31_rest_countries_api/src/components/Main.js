import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';
import useFlagRender from './useFlagRender';
import Card from './Card';

const testArr = [
  {
    name: 'Afghanistan',
    flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
    population: '1',
    region: 'sss',
    capital: 'ddd',
  },
  {
    name: 'Albania',
    flag: 'https://flagcdn.com/al.svg',
    population: '2',
    region: 'fff',
    capital: 'sss',
  },
];

const Main = (props) => {
  const { countriesList } = props;
  const [activeRegion, setActiveRegion] = useState('all');

  const countriesCards = useMemo(
    () =>
      countriesList
        .filter((el) => {
          if (activeRegion === 'all') return el;
          if (
            (activeRegion === 'Polar' && el.region === 'Polar') ||
            el.region === 'Antarctic' ||
            el.region === 'Antarctic Ocean'
          )
            return el;
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
        )),
    [countriesList, activeRegion]
  );

  const { output } = useFlagRender(testArr, 'all');
  console.log(output);

  // TODO: .
  // 1. Load first 8 countries
  // 2. Load 4 more when scroll reveals last country loaded so far
  // * Need state for 'loading' of current batch
  // * Need ref to store the last country of the currently visible
  // * Need intersection observer on the last country visible; if visible && loading finished, load next batch
  // * Function; batch load (default 4 items); promise.all --> 'loading' to false
  // * If an individual image promise fails after X seconds, load the skeleton flag instead
  // * Create custom hook for the processing of image loading and constructing the JSX return array.

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
              <li>
                <button
                  type="button"
                  aria-label="filter by Polar"
                  className={activeRegion === 'Polar' ? 'filter-active' : ''}
                  onClick={() => {
                    btnFilterClickHandler('Polar');
                  }}
                >
                  Polar
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid">{output}</div>
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
