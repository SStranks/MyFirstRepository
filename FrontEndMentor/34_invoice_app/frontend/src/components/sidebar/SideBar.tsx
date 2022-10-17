import SiteLogo from '../../assets/svg/logo.svg';
import ThemeSwitcher from '../theme-switch/ThemeSwitch';
import User from '../user/User';
import styles from './SideBar.module.scss';

function SideBar(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className="">
        <img src={SiteLogo} alt="" />
      </div>
      <ThemeSwitcher />
      <div>
        <User />
      </div>
    </div>
  );
}

export default SideBar;
