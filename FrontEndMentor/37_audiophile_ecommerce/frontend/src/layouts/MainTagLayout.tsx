import styles from './_MainTagLayout.module.scss';

type ElemProps = {
  appendClass: string;
  children: React.ReactNode;
};

function MainTagLayout(props: ElemProps): JSX.Element {
  const { appendClass, children } = props;

  return <main className={`${styles.main} ${appendClass}`}>{children}</main>;
}

export default MainTagLayout;
