import IconArrowDown from '../../assets/svg/shared/icon-arrow-down.svg';
import IconSuggestion from '../../assets/svg/shared/icon-suggestions.svg';
import styles from './_UtilityBar.module.scss';

function UtilityBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.bar__suggestions}>
        <img src={IconSuggestion} alt="" />
        <h3>6 Suggestions</h3>
        <div className={styles.bar__suggestions__sort}>
          <p>Sort by : Most Upvotes</p>
          <img src={IconArrowDown} alt="" />
        </div>
      </div>
      <button type="button" className={styles.btnPlaceholder}>
        + Add Feedback
      </button>
    </div>
  );
}

export default UtilityBar;
