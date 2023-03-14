import { useState } from 'react';
import { Link } from 'react-router-dom';

import LogoDark from '#Img/desktop/logo-dark.png';
import IconClose from '#Svg/mobile/icon-close.svg';
import IconMenu from '#Svg/mobile/icon-hamburger.svg';
import styles from './_Nav.module.scss';

function Nav(): JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mobileMenuBtn = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <div className={styles.nav}>
      <Link to="/">
        <img src={LogoDark} alt="" className={styles.nav__logo} />
      </Link>
      <button type="button" onClick={mobileMenuBtn}>
        <img src={mobileMenuOpen ? IconClose : IconMenu} alt="" />
      </button>
      <div className={`${styles.nav__links} ${mobileMenuOpen ? '' : 'hidden'}`}>
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
