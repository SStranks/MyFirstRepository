import IconMessage from '../../assets/svg/shared/icon-comments.svg';
import Tag from '../custom/tag/Tag';
import Upvote from '../custom/upvote/Upvote';
import styles from './_Roadmap.module.scss';

function Roadmap() {
  // Temporary Dev
  const upvotes = 123;

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
          <Upvote flexRow upvotes={upvotes} />
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
