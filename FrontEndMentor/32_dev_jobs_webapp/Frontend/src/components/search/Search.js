import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styles from './_Search.module.scss';
import ButtonSubmit from '../custom/ButtonSubmit';
import Checkbox from '../custom/Checkbox';
import IconSearch from '../../assets/svg/desktop/icon-search.svg';
import IconFilter from '../../assets/svg/desktop/icon-location.svg';

function Search(props) {
  const { setJobs, setGridCount } = props;

  const [searchFields, setSearchFields] = useState({
    search: '',
    filter: '',
    time: false,
  });
  const [isSearching, setIsSearching] = useState(false);

  const onChangeHandler = (e) => {
    const check = /^[a-z0-9\s]*$/i.test(e.target.value);
    if (check) {
      setSearchFields((prev) => ({
        ...prev,
        [`${e.target.name}`]: e.target.value,
      }));
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsSearching(true);
    try {
      const response = await axios({
        method: 'POST',
        url: 'http://localhost:4000/api/jobs',
        data: searchFields,
        timeout: 8000,
      });
      setIsSearching(false);
      setGridCount({ count: 3, loadedAll: false });
      setJobs(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className={styles['search-bar']} onSubmit={submitHandler}>
      <div className={styles['search-bar__compartment']}>
        <div className={styles['search-bar__compartment__sub']}>
          <img src={IconSearch} alt="" />
          <input
            type="text"
            name="search"
            value={searchFields.search}
            onChange={(e) => onChangeHandler(e)}
            placeholder="Filter by title, companies, expertise..."
          />
        </div>
      </div>
      <div className={styles['search-bar__compartment']}>
        <div className={styles['search-bar__compartment__sub']}>
          <img src={IconFilter} alt="" />
          <input
            type="text"
            name="filter"
            value={searchFields.filter}
            onChange={(e) => onChangeHandler(e)}
            placeholder="Filter by location..."
          />
        </div>
      </div>
      <div className={styles['search-bar__compartment']}>
        <Checkbox
          text="Full Time Only"
          id="full-time"
          name="time"
          checked={searchFields.time}
          onChange={() =>
            setSearchFields((prev) => ({ ...prev, time: !prev.time }))
          }
        />
        <ButtonSubmit
          value="Submit"
          text={isSearching ? 'Searching' : 'Search'}
          disabled={isSearching}
        />
      </div>
    </form>
  );
}

Search.propTypes = {
  setJobs: PropTypes.func,
  setGridCount: PropTypes.func,
};

Search.defaultProps = {
  setJobs: PropTypes.func,
  setGridCount: PropTypes.func,
};

export default Search;