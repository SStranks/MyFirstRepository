import { Link } from 'react-router-dom';

import IconCart from '#Svg/desktop/icon-cart.svg';
import Logo from '#Svg/desktop/logo.svg';
import IconMenu from '#Svg/tablet/icon-hamburger.svg';
import styles from './_Nav.module.scss';

function Nav(): JSX.Element {
  return (
    <nav className={styles.nav}>
      <button className={styles.nav__menuBtn} type="button">
        <img src={IconMenu} alt="" />
      </button>
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
      <button className={styles.nav__cartBtn} type="button">
        <img src={IconCart} alt="" />
      </button>
    </nav>
  );
}

export default Nav;
