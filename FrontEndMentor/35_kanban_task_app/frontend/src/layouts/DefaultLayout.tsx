import Aside from '#Components/aside/Aside';
import Main from '#Components/main/Main';
import Nav from '#Components/nav/Nav';

import styles from './_DefaultLayout.module.scss';

type ElemProps = {
  [key: string]: Record<string, unknown>;
};

function DefaultLayout(props: ElemProps): JSX.Element {
  const { data } = props;
  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.container__subcontainer}>
        <Aside boards={data.boards} />
        <Main boardData={data.boardData} />
      </div>
    </div>
  );
}

export default DefaultLayout;
