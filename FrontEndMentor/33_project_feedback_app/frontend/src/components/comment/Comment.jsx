/* eslint-disable react/prop-types */
import { useState } from 'react';
import ProfileIcon from '../../assets/img/image-elijah.jpg';
import { useUser } from '../../context/UserContext';
import ApiClient from '../../services/ApiHttp';
import ButtonSubmit from '../custom/button/ButtonSubmit';
import InputTextarea from '../custom/textarea/InputTextArea';
import styles from './_Comment.module.scss';

const API = new ApiClient();

function Comment(props) {
  const {
    requestId,
    commentId,
    name,
    username,
    content,
    parent,
    replies,
    replyingTo,
  } = props;
  const [formActive, setFormActive] = useState(false);
  const user = useUser();

  const btnReplyClickHandler = () => {
    setFormActive(true);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formElement = e.target;
    const isValid = formElement.checkValidity();

    formElement.classList.add(styles.comment__form__submitted);

    // Focus on first invalid input
    const firstInvalidInput = formElement.querySelector(':invalid');
    firstInvalidInput?.focus();

    // Submit if valid
    if (isValid) {
      const dataObject = new FormData(formElement);
      const { comment } = Object.fromEntries(dataObject.entries());

      try {
        const res = await API.post(
          `/comments?request=${requestId}&comment=${commentId}`,
          {
            user,
            content: comment,
          }
        );
        console.log(res);
        // TODO:  Pop up success with toast?
      } catch (error) {
        // TODO:  Pop up error with toast?
        console.log('ERROR', error);
      }
    }
  };

  const commentReplies = replies
    ? replies.map((el) => (
        <div className={styles['comment__replies-container']} key={el.id}>
          <Comment
            requestId={requestId}
            commentId={el.id}
            replyingTo={el.replyingTo}
            replies={el.replies}
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
        <form
          className={styles.comment__form}
          onSubmit={onSubmit}
          id="reply"
          noValidate>
          <InputTextarea
            name="comment"
            maxLength={250}
            placeholder="Type your reply here"
            required
          />
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

export default Comment;
