import { useState } from 'react';
import NoFeedbackImg from '../../assets/svg/shared/illustration-empty.svg';
import Button from '../custom/button/Button';
import FormFeedbackNew from '../form/feedback-new/Form';
import Modal from '../modal/Modal';
import Suggestion from '../suggestion/Suggestion';
import styles from './_SuggestionsList.module.scss';

// Development Data
import JSONData from '../../data/data.json';

function SuggestionsList() {
  const [modalOpen, setModalOpen] = useState(false);

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

  // TEMP DEV: .
  // Uncomment for no comments - comment out 'list' above
  // eslint-disable-next-line unicorn/no-null
  // const list = null;

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
      <div className={styles.btn}>
        <Button
          text="+ Add Feedback"
          disabled={false}
          classList={['bg-magenta']}
          onClick={() => setModalOpen(true)}
        />
      </div>
      <Modal handleClose={() => setModalOpen(false)} modalOpen={modalOpen}>
        <FormFeedbackNew
          cancelBtnOnClick={() => setModalOpen(false)}
          modalOpen={modalOpen}
        />
      </Modal>
    </div>
  );
}

export default SuggestionsList;
