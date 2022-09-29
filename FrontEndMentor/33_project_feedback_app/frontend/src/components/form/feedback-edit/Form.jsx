import IconEditFeedback from '../../../assets/svg/shared/icon-edit-feedback.svg';
import Button from '../../custom/button/Button';
import ButtonSubmit from '../../custom/button/ButtonSubmit';
import styles from './_Form.module.scss';

function Form() {
  // Temporary Dev
  const feedback = 'Add a dark theme option';

  return (
    <div className={styles.form}>
      <img className={styles.form__icon} src={IconEditFeedback} alt="" />
      <p className={styles.form__title}>Editing &lsquo;{feedback}&lsquo;</p>
      <div className={styles.form__feedback}>
        <h4>Feedback Title</h4>
        <p>Add a short, descriptive headline</p>
        <input type="text" />
      </div>
      <div className={styles.form__category}>
        <h4>Category</h4>
        <p>Choose a category for your feedback</p>
        <input type="text" placeholder="Feature" />
      </div>
      <div className={styles.form__status}>
        <h4>Update Status</h4>
        <p>Change feedback state</p>
        <input type="text" placeholder="Planned" />
      </div>
      <div className={styles.form__detail}>
        <h4>Feedback Detail</h4>
        <p>
          Include any specific comments on what should be improved, added, etc
        </p>
        <textarea name="" id="" cols="30" rows="10" />
      </div>
      <div className={styles.form__bar}>
        <ButtonSubmit
          text="Delete"
          disabled={false}
          classList={['w-94', 'bg-red']}
        />
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
    </div>
  );
}

export default Form;
