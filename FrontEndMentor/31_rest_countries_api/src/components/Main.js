import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';
import useFlagRender from './useFlagRender';

const Main = (props) => {
  const { countriesList } = props;
  const [activeRegion, setActiveRegion] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [countryIndex, setCountryIndex] = useState([0, 8]);

  const regionFilter = useMemo(
    () =>
      countriesList.filter((country) => {
        if (activeRegion === 'all') return country;
        if (
          activeRegion === 'Polar' &&
          (country.region === 'Polar' ||
            country.region === 'Antarctic' ||
            country.region === 'Antarctic Ocean')
        )
          return country;
        return activeRegion === country.region ? country : false;
      }),
    [activeRegion, countriesList]
  );

  // console.log('main', countriesList);
  // console.log('Africa: ', regionFilter.length);

  // const searchFilter = (() => {
  //   if (searchQuery === '') return regionFilter;
  //   const regex = new RegExp(`^${searchQuery}`, 'i');
  //   return regionFilter.filter((country) =>
  //     regex.test(country.name) ? country : false
  //   );
  // })();

  // console.log(regionFilter);
  // console.log(searchFilter);

  const currentSlice = useMemo(() => {
    // console.log('current slice');
    return regionFilter.slice(countryIndex[0], countryIndex[1]);
  }, [countryIndex, regionFilter]);

  // console.log(currentSlice);

  const { output } = useFlagRender(
    currentSlice,
    activeRegion,
    searchQuery,
    setCountryIndex
  );

  const btnMenuClickHandler = () => {
    const menu = document.querySelector('.dropdown-content');
    menu.classList.toggle('active');
  };

  const btnFilterClickHandler = (option) => {
    setActiveRegion(option);
  };

  const searchHandler = (e) => {
    // function regexEscape(str) {
    //   return str.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
    // }
    // const input = regexEscape(e.target.value);
    if (/^[a-zA-Z]+$/.test(e.target.value) === false) {
      return setSearchQuery((prev) => prev);
    }
    return setSearchQuery(e.target.value);
  };

  return (
    <main>
      <div className="options-panel">
        <div className="search">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="faMagnifyingGlass"
          />
          <input
            type="text"
            value={searchQuery}
            placeholder="Search for a country..."
            onChange={searchHandler}
          />
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
