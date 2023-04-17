import IconCheck from '#Svg/desktop/icon-check.svg';
import styles from './_OrderCompleteCard.module.scss';

function OrderCompleteCard(): JSX.Element {
  return (
    <div className={styles.containerTemp}>
      <div className={styles.card}>
        <div className={styles.card__circle}>
          <img className={styles.card__circle__check} src={IconCheck} alt="" />
        </div>
        <p className={styles.card__header}>thank you for your order</p>
        <p className={styles.card__subHeader}>
          You will receive an email conformation shortly
        </p>
        <div className="">aasdfsdf</div>
        <button className={styles.card__homeBtn} type="button">
          back to home
        </button>
      </div>
    </div>
  );
}

export default OrderCompleteCard;
