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
  const { invoices } = props;
  const [searchParams] = useSearchParams();
  const invoiceId = searchParams.get('invoiceId');
  const invoice = invoices?.find((invoiceObj) => invoiceObj.id === invoiceId);

  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <nav>
          <UtilityBarFeedback />
        </nav>
        <main className={styles.flex}>
          {invoice ? (
            <Suggestion
              id={invoice.id}
              upvotes={invoice.upvotes}
              title={invoice.title}
              description={invoice.description}
              category={invoice.category}
              active={false}
              comments={invoice.comments}
            />
          ) : undefined}
          <CommentsList />
          <FormCommentAdd />
        </main>
      </div>
    </div>
  );
}

export default FeedbackDetail;
