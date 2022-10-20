import styles from './Status.module.scss';

type StatusProps = {
  status: string;
};

function Status(props: StatusProps): JSX.Element {
  const { status } = props;

  return (
    <div className={`${styles.container} ${styles[`container--${status}`]}`}>
      <div className={styles.container__bullet} />
      <p>{`${status[0].toUpperCase()}${status.slice(1)}`}</p>
    </div>
  );
}

export default Status;
