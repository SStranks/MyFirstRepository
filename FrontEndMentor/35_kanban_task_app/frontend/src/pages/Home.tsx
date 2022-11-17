import DefaultLayout from '#Layouts/DefaultLayout';

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

function Home(props: ElemProps): JSX.Element {
  const { data, setActiveBoardId } = props;
  return <DefaultLayout data={data} setActiveBoardId={setActiveBoardId} />;
}

export default Home;
