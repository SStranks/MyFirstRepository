import styles from './_MainTagLayout.module.scss';

interface ElemProps extends React.HTMLProps<HTMLElement> {
  appendClass?: string;
  children: React.ReactNode;
}

function MainTagLayout(props: ElemProps): JSX.Element {
  const { appendClass, children, id } = props;

  return (
    <main className={`${styles.main} ${appendClass}`} id={id}>
      <div className={styles.main__container}>{children}</div>
    </main>
  );
}

export default MainTagLayout;
