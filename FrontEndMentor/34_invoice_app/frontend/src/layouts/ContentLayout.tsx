import { PropsWithChildren } from 'react';
import styles from './ContentLayout.module.scss';

function ContentLayout(props: PropsWithChildren): JSX.Element {
  const { children } = props;

  return (
    <div className={styles.container}>
      <div className={styles.container__subContainer}>{children}</div>
    </div>
  );
}

export default ContentLayout;
