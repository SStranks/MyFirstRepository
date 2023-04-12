import { Link } from 'react-router-dom';

import IconCart from '#Svg/desktop/icon-cart.svg';
import Logo from '#Svg/desktop/logo.svg';
import styles from './_Nav.module.scss';

function Nav(): JSX.Element {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <div className={styles.nav__links}>
        <Link to="/">
          <p className={styles.nav__link}>home</p>
        </Link>
        <Link to="/headphones">
          <p className={styles.nav__link}>headphones</p>
        </Link>
        <Link to="/speakers">
          <p className={styles.nav__link}>speakers</p>
        </Link>
        <Link to="/earphones">
          <p className={styles.nav__link}>earphones</p>
        </Link>
      </div>
      <img src={IconCart} alt="" />
    </nav>
  );
}

export default Nav;
