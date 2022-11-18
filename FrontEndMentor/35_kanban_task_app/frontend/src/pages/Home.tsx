import DefaultLayout from '#Layouts/DefaultLayout';
import { Board, BoardInfo } from '#Types/types';

type ElemProps = {
  data: { boards: BoardInfo; activeBoard: Board };
  activeBoardId: string;
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>;
};

function Home(props: ElemProps): JSX.Element {
  const { data, setActiveBoardId, activeBoardId } = props;
  return (
    <DefaultLayout
      data={data}
      activeBoardId={activeBoardId}
      setActiveBoardId={setActiveBoardId}
    />
  );
}

export default Home;
