import styles from './_CompanyStatement.module.scss';

type ElemProps = {
  appendClass: string;
};

function CompanyStatement(props: ElemProps): JSX.Element {
  const { appendClass } = props;

  return (
    <div className={`${styles.card} ${appendClass}`}>
      <div className={styles.card__info}>
        <p className={styles.card__title}>
          Bringing you the <span>best</span> audio gear
        </p>
        <p className={styles.card__statement}>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <img
        className={styles.card__img}
        src="/img/shared/desktop/image-best-gear.jpg"
        alt=""
      />
    </div>
  );
}

export default CompanyStatement;
