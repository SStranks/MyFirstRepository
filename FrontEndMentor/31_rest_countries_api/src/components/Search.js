import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Search = (props) => {
  const { searchQuery, setSearchQuery } = props;

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
    <div className="search">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="faMagnifyingGlass" />
      <input
        type="text"
        value={searchQuery}
        placeholder="Search for a country..."
        onChange={searchHandler}
      />
    </div>
  );
};

Search.propTypes = {
  searchQuery: PropTypes.string,
  setSearchQuery: PropTypes.func,
};
Search.defaultProps = {
  searchQuery: null,
  setSearchQuery: null,
};

export default Search;
