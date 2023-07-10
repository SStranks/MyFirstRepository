/* eslint-disable react/prop-types */
import { useState } from 'react';
import IconArrowDown from '../../../../assets/svg/shared/icon-arrow-down.svg';
import DropdownList from './DropdownList';
import styles from './_Dropdown.module.scss';

function Dropdown(props) {
  const { listItems, name, defaultValue } = props;
  const [currentSort, setCurrentSort] = useState(() => {
    if (defaultValue) {
      const regex = new RegExp(defaultValue, 'i');
      const item = listItems.find((el) => el.match(regex));
      return item;
    }
    return listItems[0];
  });
  const [active, setActive] = useState(false);

  const btnClickHandler = () => {
    setActive((prev) => !prev);
  };

  return (
    <label htmlFor="current" className={styles.dropdown}>
      <input
        type="text"
        className={styles.dropdown__current}
        onClick={btnClickHandler}
        id="current"
        value={currentSort}
        readOnly
        name={name}
      />
      <img
        className={`${styles.dropdown__arrow} ${
          active ? styles['dropdown__arrow--active'] : ''
        }`}
        src={IconArrowDown}
        alt=""
      />
      <DropdownList
        listItems={listItems}
        active={active}
        setCurrentSort={setCurrentSort}
        name={name}
      />
    </label>
  );
}

export default Dropdown;
