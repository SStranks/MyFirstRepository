import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import IconFilter from '../../assets/svg/desktop/icon-location.svg';
import IconSearch from '../../assets/svg/desktop/icon-search.svg';
import IconFilterMobile from '../../assets/svg/mobile/icon-filter.svg';
import ButtonSubmit from '../custom/ButtonSubmit';
import Checkbox from '../custom/Checkbox';
import Modal from '../modal/modal';
import styles from './_Search.module.scss';

function Search(props) {
  const { setJobs, setGridCount } = props;

  const [searchFields, setSearchFields] = useState({
    search: '',
    filter: '',
    time: false,
  });
  const [isSearching, setIsSearching] = useState(false);
  const [modalActive, setModalActive] = useState(false);

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
    const body = document.querySelector('body');
    body.classList.remove('modal-open');
    setModalActive(false);
    setIsSearching(true);
    try {
      const response = await axios({
        method: 'POST',
        url: `http://${process.env.API_HOST}/api/jobs`,
        data: searchFields,
        timeout: 8000,
      });
      // Add timestamp to differentiate IDs for results already rendered and found again by search
      response.data.timeStamp = Math.round(new Date().getTime() / 1000);
      setIsSearching(false);
      setGridCount({ count: 3, loadedAll: false });
      setJobs(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const modalHandler = () => {
    const body = document.querySelector('body');
    body.classList.add('modal-open');
    setModalActive(true);
  };

  return (
    <form className={styles.searchBar} onSubmit={submitHandler}>
      <Modal
        onChangeHandler={onChangeHandler}
        searchFields={searchFields}
        setSearchFields={setSearchFields}
        modalActive={modalActive}
        setModalActive={setModalActive}
        isSearching={isSearching}
        submitHandler={submitHandler}
      />
      <div className={styles.searchBar__compartment}>
        <div className={styles.searchBar__compartment__sub}>
          <img src={IconSearch} alt="" id={styles.inputImgSearch} />
          <input
            type="text"
            name="search"
            value={searchFields.search}
            onChange={(e) => onChangeHandler(e)}
            placeholder="Filter by title, companies, expertise..."
          />
        </div>
      </div>
      <div className={styles.searchBar__compartment}>
        <div className={styles.searchBar__compartment__sub}>
          <img src={IconFilter} id={styles.imgFilterDesktop} alt="" />
          <img
            src={IconFilterMobile}
            id={styles.imgFilterMobile}
            alt=""
            onClick={modalHandler}
            aria-hidden
          />
          <input
            type="text"
            name="filter"
            id="inputFilterLocation"
            value={searchFields.filter}
            onChange={(e) => onChangeHandler(e)}
            placeholder="Filter by location..."
          />
        </div>
      </div>
      <div className={styles.searchBar__compartment}>
        <Checkbox
          text="Full Time Only"
          id={styles.checkboxControl}
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
          modal={false}
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
