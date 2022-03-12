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
    [activeRegion]
  );

  // const searchFilter = useMemo(() => {
  //   if (searchQuery === '') return regionFilter;
  //   function regexEscape(str) {
  //     return str.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  //   }
  //   const input = regexEscape(searchQuery);
  //   const regex = new RegExp(`^${input}`, 'i');
  //   console.log(searchQuery, regex);
  //   return regionFilter.filter((country) => {
  //     return regex.test(country.name) ? country : false;
  //   });
  // }, [searchQuery]);

  // console.log(searchFilter);

  const currentSlice = useMemo(() => {
    // if () return
    return regionFilter.slice(countryIndex[0], countryIndex[1]);
  }, [countryIndex, regionFilter]);

  // console.log(currentSlice);

  const { output } = useFlagRender(
    currentSlice,
    activeRegion,
    searchQuery,
    setCountryIndex
  );

  // console.log(output);

  const btnMenuClickHandler = () => {
    const menu = document.querySelector('.dropdown-content');
    menu.classList.toggle('active');
  };

  const btnFilterClickHandler = (option) => {
    setCountryIndex([0, 8]);
    setActiveRegion(option);
  };

  const searchHandler = (e) => {
    setSearchQuery(e.target.value);
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
