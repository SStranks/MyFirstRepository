import IconMoon from '#Svg/icon-moon.svg';
// import IconSun from '#Svg/icon-sun.svg';
import styles from './ThemeSwitch.module.scss';

const themeToggle = () => {
  const body = document.querySelector('body');
  body?.classList.toggle('dark-theme');
};

function ThemeSwitcher(): JSX.Element {
  return (
    <button type="button" className={styles.container} onClick={themeToggle}>
      <img src={IconMoon} alt="" />
    </button>
  );
}
export default ThemeSwitcher;
