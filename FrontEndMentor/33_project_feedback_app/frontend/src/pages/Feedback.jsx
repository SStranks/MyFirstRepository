/* eslint-disable react/prop-types */
import FeedbackDetail from '../layouts/FeedbackDetail';

function Feedback(props) {
  const { invoices } = props;
  return <FeedbackDetail invoices={invoices} />;
}

export default Feedback;
