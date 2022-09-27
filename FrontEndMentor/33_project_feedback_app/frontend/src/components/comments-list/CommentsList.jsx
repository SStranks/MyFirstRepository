import { Comment } from '../../components';

// Development Data
import JSONData from '../../data/data.json';

function Comments() {
  // Temporary Development Data
  const JSONComment = JSONData.productRequests[0].comments;
  const comment = JSONComment.content;
  const { image, name, username } = JSONComment.user;

  return (
    <div className={styles.list}>
      <h3>{numberOfComments} Comments</h3>
      <Comment />
    </div>
  );
}

export default Comments;
