import { Link } from 'react-router-dom';

import IconCart from '#Svg/desktop/icon-cart.svg';
import Logo from '#Svg/desktop/logo.svg';
import styles from './_Nav.module.scss';

function Nav(): JSX.Element {
  return (
    <div className={styles.nav}>
      <img src={Logo} alt="" />
      <div className={styles.nav__links}>
        <Link to="/">
          <p>home</p>
        </Link>
        <Link to="/headphones">
          <p>headphones</p>
        </Link>
        <Link to="/speakers">
          <p>speakers</p>
        </Link>
        <Link to="/earphones">
          <p>earphones</p>
        </Link>
      </div>
      <img src={IconCart} alt="" />
    </div>
  );
}

export default Nav;
