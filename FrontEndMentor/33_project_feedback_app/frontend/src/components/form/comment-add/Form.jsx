import { useState } from 'react';
import ButtonSubmit from '../../custom/button/ButtonSubmit';
import styles from './_Form.module.scss';

function Form() {
  const [charsRemain, setCharsRemain] = useState(250);

  return (
    <form className={styles.form}>
      <h3 className={styles.form__title}>Add Comment</h3>
      <textarea
        className={styles.form__textarea}
        type="text"
        onChange={(e) => setCharsRemain(250 - e.target.value.length)}
        placeholder="Type your comment here"
        maxLength={250}
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
