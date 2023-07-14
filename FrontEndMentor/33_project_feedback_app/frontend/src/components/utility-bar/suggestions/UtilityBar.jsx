/* eslint-disable react/prop-types */
import { useState } from 'react';
import IconSuggestion from '../../../assets/svg/shared/icon-suggestions.svg';
import Button from '../../custom/button/Button';
import Dropdown from '../../custom/dropdown/design1/Dropdown';
import FormFeedbackNew from '../../form/feedback-new/Form';
import Modal from '../../modal/Modal';
import styles from './_UtilityBar.module.scss';

const dropdownList = [
  'Most Upvotes',
  'Least Upvotes',
  'Most Comments',
  'Least Comments',
];

function UtilityBar(props) {
  const { requests, dispatch } = props;
  const [modalOpen, setModalOpen] = useState(false);

  const numSuggestions =
    requests?.filter(({ status }) => status === 'suggestion').length || 0;

  return (
    <div className={styles.bar}>
      <div className={styles.bar__suggestions}>
        <img className={styles.bar__icon} src={IconSuggestion} alt="" />
        <h3 className={styles.bar__number}>{numSuggestions} Suggestions</h3>
        <Dropdown listItems={dropdownList} dispatch={dispatch} />
      </div>
      <div className={styles.bar__btn}>
        <Button
          text="+ Add Feedback"
          onClick={() => setModalOpen(true)}
          disabled={false}
          classList={['bg-magenta']}
        />
      </div>
      <Modal handleClose={() => setModalOpen(false)} modalOpen={modalOpen}>
        <FormFeedbackNew setModalOpen={() => setModalOpen(false)} />
      </Modal>
    </div>
  );
}

export default UtilityBar;
