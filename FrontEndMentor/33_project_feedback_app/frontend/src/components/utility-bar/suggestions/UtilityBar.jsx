import { useState } from 'react';
import IconSuggestion from '../../../assets/svg/shared/icon-suggestions.svg';
import Button from '../../custom/button/Button';
import Dropdown from '../../custom/dropdown/design1/Dropdown';
import FormFeedbackNew from '../../form/feedback-new/Form';
import Modal from '../../modal/Modal';
import styles from './_UtilityBar.module.scss';

function UtilityBar() {
  const [modalOpen, setModalOpen] = useState(false);

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
        <img className={styles.bar__icon} src={IconSuggestion} alt="" />
        <h3 className={styles.bar__number}>{numSuggestions} Suggestions</h3>
        <Dropdown listItems={dropdownList} />
      </div>
      <Button
        text="+ Add Feedback"
        onClick={() => setModalOpen(true)}
        disabled={false}
        classList={['w-158', 'bg-magenta']}
      />
      <Modal handleClose={() => setModalOpen(false)} modalOpen={modalOpen}>
        <FormFeedbackNew
          cancelBtnOnClick={() => setModalOpen(false)}
          modalOpen={modalOpen}
        />
      </Modal>
    </div>
  );
}

export default UtilityBar;
