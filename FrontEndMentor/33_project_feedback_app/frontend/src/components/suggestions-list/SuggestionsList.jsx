import NoFeedbackImg from '../../assets/svg/shared/illustration-empty.svg';
import Suggestion from '../suggestion/Suggestion';
import styles from './_SuggestionsList.module.scss';

// Development Data
import JSONData from '../../data/data.json';

function SuggestionsList() {
  const list = JSONData.productRequests.map((el) => (
    <Suggestion
      key={el.id}
      id={el.id}
      upvotes={el.upvotes}
      title={el.title}
      description={el.description}
      category={el.category}
      active={false}
      comments={el.comments}
    />
  ));

  return list ? (
    <div className={styles.list}>{list}</div>
  ) : (
    <div className={styles['no-list']}>
      <img src={NoFeedbackImg} alt="" />
      <span>There is no feedback yet.</span>
      <p>
        Got a suggestion? Found a bug that needs to be squashed? <br /> We love
        hearing about new ideas to improve our app
      </p>
      <button className={styles.btnPlaceholder} type="button">
        + Add Feedback
      </button>
    </div>
  );
}

export default SuggestionsList;
