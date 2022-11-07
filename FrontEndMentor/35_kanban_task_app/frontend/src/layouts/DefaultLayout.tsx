import Aside from '#Components/aside/Aside';
import Main from '#Components/main/Main';
import Nav from '#Components/nav/Nav';

import styles from './_DefaultLayout.module.scss';

function DefaultLayout(): JSX.Element {
  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.container__subcontainer}>
        <Aside />
        <Main />
      </div>
    </div>
  );
}

export default DefaultLayout;
