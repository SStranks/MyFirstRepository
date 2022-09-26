import IconArrowUp from '../../assets/svg/shared/icon-arrow-up.svg';
import IconMessage from '../../assets/svg/shared/icon-comments.svg';
import Tag from '../custom/tag/Tag';
import styles from './_SuggestionsList.module.scss';

// Development Data
import JSONData from '../../data/data.json';

function SuggestionsList() {
  const list = JSONData.productRequests.map((el) => (
    <div className={styles.item} key={el.id}>
      <div className={styles.item__vote}>
        <img src={IconArrowUp} alt="" />
        <span>{el.upvotes}</span>
      </div>
      <div className={styles.item__suggestion}>
        <h3>{el.title}</h3>
        <p>{el.description}</p>
        <Tag
          title={`${el.category[0].toUpperCase()}${el.category.slice(1)}`}
          active={false}
        />
      </div>
      <div className={styles.item__comment}>
        <img src={IconMessage} alt="" />
        <span className={!el.comments ? `${styles['no-comments']}` : ''}>
          {el.comments ? el.comments.length : '0'}
        </span>
      </div>
    </div>
  ));

  return <div className={styles.list}>{list}</div>;
}

export default SuggestionsList;
