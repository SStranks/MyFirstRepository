import PropTypes from 'prop-types';
import IconArrowUp from '../../assets/svg/shared/icon-arrow-up.svg';
import IconMessage from '../../assets/svg/shared/icon-comments.svg';
import Tag from '../custom/tag/Tag';

import styles from './_Suggestion.module.scss';

function Suggestion(props) {
  const { id, upvotes, title, description, category, active, comments } = props;

  return (
    <div className={styles.item} key={id}>
      <div className={styles.item__vote}>
        <img src={IconArrowUp} alt="" />
        <span>{upvotes}</span>
      </div>
      <div className={styles.item__suggestion}>
        <h3>{title}</h3>
        <p>{description}</p>
        <Tag
          title={`${category[0].toUpperCase()}${category.slice(1)}`}
          active={active}
        />
      </div>
      <div className={styles.item__comment}>
        <img src={IconMessage} alt="" />
        <span className={!comments ? `${styles['no-comments']}` : ''}>
          {comments ? comments.length : '0'}
        </span>
      </div>
    </div>
  );
}

Suggestion.propTypes = {
  id: PropTypes.number,
  upvotes: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  active: PropTypes.bool,
  comments: PropTypes.arrayOf(PropTypes.shape()),
};

Suggestion.defaultProps = {
  id: PropTypes.number,
  upvotes: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  category: PropTypes.string,
  active: PropTypes.bool,
  comments: undefined,
};

export default Suggestion;
