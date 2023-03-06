import { Link } from 'react-router-dom';

import LogoDark from '#Img/desktop/logo-dark.png';
import styles from './_Nav.module.scss';

function Nav(): JSX.Element {
  return (
    <div className={styles.nav}>
      <Link to="/">
        <img src={LogoDark} alt="" className={styles.nav__logo} />
      </Link>
      <div className={styles.nav__links}>
        <Link to="/about">
          <p className={styles.nav__link}>our company</p>
        </Link>
        <Link to="/locations">
          <p className={styles.nav__link}>locations</p>
        </Link>
        <Link to="/contact">
          <p className={styles.nav__link}>contact</p>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
