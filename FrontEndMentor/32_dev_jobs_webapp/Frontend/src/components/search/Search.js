import React from 'react';
import styles from './_Search.module.scss';
import ButtonSubmit from '../custom/ButtonSubmit';
import Checkbox from '../custom/Checkbox';
import IconSearch from '../../assets/svg/desktop/icon-search.svg';
import IconFilter from '../../assets/svg/desktop/icon-location.svg';

function Search() {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log('FORM SUBMITTED');
  };

  return (
    <form className={styles['search-bar']} onSubmit={submitHandler}>
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
        <ButtonSubmit value="Submit" text="Search" />
      </div>
    </form>
  );
}

export default Search;
