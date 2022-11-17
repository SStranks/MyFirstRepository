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

type Board = {
  name: string;
  id: string;
};

type Boards = Board[];

type ElemProps = {
  boards: Boards;
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>;
};

function Aside(props: ElemProps): JSX.Element {
  const { boards, setActiveBoardId } = props;

  // TODO:  Active class needs to be changed from index to localStorage value for whether a board was active last.
  const numOfBoards = boards.length;
  const boardListItems = (boards as Boards).map(({ name, id }, i) => (
    <li key={id} className={!i ? styles.active : ''} data-board-id={id}>
      <img src={IconBoard} alt="" />
      <p>{name}</p>
    </li>
  ));

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const onListClickHandler = (e: React.MouseEvent) => {
    const element = (e.target as Element).closest('[data-board-id]');
    const { boardId } = (element as HTMLElement).dataset;
    if (typeof boardId === 'string') {
      setActiveBoardId(boardId);
    }
  };

  return (
    <aside className={styles.sidebar} id="sidebar">
      <div className={styles.sidebar__boards}>
        <h2>ALL BOARDS ({numOfBoards})</h2>
        <ul onClickCapture={onListClickHandler}>
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
