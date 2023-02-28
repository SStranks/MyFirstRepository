import LogoDark from '#Img/desktop/logo-dark.png';
import styles from './Nav.module.scss';

function Nav(): JSX.Element {
  return (
    <div className={styles.nav}>
      <img src={LogoDark} alt="" className={styles.nav__logo} />
      <div className={styles.nav__links}>
        <p className={styles.nav__link}>our company</p>
        <p className={styles.nav__link}>locations</p>
        <p className={styles.nav__link}>contact</p>
      </div>
    </div>
  );
}

export default Nav;
