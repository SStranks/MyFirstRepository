import { useRef, useState } from 'react';
import IconNewFeedback from '../../../assets/svg/shared/icon-new-feedback.svg';
import Button from '../../custom/button/Button';
import ButtonSubmit from '../../custom/button/ButtonSubmit';
import Textarea from '../../custom/textarea/Textarea';
import styles from './_Form.module.scss';

function Form() {
  const [formError, setFormError] = useState(false);
  const textarea = useRef();

  const submitBtnClickHandler = (e) => {
    e.preventDefault();
    if (textarea.current.value.length === 0) {
      setFormError(true);
    }
  };

  return (
    <form className={styles.form} onSubmit={submitBtnClickHandler}>
      <img className={styles.form__icon} src={IconNewFeedback} alt="" />
      <p className={styles.form__title}>Create New Feedback</p>
      <div className={styles.form__feedback}>
        <h4>Feedback Title</h4>
        <p>Add a short, descriptive headline</p>
        <input type="text" />
      </div>
      <div className={styles.form__category}>
        <h4>Category</h4>
        <p>Choose a category for your feedback</p>
        <input type="text" />
      </div>
      <div className={styles.form__detail}>
        <h4>Feedback Detail</h4>
        <p>
          Include any specific comments on what should be improved, added, etc
        </p>
        <Textarea
          name="feedback-detail"
          id="feedback-detail"
          cols={30}
          rows={10}
          formError={formError}
          setFormError={setFormError}
          innerRef={textarea}
        />
      </div>
      <div className={styles.form__bar}>
        <Button
          text="Cancel"
          disabled={false}
          classList={['w-94', 'bg-navy-blue']}
        />
        <ButtonSubmit
          text="Add Feedback"
          disabled={false}
          classList={['w-144', 'bg-magenta']}
        />
      </div>
    </form>
  );
}

export default Form;
