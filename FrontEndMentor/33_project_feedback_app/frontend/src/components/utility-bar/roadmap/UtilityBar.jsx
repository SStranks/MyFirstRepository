import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormFeedbackNew } from '../..';
import IconArrowLeft from '../../../assets/svg/shared/icon-arrow-left.svg';
import Button from '../../custom/button/Button';
import Modal from '../../modal/Modal';
import styles from './_UtilityBar.module.scss';

function UtilityBar() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={styles.bar}>
      <div className={styles.bar__nav}>
        <Link to="/">
          <div className={styles.bar__link}>
            <img src={IconArrowLeft} alt="" />
            <p>Go Back</p>
          </div>
        </Link>
        <h3>Roadmap</h3>
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
