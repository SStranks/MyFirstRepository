import { useState } from 'react';
import IconArrowBack from '../../../assets/svg/shared/icon-arrow-left.svg';
import Button from '../../custom/button/Button';
import FormFeedbackEdit from '../../form/feedback-edit/Form';
import Modal from '../../modal/Modal';
import styles from './_UtilityBar.module.scss';

function UtilityBar() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className={styles.bar}>
        <div className={styles.bar__back}>
          <img src={IconArrowBack} alt="" />
          <span>Go Back</span>
        </div>
        <div className={styles.bar__btn}>
          <Button
            text="Edit Feedback"
            disabled={false}
            classList={['bg-royal-blue']}
            onClick={() => setModalOpen(true)}
          />
        </div>
      </div>
      <Modal handleClose={() => setModalOpen(false)} modalOpen={modalOpen}>
        <FormFeedbackEdit cancelBtnOnClick={() => setModalOpen(false)} />
      </Modal>
    </>
  );
}

export default UtilityBar;
