import styles from './Main.module.scss';

function Main(): JSX.Element {
  return (
    <div className={styles.container}>
      <UtilityBar />
      <InvoiceList />
    </div>
  );
}

export default Main;
