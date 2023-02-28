import LogoDark from '#Img/desktop/logo-dark.png';
import styles from './Nav.module.scss';

function Nav(): JSX.Element {
  return (
    <div className={styles.nav}>
      <img src={LogoDark} alt="" />
      <div className={styles.nav__links}>
        <h3>our company</h3>
        <h3>locations</h3>
        <h3>contact</h3>
      </div>
    </div>
  );
}

export default Nav;
