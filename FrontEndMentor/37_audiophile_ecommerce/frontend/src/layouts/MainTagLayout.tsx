import styles from './_MainTagLayout.module.scss';

type ElemProps = {
  children: React.ReactNode;
};

function MainTagLayout(props: ElemProps): JSX.Element {
  const { children } = props;

  return <main className={styles.main}>{children}</main>;
}

export default MainTagLayout;
