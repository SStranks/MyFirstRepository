import { Link } from 'react-router-dom';

import IconCart from '#Svg/desktop/icon-cart.svg';
import Logo from '#Svg/desktop/logo.svg';
import IconMenu from '#Svg/tablet/icon-hamburger.svg';
import styles from './_Nav.module.scss';

type ElemProps = {
  appendClass: string;
};

function Nav(props: ElemProps): JSX.Element {
  const { appendClass } = props;

  return (
    <nav className={`${styles.nav} ${appendClass}`} aria-label="primary">
      <button className={styles.nav__menuBtn} type="button">
        <img src={IconMenu} alt="Menu Product Categories" />
      </button>
      <Link to="/">
        <img src={Logo} alt="Audiophile Home" />
      </Link>
      <div className={styles.nav__links}>
        <Link to="/" className={styles.nav__link}>
          home
        </Link>
        <Link to="/headphones" className={styles.nav__link}>
          headphones
        </Link>
        <Link to="/speakers" className={styles.nav__link}>
          speakers
        </Link>
        <Link to="/earphones" className={styles.nav__link}>
          earphones
        </Link>
      </div>
      <button className={styles.nav__cartBtn} type="button">
        <img src={IconCart} alt="Shopping Cart" />
      </button>
    </nav>
  );
}

export default Nav;
