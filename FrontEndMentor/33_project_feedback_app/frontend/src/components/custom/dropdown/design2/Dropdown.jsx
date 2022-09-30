import PropTypes from 'prop-types';
import { useState } from 'react';
import IconArrowDown from '../../../../assets/svg/shared/icon-arrow-down.svg';
import DropdownList from './DropdownList';
import styles from './_Dropdown.module.scss';

function Dropdown(props) {
  const { listItems } = props;
  const [currentSort, setCurrentSort] = useState(listItems[0]);
  const [active, setActive] = useState(false);

  const btnClickHandler = () => {
    setActive((prev) => !prev);
  };

  return (
    <label htmlFor="current" className={styles.dropdown}>
      <input
        className={styles.dropdown__current}
        onClick={btnClickHandler}
        type="text"
        id="current"
        value={currentSort}
        readOnly
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
        name="sort-by"
        active={active}
        setCurrentSort={setCurrentSort}
      />
    </label>
  );
}

Dropdown.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.string),
};

Dropdown.defaultProps = {
  listItems: undefined,
};

export default Dropdown;
