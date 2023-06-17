import { PropsWithChildren } from 'react';
import SideBar from '../components/sidebar/SideBar';
import styles from './DefaultLayout.module.scss';

function DefaultLayout(props: PropsWithChildren): JSX.Element {
  const { children } = props;

  return (
    <div className={styles.container}>
      <SideBar />
      {children}
    </div>
  );
}

export default DefaultLayout;
