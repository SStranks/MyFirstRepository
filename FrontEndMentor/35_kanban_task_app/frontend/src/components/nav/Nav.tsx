import RootModalDispatchContext from '#Context/RootModalContext';
import IconAddTaskMobile from '#Svg/icon-add-task-mobile.svg';
import IconEllipsis from '#Svg/icon-vertical-ellipsis.svg';
import LogoDark from '#Svg/logo-dark.svg';
import { Board } from '#Types/types';
import { useContext, useRef } from 'react';
import styles from './_Nav.module.scss';

type ElemProps = {
  activeBoard: Board;
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>;
};

function Nav(props: ElemProps): JSX.Element {
  const { activeBoard, setActiveBoardId } = props;
  const modalDispatch = useContext(RootModalDispatchContext);
  const boardOptionsRef = useRef<HTMLDivElement>(null);

  const boardMenuClickHandler = () => {
    boardOptionsRef.current?.classList.toggle('hidden');
  };

  const addTaskBtnClickHandler = () => {
    const taskStatus = {
      current: activeBoard?.columns[0]?.name,
      statusArr: activeBoard?.columns?.map((c) => c.name),
    };
    modalDispatch({
      type: 'open-modal',
      modalType: 'task-add',
      modalProps: { activeBoard, taskStatus },
    });
  };

  const boardOptionsClickHandler = (e: React.MouseEvent) => {
    const element = e.target as Element;
    if (element.innerHTML === 'Edit Board') {
      boardOptionsRef.current?.classList.add('hidden');
      modalDispatch({
        type: 'open-modal',
        modalType: 'board-edit',
        modalProps: { activeBoard },
      });
    }
    if (element.innerHTML === 'Delete Board') {
      boardOptionsRef.current?.classList.add('hidden');
      modalDispatch({
        type: 'open-modal',
        modalType: 'board-delete',
        modalProps: { activeBoardId: activeBoard._id, setActiveBoardId },
      });
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <img src={LogoDark} className={styles.navbar__logo__img} alt="" />
      </div>
      <div className={styles.navbar__head}>
        <h1 className={styles.navbar__title}>{activeBoard?.name}</h1>
        <div className={styles.navbar__controls}>
          <button
            type="button"
            className={styles.navbar__controls__addTask}
            onClick={addTaskBtnClickHandler}
            disabled={activeBoard?.columns.length === 0}>
            <img src={IconAddTaskMobile} alt="" />
            <span>+ Add New Task</span>
          </button>
          <button
            type="button"
            onClick={boardMenuClickHandler}
            className={styles.navbar__controls__boardOptions}>
            <img src={IconEllipsis} alt="" />
          </button>
          <div
            className={`${styles.navbar__controls__dropdownMenu} hidden`}
            onClickCapture={boardOptionsClickHandler}
            ref={boardOptionsRef}>
            <p>Edit Board</p>
            <p>Delete Board</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
