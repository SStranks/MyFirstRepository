import { Link } from 'react-router-dom';

import ProductExampleShopList from '#Components/products/ProductExampleShopList';
import IconCart from '#Svg/desktop/icon-cart.svg';
import Logo from '#Svg/desktop/logo.svg';
import IconMenu from '#Svg/tablet/icon-hamburger.svg';
import { useState } from 'react';
import styles from './_Nav.module.scss';

type ElemProps = {
  appendClass: string;
};

function Nav(props: ElemProps): JSX.Element {
  const { appendClass } = props;
  const [menuModal, setMenuModal] = useState(false);

  const toggleModal = () => {
    // Overflow prevents page scrolling when modal open
    if (menuModal) {
      document.body.style.overflow = 'unset';
      setMenuModal((prev) => !prev);
    } else {
      document.body.style.overflow = 'hidden';
      setMenuModal((prev) => !prev);
    }
  };

  return (
    <nav className={`${styles.nav} ${appendClass}`} aria-label="primary">
      <button
        className={styles.nav__menuBtn}
        type="button"
        onClick={toggleModal}>
        <img
          src={IconMenu}
          alt="Menu Product Categories"
          width="16"
          height="15"
        />
      </button>
      <Link to="/">
        <img src={Logo} alt="Audiophile Home" width="143" height="25" />
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
        <img src={IconCart} alt="Shopping Cart" width="23" height="20" />
      </button>
      <div
        className={`${styles.menuModal} ${
          menuModal ? styles.menuModalOpen : ''
        }`}>
        <div className={styles.menuModal__container}>
          <ProductExampleShopList appendClass="" />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
