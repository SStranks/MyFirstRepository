import Aside from '#Components/aside/Aside';
import Main from '#Components/main/Main';
import Nav from '#Components/nav/Nav';
import { Board, BoardInfo } from '#Types/types';
import styles from './_DefaultLayout.module.scss';

type ElemProps = {
  boardData: { boards: BoardInfo; activeBoard: Board };
  activeBoardId: string;
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>;
};

function DefaultLayout(props: ElemProps): JSX.Element {
  const { boardData, activeBoardId, setActiveBoardId } = props;
  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.container__subcontainer}>
        <Aside
          boards={boardData.boards}
          activeBoardId={activeBoardId}
          setActiveBoardId={setActiveBoardId}
        />
        <Main boardData={boardData.activeBoard} />
      </div>
    </div>
  );
}

export default DefaultLayout;
