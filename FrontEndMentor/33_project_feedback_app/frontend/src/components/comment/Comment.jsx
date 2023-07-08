import PropTypes from 'prop-types';
import { useState } from 'react';
import ProfileIcon from '../../assets/img/image-elijah.jpg';
import ButtonSubmit from '../custom/button/ButtonSubmit';
import Textarea from '../custom/textarea/InputTextArea';
import styles from './_Comment.module.scss';

function Comment(props) {
  const { name, username, content, parent, replies, replyingTo } = props;
  const [formActive, setFormActive] = useState(false);

  const btnReplyClickHandler = () => {
    setFormActive(true);
  };

  const commentReplies = replies
    ? replies.map((el, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className={styles['comment__replies-container']} key={i}>
          <Comment
            replyingTo={el.replyingTo}
            content={el.content}
            name={el.user.name}
            username={el.user.username}
            parent={false}
          />
        </div>
      ))
    : '';

  return (
    <div className={styles.comment}>
      <img className={styles.comment__img} src={ProfileIcon} alt="" />
      <div className={styles.comment__flex}>
        <div>
          <h3 className={styles.comment__name}>{name}</h3>
          <p className={styles.comment__username}>@{username}</p>
        </div>
        <button
          className={styles.comment__btnreply}
          onClick={btnReplyClickHandler}
          type="button">
          Reply
        </button>
      </div>
      {parent && replies ? (
        // Vertical line grid-row-end: Our CSS Grid is implicit, therefore we can't specify a span value in the CSS as the number is dynamic.
        <div
          className={styles['comment__vertical-line']}
          style={{ gridRowEnd: `${replies.length + 2}` }}
        />
      ) : (
        ''
      )}
      <p className={styles.comment__content}>
        {replyingTo ? (
          <span className={styles.comment__replyto}>@{replyingTo}</span>
        ) : (
          ''
        )}
        {content}
      </p>
      {formActive ? (
        <form className={styles.comment__form} action="submit" id="reply">
          <Textarea />
          <div className={styles.comment__form__btn}>
            <ButtonSubmit
              classList={['w-117', 'bg-magenta']}
              text="Post Reply"
            />
          </div>
        </form>
      ) : (
        ''
      )}
      {replies ? commentReplies : ''}
    </div>
  );
}

Comment.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  content: PropTypes.string,
  parent: PropTypes.bool,
  replyingTo: PropTypes.string,
  replies: PropTypes.arrayOf(PropTypes.shape()),
};

Comment.defaultProps = {
  name: 'Elijah DEFAULT',
  username: 'hexagon.DEFAULT',
  content:
    'DEFAULT COMMENT Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.',
  parent: undefined,
  replyingTo: undefined,
  replies: undefined,
};

export default Comment;
