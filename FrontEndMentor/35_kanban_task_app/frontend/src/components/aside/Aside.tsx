import Toggle from '#Components/custom/toggle/Toggle';
import IconBoard from '#Svg/icon-board.svg';
import IconDarkTheme from '#Svg/icon-dark-theme.svg';
import IconHideSidebar from '#Svg/icon-hide-sidebar.svg';
import IconLightTheme from '#Svg/icon-light-theme.svg';
import IconShowSidebar from '#Svg/icon-show-sidebar.svg';
// import IconShowSidebar from '#Svg/icon-show-sidebar.svg';
import styles from './_Aside.module.scss';

const sidebarHide = () => {
  const sidebarElement = document.querySelector('#sidebar') as HTMLElement;
  sidebarElement.classList.add(styles['animation-hide']);
  sidebarElement.classList.remove(styles['animation-show']);
};

const sidebarShow = () => {
  const sidebarElement = document.querySelector('#sidebar') as HTMLElement;
  sidebarElement.classList.add(styles['animation-show']);
  // sidebarElement.classList.remove(styles['animation-hide']);
};

type ElemProps = {
  boards: unknown;
};

type Board = {
  name: string;
  id: string;
};

type Boards = Board[];

function Aside(props: ElemProps): JSX.Element {
  const { boards } = props;

  // TODO:  Active class needs to be changed from index to localStorage value for whether a board was active last.
  const boardListItems = (boards as Boards).map(({ name, id }, i) => (
    <li key={id} className={!i ? styles.active : ''}>
      <img src={IconBoard} alt="" />
      <p>{name}</p>
    </li>
  ));

  return (
    <aside className={styles.sidebar} id="sidebar">
      <div className={styles.sidebar__boards}>
        <h2>ALL BOARDS (3)</h2>
        <ul>
          {boardListItems}
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
          onClick={sidebarHide}>
          <img src={IconHideSidebar} alt="" />
          <p>Hide Sidebar</p>
        </button>
      </div>
      <button
        type="button"
        className={styles.sidebar__show}
        onClick={sidebarShow}
        id="sidebar-btn-show">
        <img src={IconShowSidebar} alt="" />
      </button>
    </aside>
  );
}

export default Aside;
