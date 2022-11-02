import Status from '#Components/custom/buttons/status/Status';
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
        #<span className={styles['container__code--black']}>{invoiceId}</span>
      </p>
      <p className={styles.container__date}>Due {paymentDue}</p>
      <p className={styles.container__name}>{clientName}</p>
      <p className={styles.container__amount}>£ {total.toFixed(2)}</p>
      <div className={styles.container__status}>
        <Status status={status} />
      </div>
      <div className={styles.container__arrowright}>
        <img src={ArrowRight} alt="" />
      </div>
    </div>
  );
}

export default Invoice;
