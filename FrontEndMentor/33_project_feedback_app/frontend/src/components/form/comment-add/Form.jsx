/* eslint-disable react/prop-types */
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useUser } from '../../../context/UserContext';
import ApiService from '../../../services/Services';
import ButtonSubmit from '../../custom/button/ButtonSubmit';
import InputTextArea from '../../custom/textarea/InputTextArea';
import styles from './_Form.module.scss';

const postComment = async (variables) => {
  const { requestId: _requestId, _, requestBody: _requestBody } = variables;
  try {
    const responseData = await ApiService.postComment(
      _requestId,
      _,
      _requestBody
    );
    return responseData;
  } catch (error) {
    throw new Error(error.message);
  }
};

function Form(props) {
  const { requestId } = props;
  const [charsRemain, setCharsRemain] = useState(250);
  const user = useUser();
  const formRef = useRef(null);
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: postComment,
  });

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
      mutate(
        { requestId, undefined, requestBody },
        {
          onSuccess: () => {
            toast.success('Comment Posted!');
            formRef.current.reset();
            formRef.current.classList.remove(styles.form__submitted);
            setCharsRemain(250);
            queryClient.invalidateQueries({ queryKey: ['requests'] });
          },
          onError: () => toast.error('Comment Posting Failed'),
        }
      );
    }
  };

  return (
    <form className={styles.form} onSubmit={onSubmit} ref={formRef} noValidate>
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
