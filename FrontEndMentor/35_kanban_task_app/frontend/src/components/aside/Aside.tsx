import Toggle from '#Components/custom/toggle/Toggle';
import IconBoard from '#Svg/icon-board.svg';
import IconDarkTheme from '#Svg/icon-dark-theme.svg';
import IconHideSidebar from '#Svg/icon-hide-sidebar.svg';
import IconLightTheme from '#Svg/icon-light-theme.svg';
// import IconShowSidebar from '#Svg/icon-show-sidebar.svg';
import styles from './_Aside.module.scss';

const sidebarToggle = () => {
  const sidebarElement = document.querySelector('#sidebar') as HTMLElement;
  sidebarElement.classList.add(styles.animation);
};

function Aside(): JSX.Element {
  return (
    <aside className={styles.sidebar} id="sidebar">
      <div className={styles.sidebar__boards}>
        <h2>ALL BOARDS (3)</h2>
        <ul>
          <li className={styles.active}>
            <img src={IconBoard} alt="" />
            <p>Platform Launch</p>
          </li>
          <li>
            <img src={IconBoard} alt="" />
            <p>Marketing Plan</p>
          </li>
          <li>
            <img src={IconBoard} alt="" />
            <p>Roadmap</p>
          </li>
          <li className={styles['new-board']}>
            <img src={IconBoard} alt="" />
            <p>+ Create New Board</p>
          </li>
        </ul>
      </div>
      <div className={styles.sidebar__controls}>
        <div className={styles.sidebar__theme}>
          <img src={IconLightTheme} alt="" />
          <Toggle />
          <img src={IconDarkTheme} alt="" />
        </div>
        <button
          type="button"
          className={styles.sidebar__hide}
          onClick={sidebarToggle}>
          <img src={IconHideSidebar} alt="" />
          <p>Hide Sidebar</p>
        </button>
      </div>
    </aside>
  );
}

export default Aside;
