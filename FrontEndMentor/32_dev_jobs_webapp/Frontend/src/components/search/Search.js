import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styles from './_Search.module.scss';
import ButtonSubmit from '../custom/ButtonSubmit';
import Checkbox from '../custom/Checkbox';
import IconSearch from '../../assets/svg/desktop/icon-search.svg';
import IconFilter from '../../assets/svg/desktop/icon-location.svg';

function Search(props) {
  const { setJobs } = props;

  const submitHandler = async (e) => {
    e.preventDefault();
    const searchForm = document.forms['form-search'];
    const searchField = searchForm.search.value;
    const filterField = searchForm.filter.value;
    const timeField = searchForm['full-time'].checked;

    try {
      const response = await axios({
        method: 'POST',
        url: 'http://localhost:4000/api/jobs/search',
        data: {
          searchField,
          filterField,
          timeField,
        },
        timeout: 2000,
      });
      setJobs(response.data);
    } catch (err) {
      console.log(err);
    }
    console.log('FORM SUBMITTED');
  };

  return (
    <form
      className={styles['search-bar']}
      name="form-search"
      onSubmit={submitHandler}
    >
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
        <Checkbox
          text="Full Time Only"
          id="full-time"
          name="full-time"
          value="true"
        />
        <ButtonSubmit value="Submit" text="Search" />
      </div>
    </form>
  );
}

Search.propTypes = {
  setJobs: PropTypes.func,
};

Search.defaultProps = {
  setJobs: PropTypes.func,
};

export default Search;
