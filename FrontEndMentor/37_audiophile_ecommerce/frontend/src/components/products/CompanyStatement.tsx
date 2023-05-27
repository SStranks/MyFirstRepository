import styles from './_CompanyStatement.module.scss';

type ElemProps = {
  appendClass?: string;
};

function CompanyStatement(props: ElemProps): JSX.Element {
  const { appendClass } = props;

  return (
    <article
      className={`${styles.card} ${appendClass}`}
      aria-labelledby="company statement">
      <div className={styles.card__info}>
        <h2 className={styles.card__title} id="company statement">
          Bringing you the <span>best</span> audio gear
        </h2>
        <p className={styles.card__statement}>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <picture className={styles.card__picture}>
        <source
          srcSet="/img/shared/desktop/image-best-gear.webp"
          media="(min-width: 1024px)"
          width="540"
          height="588"
        />
        <source
          srcSet="/img/shared/tablet/image-best-gear.webp"
          media="(min-width: 576px)"
          width="1378"
          height="600"
        />
        <source
          srcSet="/img/shared/mobile/image-best-gear.webp"
          media="(max-width: 575px)"
          width="654"
          height="600"
        />
        <img
          className={styles.card__img}
          src="/img/shared/desktop/image-best-gear.webp"
          alt="Furnishing our customers with the best gear"
        />
      </picture>
    </article>
  );
}

export default CompanyStatement;
