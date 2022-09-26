import {
  Comments,
  FormCommentAdd,
  Suggestion,
  UtilityBarFeedback,
} from '../components';

import styles from './_FeedbackDetail.module.scss';

// Development Data
import JSONData from '../data/data.json';

function FeedbackDetail() {
  const { id, upvotes, title, description, category, comments } =
    JSONData.productRequests[1];

  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <nav>
          <UtilityBarFeedback />
        </nav>
        <main>
          <Suggestion
            id={id}
            upvotes={upvotes}
            title={title}
            description={description}
            category={category}
            comments={comments}
          />
          <Comments />
          <FormCommentAdd />
        </main>
      </div>
    </div>
  );
}

export default FeedbackDetail;
