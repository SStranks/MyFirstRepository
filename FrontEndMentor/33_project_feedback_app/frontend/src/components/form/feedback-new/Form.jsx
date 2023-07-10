import PropTypes from 'prop-types';
import IconNewFeedback from '../../../assets/svg/shared/icon-new-feedback.svg';
import HttpAPI from '../../../services/httpAPI';
import Button from '../../custom/button/Button';
import ButtonSubmit from '../../custom/button/ButtonSubmit';
import Dropdown from '../../custom/dropdown/design2/Dropdown';
import InputText from '../../custom/input-text/InputText';
import InputTextArea from '../../custom/textarea/InputTextArea';
import styles from './_Form.module.scss';

const API = new HttpAPI();
const CATEGORIES = ['Feature', 'UI', 'UX', 'Enhancement', 'Bug'];

function Form(props) {
  const { setModalOpen } = props;

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
      const { title, category, description } = Object.fromEntries(
        dataObject.entries()
      );

      try {
        const res = await API.post('/requests', {
          title,
          category,
          description,
        });

        // TODO:  Pop up success with toast?
        setModalOpen(false);
      } catch (error) {
        // TODO:  Pop up error with toast?
        console.log('ERROR', error);
      }
    }
  };

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <img className={styles.form__icon} src={IconNewFeedback} alt="" />
      <p className={styles.form__title}>Create New Feedback</p>
      <div className={styles.form__feedback}>
        <h4>Feedback Title</h4>
        <p>Add a short, descriptive headline</p>
        <InputText type="text" id="title" name="title" required />
      </div>
      <div className={styles.form__category}>
        <h4>Category</h4>
        <p>Choose a category for your feedback</p>
        <Dropdown listItems={CATEGORIES} name="category" />
      </div>
      <div className={styles.form__detail}>
        <h4>Feedback Detail</h4>
        <p>
          Include any specific comments on what should be improved, added, etc
        </p>
        <InputTextArea
          name="description"
          id="description"
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
            onClick={setModalOpen}
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
  setModalOpen: PropTypes.func,
};

Form.defaultProps = {
  setModalOpen: undefined,
};

export default Form;
