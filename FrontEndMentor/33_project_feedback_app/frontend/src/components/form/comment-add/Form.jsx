/* eslint-disable react/prop-types */
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useUser } from '../../../context/UserContext';
import ApiService from '../../../services/Services';
import ButtonSubmit from '../../custom/button/ButtonSubmit';
import InputTextArea from '../../custom/textarea/InputTextArea';
import styles from './_Form.module.scss';

function Form(props) {
  const { requestId } = props;
  const [charsRemain, setCharsRemain] = useState(250);
  const user = useUser();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formElement = e.target;
    const isValid = formElement.checkValidity();

    formElement.classList.add(styles.form__submitted);

    // Focus on first invalid input
    const firstInvalidInput = formElement.querySelector(':invalid');
    firstInvalidInput?.focus();

    // Submit if valid
    if (isValid) {
      const dataObject = new FormData(formElement);
      const { comment: content } = Object.fromEntries(dataObject.entries());

      const requestBody = { user, content };
      const responseData = await ApiService.postComment(
        requestId,
        undefined,
        requestBody
      );

      if (responseData) {
        // TODO:  Reload page - React Query
        toast.success('Comment Posted!');
      } else {
        toast.error('Comment Posting Failed');
      }
    }
  };

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <h3 className={styles.form__title}>Add Comment</h3>
      <InputTextArea
        name="comment"
        id="comment"
        onChangeCallback={(a, b) => setCharsRemain(a - b)}
        placeholder="Type your comment here"
        maxLength={250}
        required
      />
      <div className={styles.form__bar}>
        <p>{charsRemain} Characters left</p>
        <div className={styles.form__btnPost}>
          <ButtonSubmit
            text="Post Comment"
            disabled={false}
            classList={['bg-magenta']}
          />
        </div>
      </div>
    </form>
  );
}

export default Form;
