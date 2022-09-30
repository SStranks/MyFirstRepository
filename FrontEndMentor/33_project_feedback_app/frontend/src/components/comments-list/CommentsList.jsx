import Comment from '../comment/Comment.jsx';
import styles from './_CommentsList.module.scss';

// Development Data
import JSONData from '../../data/data.json';

function Comments() {
  // Temporary Development Data
  const JSONComment = JSONData.productRequests[1].comments;
  // Temporary Comment Total - Calculate from Backend
  const numberOfComments = 4;
  // const comment = JSONComment.content;
  // const { image, name, username } = JSONComment.user;

  const commentsList = JSONComment.map((comment) => (
    <Comment key={comment.id} props={comment} />
  ));

  return (
    <div className={styles.list}>
      <h3>{numberOfComments} Comments</h3>
      {commentsList}
    </div>
  );
}

export default Comments;
