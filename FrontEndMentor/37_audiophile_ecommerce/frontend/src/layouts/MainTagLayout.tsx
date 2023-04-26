import styles from './_MainTagLayout.module.scss';

type ElemProps = {
  appendClass: string;
  children: React.ReactNode;
};

function MainTagLayout(props: ElemProps): JSX.Element {
  const { appendClass, children } = props;

  return (
    <main className={`${styles.main} ${appendClass}`}>
      <div className={styles.main__container}>{children}</div>
    </main>
  );
}

export default MainTagLayout;
