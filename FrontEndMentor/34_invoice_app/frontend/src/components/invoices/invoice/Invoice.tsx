import Status from '#Components/custom/buttons/status/Status';
import ArrowRight from '#Svg/icon-arrow-right.svg';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const clickHandler = () => navigate(`/invoice/${invoiceId}`);

  return (
    // NOTE:  Fix jsx-al11y below.
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className={styles.container} onClick={clickHandler}>
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
