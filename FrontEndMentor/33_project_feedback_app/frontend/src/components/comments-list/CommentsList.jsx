/* eslint-disable react/prop-types */
import { Fragment } from 'react';
import Comment from '../comment/Comment.jsx';
import styles from './_CommentsList.module.scss';

// Development Data
import JSONData from '../../data/data.json';

function Comments(props) {
  const { request } = props;
  // Temporary Development Data
  const JSONComment = JSONData.productRequests[1].comments;
  const numberOfComments = request?.comments.length;
  // const comment = JSONComment.content;
  // const { image, name, username } = JSONComment.user;

  const commentsList = JSONComment.map((el, i, arr) => (
    <Fragment key={el.id}>
      <Comment
        name={el.user.name}
        username={el.user.username}
        content={el.content}
        parent
        replyingTo={el.replyingTo}
        replies={el.replies}
      />
      {i !== arr.length - 1 ? <div className={styles.list__break} /> : ''}
    </Fragment>
  ));

  return (
    <div className={styles.list}>
      <h3>{numberOfComments} Comments</h3>
      {commentsList}
    </div>
  );
}

export default Comments;
