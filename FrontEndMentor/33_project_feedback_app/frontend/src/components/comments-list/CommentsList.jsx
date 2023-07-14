/* eslint-disable react/prop-types */
import { Fragment } from 'react';
import Comment from '../comment/Comment.jsx';
import styles from './_CommentsList.module.scss';

// Development Data
// import JSONData from '../../data/data.json';
// import HttpAPI from '../../services/httpAPI.js';
import useComments from '../../hooks/useGetAllComments.js';

// const API = new HttpAPI();

function Comments(props) {
  const { request } = props;
  const [comments, isLoading, error] = useComments(request?.id);
  const numberOfComments = comments?.results;

  const commentsList = comments?.resComments.map((el, i, arr) => (
    <Fragment key={el.id}>
      <Comment
        commentId={el.id}
        requestId={request.id}
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
