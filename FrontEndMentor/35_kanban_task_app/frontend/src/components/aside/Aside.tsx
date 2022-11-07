import IconHideSidebar from '#Svg/icon-hide-sidebar.svg';
// import IconShowSidebar from '#Svg/icon-show-sidebar.svg';
import styles from './Aside.module.scss';

function Aside(): JSX.Element {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__boards}>
        <h2>ALL BOARDS 3</h2>
        <ul>
          <li>Platform Launch</li>
          <li>Marketing Plan</li>
          <li>Roadmap</li>
          <li>Create New Board</li>
        </ul>
      </div>
      <div className={styles.sidebar__controls}>
        <div className={styles.sidebar__theme}>
          <img src="" alt="" />
          <div className="" />
          <img src="" alt="" />
        </div>
        <div className={styles.sidebar__hide}>
          <img src={IconHideSidebar} alt="" />
          <p>Hide Sidebar</p>
        </div>
      </div>
    </aside>
  );
}

export default Aside;
