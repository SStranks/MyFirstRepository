import React from 'react';
import styles from './_Search.module.scss';
import Button from '../custom/Button';
import Checkbox from '../custom/Checkbox';
import IconSearch from '../../assets/svg/desktop/icon-search.svg';
import IconFilter from '../../assets/svg/desktop/icon-location.svg';

function Search() {
  return (
    <div className={styles['search-bar']}>
      <div className={styles['search-bar__compartment']}>
        <div className={styles['search-bar__compartment__sub']}>
          <img src={IconSearch} alt="" />
          <input
            type="text"
            name="search"
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
            placeholder="Filter by location..."
          />
        </div>
      </div>
      <div className={styles['search-bar__compartment']}>
        <Checkbox text="Full Time Only" id="full-time2" name="full-time2" />
        <Button type="button" text="Search" />
      </div>
    </div>
  );
}

export default Search;
