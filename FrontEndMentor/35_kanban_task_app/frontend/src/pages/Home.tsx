import type { IBoard } from '#Shared/types';
import DefaultLayout from '#Layouts/DefaultLayout';
import { TBoardInfo } from '#Types/types';

type ElemProps = {
  boardData: { boardsList: TBoardInfo; activeBoard: IBoard | undefined };
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
