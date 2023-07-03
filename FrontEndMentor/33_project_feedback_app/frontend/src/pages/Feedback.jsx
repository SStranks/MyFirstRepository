/* eslint-disable react/prop-types */
import FeedbackDetail from '../layouts/FeedbackDetail';

function Feedback(props) {
  const { requests } = props;
  return <FeedbackDetail requests={requests} />;
}

export default Feedback;
