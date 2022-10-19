import ArrowRight from '#Svg/icon-arrow-right.svg';
import styles from './Invoice.module.scss';

function Invoice(): JSX.Element {
  // Temporary Dev
  const invoiceCode = 'RT3080';
  const date = '19 Aug 2021';
  const name = 'Jensen Huang';
  const amount = '1,800.90';
  const status = 'Paid';

  return (
    <div className={styles.container}>
      <p className={styles.container__code}>
        #<p className={styles['container__code--black']}>{invoiceCode}</p>
      </p>
      <p className={styles.container__date}>Due {date}</p>
      <p className={styles.container__name}>{name}</p>
      <p className={styles.container__amount}>£ {amount}</p>
      <div className={styles.container__status}>
        <div className={styles.container__status__bullet} />
        <p>{status}</p>
      </div>
      <div className={styles.container__arrowright}>
        <img src={ArrowRight} alt="" />
      </div>
    </div>
  );
}

export default Invoice;
