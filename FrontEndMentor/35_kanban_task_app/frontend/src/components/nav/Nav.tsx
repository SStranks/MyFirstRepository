import IconEllipsis from '#Svg/icon-vertical-ellipsis.svg';
import LogoDark from '#Svg/logo-dark.svg';
import styles from './Nav.module.scss';

function Nav(): JSX.Element {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <img src={LogoDark} className={styles.navbar__logo__img} alt="" />
      </div>
      <div className={styles.navbar__head}>
        <h1>Platform Launch</h1>
        <div className="">
          {/* BTN: + Add New Task */}
          <img src={IconEllipsis} alt="" />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
