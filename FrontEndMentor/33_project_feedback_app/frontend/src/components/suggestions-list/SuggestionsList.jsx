/* eslint-disable react/prop-types */
import { useState } from 'react';
import NoFeedbackImg from '../../assets/svg/shared/illustration-empty.svg';
import Button from '../custom/button/Button';
import FormFeedbackNew from '../form/feedback-new/Form';
import Modal from '../modal/Modal';
import Suggestion from '../suggestion/Suggestion';
import styles from './_SuggestionsList.module.scss';

function SuggestionsList(props) {
  const { invoices, isLoading } = props;
  const [modalOpen, setModalOpen] = useState(false);

  const list = invoices?.reduce((acc, cur) => {
    if (cur.status === 'suggestion')
      acc.push(
        <Suggestion
          key={cur.id}
          id={cur.id}
          upvotes={cur.upvotes}
          title={cur.title}
          description={cur.description}
          category={cur.category}
          active={false}
          comments={cur.comments}
        />
      );
    return acc;
  }, []);

  if (isLoading || !invoices) return false;

  return list.length > 0 ? (
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
