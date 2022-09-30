import PropTypes from 'prop-types';
import IconArrowDown from '../../../assets/svg/shared/icon-arrow-down.svg';
import DropdownList from './DropdownList';
import styles from './_Dropdown.module.scss';

function Dropdown(props) {
  const { listItems, active } = props;

  const current = 'Most Upvotes';

  return (
    <div className={styles.dropdown}>
      <DropdownList listItems={listItems} name="sort-by" />
      <div className={styles.dropdown__current}>
        <button type="button">Sort by : {current}</button>
        <img src={IconArrowDown} alt="" />
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.string),
  active: PropTypes.bool,
};

Dropdown.defaultProps = {
  listItems: undefined,
  active: PropTypes.bool,
};

export default Dropdown;
