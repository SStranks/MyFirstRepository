import { Link } from 'react-router-dom';

import CartSummaryCard from '#Components/checkout/CartSummaryCard';
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
  const [menuCategoryModal, setMenuCategoryModal] = useState(false);
  const [menuCartModal, setMenuCartModal] = useState(false);

  // toggleCategoryModal and toggleCartModal ensure only one nav button modal is open at a time.
  const toggleCategoryModal = () => {
    // Overflow prevents page scrolling when modal open
    if (menuCategoryModal) {
      document.body.style.overflow = 'unset';
      setMenuCategoryModal((prev) => !prev);
    } else {
      document.body.style.overflow = 'hidden';
      setMenuCartModal(false);
      setMenuCategoryModal((prev) => !prev);
    }
  };

  const toggleCartModal = () => {
    // Overflow prevents page scrolling when modal open
    if (menuCartModal) {
      document.body.style.overflow = 'unset';
      setMenuCartModal((prev) => !prev);
    } else {
      document.body.style.overflow = 'hidden';
      setMenuCategoryModal(false);
      setMenuCartModal((prev) => !prev);
    }
  };

  console.log('render nav');

  return (
    <nav className={`${styles.nav} ${appendClass}`} aria-label="primary">
      <button
        className={styles.nav__menuBtn}
        type="button"
        onClick={toggleCategoryModal}>
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
      <button
        className={styles.nav__cartBtn}
        type="button"
        onClick={toggleCartModal}>
        <img src={IconCart} alt="Shopping Cart" width="23" height="20" />
      </button>
      <div
        className={`${styles.menuModal} ${
          menuCategoryModal ? styles.menuCategoryModalOpen : ''
        }`}>
        <div className={styles.menuModal__container}>
          <ProductExampleShopList appendClass="" />
        </div>
      </div>
      <div
        className={`${styles.menuCart} ${
          menuCartModal ? styles.menuCartModalOpen : ''
        }`}>
        <div className={styles.menuCart__container}>
          <CartSummaryCard itemsQuantity={3} totalAmount={5396} />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
