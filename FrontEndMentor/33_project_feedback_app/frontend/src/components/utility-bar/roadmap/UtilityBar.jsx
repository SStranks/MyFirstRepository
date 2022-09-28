import { Link } from 'react-router-dom';
import IconArrowLeft from '../../../assets/svg/shared/icon-arrow-left.svg';
import styles from './_UtilityBar.module.scss';

function UtilityBar() {
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
      <button className={styles.bar__btnAdd} type="button">
        + Add Feedback
      </button>
    </div>
  );
}

export default UtilityBar;
