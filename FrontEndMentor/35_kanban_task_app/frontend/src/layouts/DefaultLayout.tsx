import Aside from '#Components/aside/Aside';
import Main from '#Components/main/Main';
import Nav from '#Components/nav/Nav';

import styles from './_DefaultLayout.module.scss';

type SubTaskObj = {
  title: string;
  isCompleted: boolean;
};

type Task =
  | {
      taskID?: string | undefined;
      title: string;
      description: string;
      status: string;
      subtasks: SubTaskObj[] | [];
    }[]
  | [];

type Boards = { name: string; id: string }[];
type activeBoard = {
  name: string;
  boardID: string;
  columns: { name: string; tasks: Task }[];
};

type ElemProps = {
  data: { boards: Boards; activeBoard: activeBoard };
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>;
};

function DefaultLayout(props: ElemProps): JSX.Element {
  const { data, setActiveBoardId } = props;
  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.container__subcontainer}>
        <Aside boards={data.boards} setActiveBoardId={setActiveBoardId} />
        <Main boardData={data.activeBoard} />
      </div>
    </div>
  );
}

export default DefaultLayout;
