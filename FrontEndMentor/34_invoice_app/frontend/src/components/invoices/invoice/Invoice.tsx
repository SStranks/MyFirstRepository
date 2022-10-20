import ArrowRight from '#Svg/icon-arrow-right.svg';
import styles from './Invoice.module.scss';

type CompProps = {
  invoiceId: string;
  paymentDue: string;
  clientName: string;
  total: number;
  status: string;
};

function Invoice(props: CompProps): JSX.Element {
  const { invoiceId, paymentDue, clientName, total, status } = props;

  return (
    <div className={styles.container}>
      <p className={styles.container__code}>
        #<p className={styles['container__code--black']}>{invoiceId}</p>
      </p>
      <p className={styles.container__date}>Due {paymentDue}</p>
      <p className={styles.container__name}>{clientName}</p>
      <p className={styles.container__amount}>£ {total.toFixed(2)}</p>
      <div className={styles.container__status}>
        <div className={styles.container__status__bullet} />
        <p>{`${status[0].toUpperCase()}${status.slice(1)}`}</p>
      </div>
      <div className={styles.container__arrowright}>
        <img src={ArrowRight} alt="" />
      </div>
    </div>
  );
}

export default Invoice;
