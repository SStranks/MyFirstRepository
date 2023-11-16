import Toggle from '#Components/custom/toggle/Toggle';
import RootModalDispatchContext from '#Context/RootModalContext';
import IconBoard from '#Svg/icon-board.svg';
import IconDarkTheme from '#Svg/icon-dark-theme.svg';
import IconHideSidebar from '#Svg/icon-hide-sidebar.svg';
import IconLightTheme from '#Svg/icon-light-theme.svg';
import IconShowSidebar from '#Svg/icon-show-sidebar.svg';
import { TBoardInfo } from '#Types/types';
import { useContext } from 'react';
import styles from './_Aside.module.scss';

// NOTE:  The animation delay variables in SASS (--delay-X) are set here; controlling the list items delay dynamically and calculating the delay for the sidebar hide animation to accomodate the list length.
const sidebarHide = () => {
  const sidebarElement = document.querySelector('#sidebar') as HTMLElement;
  const listItems = document.querySelectorAll('li[data-listnum]');
  listItems.forEach((el, i, arr) => {
    (el as HTMLElement).style.setProperty('--delay-li', `${arr.length - i}`);
  });

  sidebarElement.style.setProperty(
    '--delay-sidebar',
    `${listItems.length * 0.15 + 0.075}s`
  );

  sidebarElement.classList.add(styles.animationHide);
  sidebarElement.classList.remove(styles.animationShow);
};

const sidebarShow = () => {
  const sidebarElement = document.querySelector('#sidebar') as HTMLElement;
  const listItems = document.querySelectorAll('li[data-listnum]');
  listItems.forEach((el, i) => {
    (el as HTMLElement).style.setProperty('--delay-li', `${i}`);
  });
  sidebarElement.classList.add(styles.animationShow);
};

type TProps = {
  boardsList: TBoardInfo;
  activeBoardId: string;
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>;
};

function Aside(props: TProps): JSX.Element {
  const { boardsList, activeBoardId, setActiveBoardId } = props;
  const modalDispatch = useContext(RootModalDispatchContext);

  const numOfBoards = boardsList.length;
  const boardListItems = (boardsList as TBoardInfo).map(({ name, id }, i) => (
    <li
      key={id}
      className={id === activeBoardId ? styles.active : ''}
      data-board-id={id}
      data-listnum={i + 1}>
      <img src={IconBoard} alt="" />
      <p>{name}</p>
    </li>
  ));

  const onListClickHandler = (e: React.MouseEvent): void => {
    const element = (e.target as Element).closest('[data-board-id]');
    const { boardId } = (element as HTMLElement).dataset;
    if (boardId === 'create-new') {
      modalDispatch({
        type: 'open-modal',
        modalType: 'board-add',
        modalProps: { setActiveBoardId },
      });
    } else if (boardId) {
      setActiveBoardId(boardId);
    }
  };

  return (
    <aside className={styles.sidebar} id="sidebar">
      <div className={styles.sidebar__boards}>
        <h2>ALL BOARDS ({numOfBoards})</h2>
        <ul onClickCapture={onListClickHandler}>
          {boardListItems}

          <li
            className={styles.newBoard}
            data-board-id="create-new"
            data-listnum>
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
