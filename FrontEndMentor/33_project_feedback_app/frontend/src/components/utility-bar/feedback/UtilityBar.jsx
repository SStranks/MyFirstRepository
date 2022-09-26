import IconArrowBack from '../../../assets/svg/shared/icon-arrow-left.svg';
import styles from './_UtilityBar.module.scss';

function UtilityBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.bar__back}>
        <img src={IconArrowBack} alt="" />
        <span>Go Back</span>
      </div>
      <button type="button">Edit Feedback</button>
    </div>
  );
}

export default UtilityBar;
