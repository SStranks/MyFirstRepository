import BoardDelete from '#Components/forms/board-del/BoardDel';
import BoardEdit from '#Components/forms/board-edit/BoardEdit';
import TaskAdd from '#Components/forms/task-add/TaskAdd';
import Modal from '#Components/modal/Modal';
import IconAddTaskMobile from '#Svg/icon-add-task-mobile.svg';
import IconEllipsis from '#Svg/icon-vertical-ellipsis.svg';
import LogoDark from '#Svg/logo-dark.svg';
import { Board } from '#Types/types';
import { useState } from 'react';
import styles from './_Nav.module.scss';

type ElemProps = {
  activeBoard: Board;
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>;
};

function Nav(props: ElemProps): JSX.Element {
  const { activeBoard, setActiveBoardId } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  // TODO:  Refactor menu state - change it to CSS only, display none toggle. No need for state.
  const [boardOptions, setBoardOptions] = useState(false);
  const [modalForm, setModalForm] = useState('edit');

  const boardMenuClickHandler = () => {
    setBoardOptions((prev) => !prev);
  };

  const addTaskBtnClickHandler = () => {
    setIsModalOpen(true);
    setModalForm('add-task');
  };

  const boardOptionsClickHandler = (e: React.MouseEvent) => {
    const element = e.target as Element;
    console.log(element, element.classList);
    if (element.innerHTML === 'Edit Board') {
      setIsModalOpen(true);
      setBoardOptions(false);
      setModalForm('edit-board');
    }
    if (element.innerHTML === 'Delete Board') {
      setIsModalOpen(true);
      setBoardOptions(false);
      setModalForm('delete-board');
    }
  };

  console.log('NAV', activeBoard);

  const modalContent =
    modalForm === 'edit-board' ? (
      <BoardEdit
        setIsModalOpen={setIsModalOpen}
        activeBoardId={activeBoard._id}
      />
    ) : modalForm === 'delete-board' ? (
      <BoardDelete
        setIsModalOpen={setIsModalOpen}
        activeBoardId={activeBoard._id}
        setActiveBoardId={setActiveBoardId}
      />
    ) : (
      <TaskAdd
        taskStatus={{
          current: activeBoard.columns[0]?.name,
          statusArr: activeBoard.columns?.map((c) => c.name),
        }}
      />
    );

  return (
    <>
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          modalContent={modalContent}
        />
      )}
      <nav className={styles.navbar}>
        <div className={styles.navbar__logo}>
          <img src={LogoDark} className={styles.navbar__logo__img} alt="" />
        </div>
        <div className={styles.navbar__head}>
          <h1 className={styles.navbar__title}>Platform Launch</h1>
          <div className={styles.navbar__controls}>
            <button
              type="button"
              className={styles.navbar__controls__addTask}
              onClick={addTaskBtnClickHandler}
              disabled={activeBoard.columns.length === 0}>
              <img src={IconAddTaskMobile} alt="" />
              <span>+ Add New Task</span>
            </button>
            <button
              type="button"
              onClick={boardMenuClickHandler}
              className={styles.navbar__controls__boardOptions}>
              <img src={IconEllipsis} alt="" />
            </button>
            {boardOptions && (
              <div
                className={styles.navbar__controls__dropdownMenu}
                onClickCapture={boardOptionsClickHandler}>
                <p>Edit Board</p>
                <p>Delete Board</p>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
