import SiteLogo from '../../assets/svg/logo.svg';
import ThemeSwitcher from '../theme-switch/ThemeSwitch';
import User from '../user/User';
import styles from './SideBar.module.scss';

function SideBar(): JSX.Element {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__logo}>
        <img src={SiteLogo} alt="" />
      </div>
      <div className={styles.sidebar__themeswitch}>
        <ThemeSwitcher />
      </div>
      <div className={styles.sidebar__user}>
        <User />
      </div>
    </div>
  );
}

export default SideBar;
