import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ProfileIcon from '../../assets/img/image-elijah.jpg';
import styles from './_Comment.module.scss';

function Comment(props) {
  const { name, username, comment, reply, replyingTo } = props;

  return (
    <div className={styles.grid}>
      <img src={ProfileIcon} alt="" />
      <h3>{name}</h3>
      <p>@{username}</p>
      <Link to="/">Reply</Link>
      <p>
        {reply ? <span>@{replyingTo}</span> : ''}
        {comment}
      </p>
    </div>
  );
}

Comment.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  comment: PropTypes.string,
  reply: PropTypes.bool,
  replyingTo: PropTypes.string,
};

Comment.defaultProps = {
  name: PropTypes.string,
  username: PropTypes.string,
  comment: PropTypes.string,
  reply: PropTypes.bool,
  replyingTo: PropTypes.string,
};

export default Comment;
