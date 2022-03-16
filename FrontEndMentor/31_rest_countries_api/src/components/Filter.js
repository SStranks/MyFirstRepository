import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Filter = (props) => {
  const { stateFilter, setStateFilter } = props;

  const btnMenuClickHandler = () => {
    const menu = document.querySelector('.dropdown-content');
    menu.classList.toggle('active');
  };

  const btnFilterClickHandler = (option) => {
    setStateFilter((prev) => ({
      ...prev,
      activeRegion: option,
      countryIndex: [0, 8],
    }));
  };

  return (
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
              className={
                stateFilter.activeRegion === 'all' ? 'filter-active' : ''
              }
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
              className={
                stateFilter.activeRegion === 'Africa' ? 'filter-active' : ''
              }
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
              className={
                stateFilter.activeRegion === 'Americas' ? 'filter-active' : ''
              }
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
              className={
                stateFilter.activeRegion === 'Asia' ? 'filter-active' : ''
              }
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
              className={
                stateFilter.activeRegion === 'Europe' ? 'filter-active' : ''
              }
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
              className={
                stateFilter.activeRegion === 'Oceania' ? 'filter-active' : ''
              }
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
              className={
                stateFilter.activeRegion === 'Polar' ? 'filter-active' : ''
              }
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
  );
};

Filter.propTypes = {
  stateFilter: PropTypes.shape(),
  setStateFilter: PropTypes.func,
};
Filter.defaultProps = {
  stateFilter: null,
  setStateFilter: null,
};

export default Filter;
