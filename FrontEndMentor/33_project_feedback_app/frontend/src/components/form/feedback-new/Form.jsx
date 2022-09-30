import { useRef, useState } from 'react';
import IconNewFeedback from '../../../assets/svg/shared/icon-new-feedback.svg';
import Button from '../../custom/button/Button';
import ButtonSubmit from '../../custom/button/ButtonSubmit';
import Dropdown from '../../custom/dropdown/design2/Dropdown';
import InputText from '../../custom/input-text/InputText';
import Textarea from '../../custom/textarea/Textarea';
import styles from './_Form.module.scss';

function Form() {
  const [formError, setFormError] = useState({
    inputtext: false,
    textarea: false,
  });

  const textArea = useRef();
  const inputText = useRef();

  const submitBtnClickHandler = (e) => {
    e.preventDefault();

    const input1 = inputText.current.value.length;
    const input2 = textArea.current.value.length;

    if (!input1 || !input2) {
      return setFormError({
        inputtext: !input1,
        textarea: !input2,
      });
    }

    // TODO: Axios POST
    return '';
  };

  const categories = ['Feature', 'UI', 'UX', 'Enhancement', 'Bug'];

  return (
    <form className={styles.form} onSubmit={submitBtnClickHandler}>
      <img className={styles.form__icon} src={IconNewFeedback} alt="" />
      <p className={styles.form__title}>Create New Feedback</p>
      <div className={styles.form__feedback}>
        <h4>Feedback Title</h4>
        <p>Add a short, descriptive headline</p>
        <InputText
          id="feedback-title"
          name="feedback-title"
          formError={formError}
          setFormError={setFormError}
          innerRef={inputText}
        />
      </div>
      <div className={styles.form__category}>
        <h4>Category</h4>
        <p>Choose a category for your feedback</p>
        <Dropdown listItems={categories} />
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
          innerRef={textArea}
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
