import BoardDelete from '#Components/forms/board-del/BoardDel';
// import BoardEdit from '#Components/forms/board-edit/BoardEdit';
import Modal from '#Components/modal/Modal';
import IconAddTaskMobile from '#Svg/icon-add-task-mobile.svg';
import IconEllipsis from '#Svg/icon-vertical-ellipsis.svg';
import LogoDark from '#Svg/logo-dark.svg';
import { useState } from 'react';
import styles from './_Nav.module.scss';

type ElemProps = {
  activeBoardId: string;
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>;
};

function Nav(props: ElemProps): JSX.Element {
  const { activeBoardId, setActiveBoardId } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [boardOptions, setBoardOptions] = useState(false);

  const boardMenuClickHandler = () => {
    setBoardOptions((prev) => !prev);
  };

  const boardOptionsClickHandler = (e: React.MouseEvent) => {
    const element = e.target as Element;
    console.log(element, element.classList);
    if (element.innerHTML === 'Edit Board') {
      setIsModalOpen(true);
      setBoardOptions(false);
    }
    if (element.innerHTML === 'Delete Board') {
      setIsModalOpen(true);
      setBoardOptions(false);
    }
  };

  // <BoardEdit />

  return (
    <>
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          modalContent={
            <BoardDelete
              setIsModalOpen={setIsModalOpen}
              activeBoardId={activeBoardId}
              setActiveBoardId={setActiveBoardId}
            />
          }
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
              disabled>
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
