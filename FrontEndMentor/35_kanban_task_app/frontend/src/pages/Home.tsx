import DefaultLayout from '#Layouts/DefaultLayout';
import { TBoard, TBoardInfo } from '#Types/types';

type ElemProps = {
  boardData: { boards: TBoardInfo; activeBoard: TBoard };
  activeBoardId: string;
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>;
};

function Home(props: ElemProps): JSX.Element {
  const { boardData, activeBoardId, setActiveBoardId } = props;
  return (
    <DefaultLayout
      boardData={boardData}
      activeBoardId={activeBoardId}
      setActiveBoardId={setActiveBoardId}
    />
  );
}

export default Home;
