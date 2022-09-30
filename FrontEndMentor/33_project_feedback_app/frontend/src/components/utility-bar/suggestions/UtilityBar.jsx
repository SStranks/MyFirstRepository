import IconSuggestion from '../../../assets/svg/shared/icon-suggestions.svg';
import Button from '../../custom/button/Button';
import Dropdown from '../../custom/dropdown/design1/Dropdown';
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
        <Dropdown listItems={dropdownList} />
      </div>
      <Button
        text="+ Add Feedback"
        onClick={undefined}
        disabled={false}
        classList={['w-158', 'bg-magenta']}
      />
    </div>
  );
}

export default UtilityBar;
