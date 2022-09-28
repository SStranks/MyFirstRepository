import PropTypes from 'prop-types';
import IconCheck from '../../../assets/svg/shared/icon-check.svg';
import styles from './_Dropdown.module.scss';

function Dropdown(props) {
  const { listItems } = props;

  const renderListItems = listItems.map((item, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <li key={i}>
      <p>{item}</p>
      <img src={IconCheck} alt="" />
    </li>
  ));

  return (
    <div className={styles.dropdown}>
      <ul className={styles.dropdown__ul}>{renderListItems}</ul>
    </div>
  );
}

Dropdown.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.string),
};

Dropdown.defaultProps = {
  listItems: undefined,
};

export default Dropdown;
