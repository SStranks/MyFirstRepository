import PropTypes from 'prop-types';
import IconNewFeedback from '../../../assets/svg/shared/icon-new-feedback.svg';
import Button from '../../custom/button/Button';
import ButtonSubmit from '../../custom/button/ButtonSubmit';
import Dropdown from '../../custom/dropdown/design2/Dropdown';
import InputText from '../../custom/input-text/InputText';
import InputTextArea from '../../custom/textarea/InputTextArea';
import styles from './_Form.module.scss';

function Form(props) {
  const { cancelBtnOnClick } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    const formElement = e.target;
    const isValid = formElement.checkValidity();

    formElement.classList.add(styles.form__submitted);

    // Focus on first invalid input
    const firstInvalidInput = formElement.querySelector(':invalid');
    firstInvalidInput?.focus();

    // Add error validation msg to invalid fields
    // const invalidInputs = formElement.querySelectorAll(':invalid');
    // if (invalidInputs) {
    //   invalidInputs.forEach((el) => {
    //     const textElem = el.nextSibling?.childNodes[0];
    //     textElem.textContent = el.validationMessage;
    //   });
    // }

    // Submit if valid
    if (isValid) {
      const dataObject = new FormData(formElement);
      // Faux Submission
      console.log(Object.fromEntries(dataObject.entries()));
    }
  };

  const categories = ['Feature', 'UI', 'UX', 'Enhancement', 'Bug'];

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <img className={styles.form__icon} src={IconNewFeedback} alt="" />
      <p className={styles.form__title}>Create New Feedback</p>
      <div className={styles.form__feedback}>
        <h4>Feedback Title</h4>
        <p>Add a short, descriptive headline</p>
        <InputText
          type="text"
          id="feedback-title"
          name="feedback-title"
          required
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
        <InputTextArea
          name="feedback-detail"
          id="feedback-detail"
          cols={30}
          rows={10}
          required
        />
      </div>
      <div className={styles.form__bar}>
        <div className={styles.form__bar__btnCancel}>
          <Button
            text="Cancel"
            disabled={false}
            classList={['bg-navy-blue']}
            onClick={cancelBtnOnClick}
          />
        </div>
        <div className={styles.form__bar__btnSubmit}>
          <ButtonSubmit
            text="Add Feedback"
            disabled={false}
            classList={['bg-magenta']}
          />
        </div>
      </div>
    </form>
  );
}

Form.propTypes = {
  cancelBtnOnClick: PropTypes.func,
};

Form.defaultProps = {
  cancelBtnOnClick: undefined,
};

export default Form;
