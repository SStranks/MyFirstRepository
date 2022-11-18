import DefaultLayout from '#Layouts/DefaultLayout';
import { Board, BoardInfo } from '#Types/types';

type ElemProps = {
  boardData: { boards: BoardInfo; activeBoard: Board };
  activeBoardId: string;
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>;
};

function Home(props: ElemProps): JSX.Element {
  const { boardData, setActiveBoardId, activeBoardId } = props;
  return (
    <DefaultLayout
      boardData={boardData}
      activeBoardId={activeBoardId}
      setActiveBoardId={setActiveBoardId}
    />
  );
}

export default Home;
