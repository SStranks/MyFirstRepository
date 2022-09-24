import { Suggestion, Comments, Form, UtilityBar } from '../components';
import styles from './_FeedbackDetail.module.scss';

function FeedbackDetail() {
  return (
    <>
      <nav>
        <UtilityBar />
      </nav>
      <main>
        <Suggestion />
        <Comments />
        <Form />
      </main>
    </>
  );
}

export default FeedbackDetail;
