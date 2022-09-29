import IconArrowBack from '../../../assets/svg/shared/icon-arrow-left.svg';
import Button from '../../custom/button/Button';
import styles from './_UtilityBar.module.scss';

function UtilityBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.bar__back}>
        <img src={IconArrowBack} alt="" />
        <span>Go Back</span>
      </div>
      <Button
        text="Edit Feedback"
        disabled={false}
        classList={['w-144', 'bg-royal-blue']}
      />
    </div>
  );
}

export default UtilityBar;
