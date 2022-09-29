import { useRef, useState } from 'react';
import IconNewFeedback from '../../../assets/svg/shared/icon-new-feedback.svg';
import Button from '../../custom/button/Button';
import ButtonSubmit from '../../custom/button/ButtonSubmit';
import InputText from '../../custom/input-text/InputText';
import Textarea from '../../custom/textarea/Textarea';
import styles from './_Form.module.scss';

function Form() {
  const [formError, setFormError] = useState({
    inputtext1: false,
    inputtext2: false,
    textarea: false,
  });
  const textArea = useRef();
  const inputText1 = useRef();

  console.log('A:', formError);

  const submitBtnClickHandler = (e) => {
    e.preventDefault();

    // TODO: Insert middle form input and update setform error object below
    const input1 = inputText1.current.value.length;
    // const input2 = inputText2.current.value.length;
    const input3 = textArea.current.value.length;

    if (!input1 || !input3) {
      return setFormError({
        inputtext1: !input1,
        inputtext2: false,
        textarea: !input3,
      });
    }
    console.log('EH3?');
  };

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
          innerRef={inputText1}
        />
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
