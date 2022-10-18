import Main from '../components/main/Main';
import SideBar from '../components/sidebar/SideBar';
import styles from './DefaultLayout.module.scss';

function DefaultLayout(): JSX.Element {
  return (
    <div className={styles.container}>
      <SideBar />
      <Main />
    </div>
  );
}

export default DefaultLayout;
