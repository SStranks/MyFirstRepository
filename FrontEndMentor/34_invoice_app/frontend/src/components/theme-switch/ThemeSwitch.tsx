import IconMoon from '../../assets/svg/icon-moon.svg';
// import IconSun from '../../assets/svg/icon-sun.svg';
import styles from './ThemeSwitch.module.scss';

function ThemeSwitcher(): JSX.Element {
  return (
    <div className={styles.container}>
      <img src={IconMoon} alt="" />
    </div>
  );
}
export default ThemeSwitcher;
