import { Link } from 'react-router-dom';

import styles from './_Header.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <Link to="/">
        <div className={styles.header__content}>
          <h2>Frontend Mentor</h2>
          <p>Feedback Board</p>
        </div>
      </Link>
    </div>
  );
}

export default Header;
