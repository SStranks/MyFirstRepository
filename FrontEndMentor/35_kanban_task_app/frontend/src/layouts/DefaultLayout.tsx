import Aside from '#Components/aside/Aside';
import Main from '#Components/main/Main';
import Nav from '#Components/nav/Nav';
import styles from './DefaultLayout.module.scss';

function DefaultLayout(): JSX.Element {
  return (
    <div className={styles.container}>
      <Nav />
      <Aside />
      <Main />
    </div>
  );
}

export default DefaultLayout;
