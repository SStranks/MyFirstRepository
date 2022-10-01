import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProfileIcon from '../../assets/img/image-elijah.jpg';
import ButtonSubmit from '../custom/button/ButtonSubmit';
import Textarea from '../custom/textarea/Textarea';
import styles from './_Comment.module.scss';

function Comment(props) {
  const { name, username, comment, reply, replyingTo } = props;

  return (
    <div className={styles.comment}>
      <img className={styles.comment__img} src={ProfileIcon} alt="" />
      <div className={styles.comment__flex}>
        <div>
          <h3 className={styles.comment__name}>{name}</h3>
          <p className={styles.comment__username}>@{username}</p>
        </div>
        <Link className={styles.comment__btnreply} to="/">
          Reply
        </Link>
      </div>
      <p className={styles.comment__content}>
        {reply ? (
          <span className={styles.comment__replyto}>@{replyingTo}</span>
        ) : (
          ''
        )}
        {comment}
      </p>
      <form className={styles.comment__form} action="submit">
        <Textarea className={styles.comment__textarea} />
        <ButtonSubmit classList={['w-117', 'bg-magenta']} text="Post Reply" />
      </form>
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
  name: 'Elijah DEFAULT',
  username: 'hexagon.DEFAULT',
  comment:
    'DEFAULT COMMENT Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.',
  reply: PropTypes.bool,
  replyingTo: 'Hummingbird1DEFAULT',
};

export default Comment;
