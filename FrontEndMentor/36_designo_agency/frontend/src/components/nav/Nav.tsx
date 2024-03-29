import { useEffect, useState } from 'react';
// import { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import LogoDark from '#Img/desktop/logo-dark.png';
import IconClose from '#Svg/mobile/icon-close.svg';
import IconMenu from '#Svg/mobile/icon-hamburger.svg';
import styles from './_Nav.module.scss';

function Nav(): JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mobileMenuBtn = () => {
    const links = document.querySelector('#nav-links');
    links?.classList.toggle('hidden');
    setMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    // DEBUG:  If hamburger icon is 'X' when resizing out of mobile and back, it persists.
    // Watch for window resize event
    const mq = window.matchMedia('(max-width: 480px)');
    const links = document.querySelector('#nav-links');
    const addHidden = () => {
      return mq.matches
        ? links?.classList.add('hidden')
        : links?.classList.remove('hidden');
    };

    addHidden();

    mq.addEventListener('change', addHidden);
    return () => mq.removeEventListener('change', addHidden);
  }, []);

  return (
    <nav className={styles.nav}>
      <Link to="/">
        <img
          src={LogoDark}
          alt="Designo Site Home."
          className={styles.nav__logo}
        />
      </Link>
      <button type="button" className={styles.nav__btn} onClick={mobileMenuBtn}>
        <img src={mobileMenuOpen ? IconClose : IconMenu} alt="" />
      </button>
      <div id="nav-links" className={styles.nav__links}>
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
    </nav>
  );
}

export default Nav;
