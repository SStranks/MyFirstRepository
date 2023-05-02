import { Link, useLocation } from 'react-router-dom';

import MenuCartModal from '#Components/modal/MenuCartModal';
import MenuCategoryModal from '#Components/modal/MenuCategoryModal';
import IconCart from '#Svg/desktop/icon-cart.svg';
import Logo from '#Svg/desktop/logo.svg';
import IconMenu from '#Svg/tablet/icon-hamburger.svg';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './_Nav.module.scss';

type ElemProps = {
  appendClass: string;
};

function Nav(props: ElemProps): JSX.Element {
  const { appendClass } = props;
  const [menuCategoryModal, setMenuCategoryModal] = useState(false);
  const [menuCartModal, setMenuCartModal] = useState(false);
  const location = useLocation();
  const ref = useRef(null);

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

  useLayoutEffect(() => {
    // Home Page requires nav to be transparent against hero image
    const nav = document.querySelector('#primary-nav');
    // (nav as HTMLElement).classList.remove(styles.nav__tmp);
    if (nav && location.pathname === '/') {
      (nav as HTMLElement).classList.add(styles.nav__navLayoutEffect);
    } else {
      (nav as HTMLElement).classList.remove(styles.nav__navLayoutEffect);
    }
  }, [location.pathname]);

  useEffect(() => {
    // Changing the colour of the nav bar when scrolling (sticky)
    const observer = new IntersectionObserver(
      ([e]) =>
        e.target.classList.toggle(
          styles.nav__positionSticky,
          e.intersectionRatio < 1
        ),
      { threshold: [1] }
    );

    if (ref?.current) observer.observe(ref.current);

    return () => observer.disconnect();
  });

  return (
    <nav
      ref={ref}
      className={`${styles.nav} ${appendClass}`}
      id="primary-nav"
      aria-label="primary">
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
      <MenuCategoryModal
        modalOpen={menuCategoryModal}
        modalClose={setMenuCategoryModal}
      />
      <MenuCartModal modalOpen={menuCartModal} setModal={setMenuCartModal} />
    </nav>
  );
}

export default Nav;
