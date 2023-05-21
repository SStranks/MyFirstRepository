import { PropsWithChildren } from 'react';
import styles from './_MainTagLayout.module.scss';

interface ElemProps extends React.HTMLProps<HTMLElement> {
  appendClass?: string;
  testId?: string;
}

function MainTagLayout(props: PropsWithChildren<ElemProps>): JSX.Element {
  const { appendClass, children, id, testId } = props;

  return (
    <main
      className={`${styles.main} ${appendClass}`}
      id={id}
      data-testid={testId}>
      <div className={styles.main__container}>{children}</div>
    </main>
  );
}

export default MainTagLayout;
