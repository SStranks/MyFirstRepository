import { useState } from 'react';
import IconArrowDown from '../../../assets/svg/shared/icon-arrow-down.svg';
import IconSuggestion from '../../../assets/svg/shared/icon-suggestions.svg';
import Button from '../../custom/button/Button';
import Dropdown from '../../custom/dropdown/Dropdown';
import styles from './_UtilityBar.module.scss';

function UtilityBar() {
  // Temporary Dev
  const numSuggestions = 6;

  const [active, setActive] = useState(false);

  const clickHandlerDropdown = () => {
    setActive(!active);
  };
  const keyHandlerDropdown = (e) => {
    if (e.target.value) return;
  };

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
        <div
          className={styles.bar__sort}
          role="button"
          onClick={clickHandlerDropdown}
          onKeyDown={keyHandlerDropdown}
          tabIndex={0}>
          <p>Sort by : Most Upvotes</p>
          <img src={IconArrowDown} alt="" />
          <Dropdown listItems={dropdownList} active={active} />
        </div>
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
