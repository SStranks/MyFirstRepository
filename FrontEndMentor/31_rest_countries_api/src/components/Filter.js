import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const Filter = (props) => {
  const { activeRegion, setActiveRegion } = props;

  const btnMenuClickHandler = () => {
    const menu = document.querySelector('.dropdown-content');
    menu.classList.toggle('active');
  };

  const btnFilterClickHandler = (option) => {
    setActiveRegion(option);
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
  );
};

Filter.propTypes = {
  activeRegion: PropTypes.string,
  setActiveRegion: PropTypes.func,
};
Filter.defaultProps = {
  activeRegion: null,
  setActiveRegion: null,
};

export default Filter;
