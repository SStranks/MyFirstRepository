/* eslint-disable react/prop-types */
import { useSearchParams } from 'react-router-dom';
import {
  CommentsList,
  FormCommentAdd,
  Suggestion,
  UtilityBarFeedback,
} from '../components';

import styles from './_FeedbackDetail.module.scss';

function FeedbackDetail(props) {
  const { requests } = props;
  const [searchParams] = useSearchParams();
  const requestId = searchParams.get('requestId');
  const request = requests?.find((requestObj) => requestObj.id === requestId);

  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <nav>
          <UtilityBarFeedback request={request} />
        </nav>
        <main className={styles.flex}>
          {request ? (
            <Suggestion
              id={request.id}
              upvotes={request.upvotes}
              title={request.title}
              description={request.description}
              category={request.category}
              active={false}
              comments={request.totalComments}
            />
          ) : undefined}
          <CommentsList request={request} />
          <FormCommentAdd requestId={requestId} />
        </main>
      </div>
    </div>
  );
}

export default FeedbackDetail;
