import DefaultLayout from '#Layouts/DefaultLayout';

type ElemProps = {
  [key: string]: Record<string, unknown>;
};

function Home(props: ElemProps): JSX.Element {
  const { data } = props;
  return <DefaultLayout data={data} />;
}

export default Home;
