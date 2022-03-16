import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Search = (props) => {
  const { stateFilter, setStateFilter } = props;

  const searchHandler = (e) => {
    if (/^[a-zA-Z]*$/.test(e.target.value) === false) {
      setStateFilter((prev) => ({ ...prev }));
    }
    setStateFilter((prev) => ({
      ...prev,
      countryIndex: [0, 8],
      searchQuery: e.target.value,
    }));
  };

  return (
    <div className="search">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="faMagnifyingGlass" />
      <input
        type="text"
        value={stateFilter.searchQuery}
        placeholder="Search for a country..."
        onChange={searchHandler}
      />
    </div>
  );
};

Search.propTypes = {
  stateFilter: PropTypes.shape(),
  setStateFilter: PropTypes.func,
};
Search.defaultProps = {
  stateFilter: null,
  setStateFilter: null,
};

export default Search;
