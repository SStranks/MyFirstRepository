/* eslint-disable jsx-a11y/label-has-associated-control */
import styles from './_Toggle.module.scss';

const themeToggle = () => {
  const body = document.querySelector('body');
  body?.classList.toggle('dark-theme');
};

function Toggle() {
  return (
    <div className={styles.toggleSlider}>
      <label htmlFor="theme-switch">
        <span />
        <input type="checkbox" id="theme-switch" onClick={themeToggle} />
      </label>
    </div>
  );
}

export default Toggle;
