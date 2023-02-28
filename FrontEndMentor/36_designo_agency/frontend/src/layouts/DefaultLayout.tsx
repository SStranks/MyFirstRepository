import styles from './_DefaultLayout.module.scss';

type ElemProps = {
  children: JSX.Element;
};

function DefaultLayout(props: ElemProps): JSX.Element {
  const { children } = props;

  return (
    <div className={styles.container}>
      <div className={styles['container__sub-container']}>{children}</div>
    </div>
  );
}

export default DefaultLayout;
