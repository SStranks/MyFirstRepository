import IconAddTaskMobile from '#Svg/icon-add-task-mobile.svg';
import IconEllipsis from '#Svg/icon-vertical-ellipsis.svg';
import LogoDark from '#Svg/logo-dark.svg';
import styles from './_Nav.module.scss';

function Nav(): JSX.Element {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <img src={LogoDark} className={styles.navbar__logo__img} alt="" />
      </div>
      <div className={styles.navbar__head}>
        <h1 className={styles.navbar__title}>Platform Launch</h1>
        <div className={styles.navbar__controls}>
          <button type="button" disabled>
            <img src={IconAddTaskMobile} alt="" />
            <span>+ Add New Task</span>
          </button>
          <img src={IconEllipsis} alt="" />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
