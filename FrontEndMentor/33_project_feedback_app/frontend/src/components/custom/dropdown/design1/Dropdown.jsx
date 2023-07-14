/* eslint-disable react/prop-types */
import { useState } from 'react';
import IconArrowDown from '../../../../assets/svg/shared/icon-arrow-down.svg';
import DropdownList from './DropdownList';
import styles from './_Dropdown.module.scss';

function Dropdown(props) {
  const { listItems, dispatch } = props;
  const [currentSort, setCurrentSort] = useState(listItems[0]);
  const [active, setActive] = useState(false);

  const btnClickHandler = () => {
    setActive((prev) => !prev);
  };

  const dropdownClickHandler = (dropdownOption) => {
    setCurrentSort(dropdownOption);
    dispatch({ type: dropdownOption });
  };

  return (
    <div className={styles.dropdown}>
      <button
        className={styles.dropdown__current}
        onClick={btnClickHandler}
        type="button">
        <p className={styles.dropdown__sortBy}>
          Sort by :{' '}
          <span className={styles.dropdown__sortedBy}>{currentSort}</span>
        </p>
        <img
          className={`${styles.dropdown__arrow} ${
            active ? styles['dropdown__arrow--active'] : ''
          }`}
          src={IconArrowDown}
          alt=""
        />
      </button>
      <DropdownList
        listItems={listItems}
        name="sort-by"
        active={active}
        onClickSelectSort={dropdownClickHandler}
      />
    </div>
  );
}

export default Dropdown;
