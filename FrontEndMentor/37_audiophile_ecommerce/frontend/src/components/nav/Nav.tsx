import { Link, useLocation } from 'react-router-dom';

import MenuCartModal from '#Components/modal/MenuCartModal';
import MenuCategoryModal from '#Components/modal/MenuCategoryModal';
import IconCart from '#Svg/desktop/icon-cart.svg';
import Logo from '#Svg/desktop/logo.svg';
import IconMenu from '#Svg/tablet/icon-hamburger.svg';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './_Nav.module.scss';

type ElemProps = {
  appendClass?: string;
};

function Nav(props: ElemProps): JSX.Element {
  const { appendClass } = props;
  const [menuCategoryModal, setMenuCategoryModal] = useState<boolean>(false);
  const [menuCartModal, setMenuCartModal] = useState<boolean>(false);
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);
  const menuCartBtnRef = useRef<HTMLButtonElement>(null);
  const menuCategoryBtnRef = useRef<HTMLButtonElement>(null);

  const toggleCategoryModal = () => {
    setMenuCategoryModal((prev) => {
      document.querySelector('#root')?.setAttribute('aria-hidden', `${!prev}`);
      document.querySelector('#modal')?.setAttribute('aria-hidden', `${prev}`);
      return !prev;
    });
  };

  const toggleCartModal = () => {
    setMenuCartModal((prev) => {
      document.querySelector('#root')?.setAttribute('aria-hidden', `${!prev}`);
      document.querySelector('#modal')?.setAttribute('aria-hidden', `${prev}`);
      return !prev;
    });
  };

  useLayoutEffect(() => {
    document.body.style.overflow =
      menuCartModal || menuCategoryModal ? 'hidden' : '';
  });

  useLayoutEffect(() => {
    // Home Page requires nav to be transparent against hero image
    const nav = document.querySelector('#primary-nav');
    // (nav as HTMLElement).classList.remove(styles.nav__tmp);
    if (nav && location.pathname === '/') {
      (nav as HTMLElement).classList.add(styles.nav__navLayoutEffect);
    } else {
      (nav as HTMLElement).classList.remove(styles.nav__navLayoutEffect);
      (nav as HTMLElement).classList.remove(
        styles.nav__positionStickyTransition
      );
    }
  }, [location.pathname]);

  useEffect(() => {
    // Changing the colour of the nav bar when scrolling (sticky)
    const observer = new IntersectionObserver(
      ([e]) => {
        e.target.classList.add(styles.nav__positionStickyTransition);
        e.target.classList.toggle(
          styles.nav__positionStickyBgColor,
          e.intersectionRatio < 1
        );
      },
      { threshold: [1] }
    );

    if (navRef?.current) observer.observe(navRef.current);

    return () => observer.disconnect();
  });

  return (
    <nav
      ref={navRef}
      className={`${styles.nav} ${appendClass}`}
      id="primary-nav"
      aria-label="primary">
      <button
        className={styles.nav__menuBtn}
        type="button"
        onClick={toggleCategoryModal}
        ref={menuCategoryBtnRef}>
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
        onClick={toggleCartModal}
        ref={menuCartBtnRef}>
        <img src={IconCart} alt="Shopping Cart" width="23" height="20" />
      </button>
      <MenuCategoryModal
        modalOpen={menuCategoryModal}
        setModal={setMenuCategoryModal}
        modalButtonRef={menuCategoryBtnRef}
      />
      <MenuCartModal
        modalOpen={menuCartModal}
        setModal={setMenuCartModal}
        modalButtonRef={menuCartBtnRef}
      />
    </nav>
  );
}

export default Nav;
