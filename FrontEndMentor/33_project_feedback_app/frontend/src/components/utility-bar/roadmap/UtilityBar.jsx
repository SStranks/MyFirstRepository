import { Link } from 'react-router-dom';
import IconArrowLeft from '../../../assets/svg/shared/icon-arrow-left.svg';
import Button from '../../custom/button/Button';
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
      <Button
        text="+ Add Feedback"
        disabled={false}
        classList={['w-144', 'bg-magenta']}
      />
    </div>
  );
}

export default UtilityBar;
