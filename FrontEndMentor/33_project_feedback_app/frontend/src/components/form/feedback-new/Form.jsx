import IconNewFeedback from '../../../assets/svg/shared/icon-new-feedback.svg';
import styles from './_Form.module.scss';

function Form() {
  return (
    <div className={styles.form}>
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
        <textarea name="" id="" cols="30" rows="10" />
      </div>
      <div className={styles.form__bar}>
        <button type="button">Cancel</button>
        <button type="submit">Add Feedback</button>
      </div>
    </div>
  );
}

export default Form;
