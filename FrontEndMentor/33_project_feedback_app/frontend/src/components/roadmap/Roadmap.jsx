import IconArrowUp from '../../assets/svg/shared/icon-arrow-up.svg';
import IconMessage from '../../assets/svg/shared/icon-comments.svg';
import Tag from '../custom/tag/Tag';
import styles from './_Roadmap.module.scss';

function Roadmap() {
  return (
    <div className={styles.outerCard}>
      {/* Colour top strip */}
      <div className={styles.innerCard}>
        <div className={styles.innerCard__category}>
          <div className={styles.innerCard__bullet} />
          <p>Planned</p>
        </div>
        <h3 className={styles.innerCard__title}>More comprehensive reports</h3>
        <p className={styles.innerCard__content}>
          It would be great to see a more detailed breakdown of solutions
        </p>
        <Tag title="Feature" active={false} />
        <div className={styles.innerCard__UI}>
          <div className={styles.innerCard__vote}>
            <img src={IconArrowUp} alt="" />
            <span>{123}</span>
          </div>
          <div className={styles.innerCard__comment}>
            <img src={IconMessage} alt="" />
            <span>{1}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
