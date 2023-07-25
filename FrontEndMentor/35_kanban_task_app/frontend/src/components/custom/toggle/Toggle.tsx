import styles from './_Toggle.module.scss';

const themeToggle = () => {
  const body = document.querySelector('body');
  body?.classList.toggle('dark-theme');
};

function Toggle() {
  return (
    <div className={styles.toggleSlider}>
      <label htmlFor="theme-switch">
        <input type="checkbox" id="theme-switch" onClick={themeToggle} />
        <span />
      </label>
    </div>
  );
}

export default Toggle;
