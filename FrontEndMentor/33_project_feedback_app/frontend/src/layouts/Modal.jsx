import { Link } from 'react-router-dom';
import IconArrowBack from '../assets/svg/shared/icon-arrow-left.svg';
import { FormFeedbackEdit, FormFeedbackNew } from '../components';
import styles from './_Modal.module.scss';

function Modal() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <img src={IconArrowBack} alt="" />
        <Link to="/">
          <p>Go Back</p>
        </Link>
      </nav>
      {/* Temporary Development:  */}
      {/* <FormFeedbackNew /> */}
      <FormFeedbackEdit />
    </div>
  );
}

export default Modal;
