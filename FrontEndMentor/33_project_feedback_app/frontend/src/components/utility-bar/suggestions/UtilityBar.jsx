import IconArrowDown from '../../../assets/svg/shared/icon-arrow-down.svg';
import IconSuggestion from '../../../assets/svg/shared/icon-suggestions.svg';
import Dropdown from '../../custom/dropdown/Dropdown';
import styles from './_UtilityBar.module.scss';

function UtilityBar() {
  // Temporary Dev
  const numSuggestions = 6;

  const dropdownList = [
    'Most Upvotes',
    'Least Upvotes',
    'Most Comments',
    'Least Comments',
  ];

  return (
    <div className={styles.bar}>
      <div className={styles.bar__suggestions}>
        <img src={IconSuggestion} alt="" />
        <h3>{numSuggestions} Suggestions</h3>
        <button
          type="button"
          className={styles.bar__sort}
          onClick={clickHandlerDropdown}>
          <p>Sort by : Most Upvotes</p>
          <img src={IconArrowDown} alt="" />
          <Dropdown listItems={dropdownList} />
        </button>
      </div>
      <button type="button" className={styles.btnPlaceholder}>
        + Add Feedback
      </button>
    </div>
  );
}

export default UtilityBar;
