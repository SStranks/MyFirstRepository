/* eslint-disable react/prop-types */
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import IconEditFeedback from '../../../assets/svg/shared/icon-edit-feedback.svg';
import ApiService from '../../../services/Services';
import Button from '../../custom/button/Button';
import ButtonSubmit from '../../custom/button/ButtonSubmit';
import Dropdown from '../../custom/dropdown/design2/Dropdown';
import InputText from '../../custom/input-text/InputText';
import Textarea from '../../custom/textarea/InputTextArea';
import styles from './_Form.module.scss';

const CATEGORIES = ['Feature', 'UI', 'UX', 'Enhancement', 'Bug'];
const STATUS = ['Suggestion', 'Planned', 'In-Progress', 'Live'];

function Form(props) {
  const { setModalOpen, request } = props;
  const { id, title, category, status, description } = request;
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const { value } = e.nativeEvent.submitter;

    if (value === 'submit') {
      const formElement = e.target;
      const isValid = formElement.checkValidity();

      formElement.classList.add(styles.form__submitted);

      // Focus on first invalid input
      const firstInvalidInput = formElement.querySelector(':invalid');
      firstInvalidInput?.focus();

      // Submit if valid
      if (isValid) {
        const dataObject = new FormData(formElement);
        const {
          title: newTitle,
          category: newCategory,
          status: newStatus,
          description: newDescription,
        } = Object.fromEntries(dataObject.entries());

        const requestBody = {
          title: newTitle,
          category: newCategory,
          description: newDescription,
          status: newStatus,
        };
        const responseData = await ApiService.patchRequest(id, requestBody);

        if (responseData) {
          setModalOpen(false);
          navigate('/');
          toast.success('Request Updated!');
        } else {
          toast.error('Request Update Failed!');
        }
      }
    }

    if (value === 'delete') {
      const responseData = await ApiService.deleteRequest(id);

      if (responseData === 204) {
        setModalOpen(false);
        navigate('/');
        toast.success('Request Deleted!');
      } else {
        toast.error('Request Deletion Failed!');
      }
    }
  };

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <img className={styles.form__icon} src={IconEditFeedback} alt="" />
      <p className={styles.form__title}>Editing &lsquo;{title}&lsquo;</p>
      <div className={styles.form__feedback}>
        <h4>Feedback Title</h4>
        <p>Add a short, descriptive headline</p>
        <InputText id="title" name="title" value={title} required />
      </div>
      <div className={styles.form__category}>
        <h4>Category</h4>
        <p>Choose a category for your feedback</p>
        <Dropdown
          listItems={CATEGORIES}
          name="category"
          defaultValue={category}
        />
      </div>
      <div className={styles.form__status}>
        <h4>Update Status</h4>
        <p>Change feedback state</p>
        <Dropdown listItems={STATUS} name="status" defaultValue={status} />
      </div>
      <div className={styles.form__detail}>
        <h4>Feedback Detail</h4>
        <p>
          Include any specific comments on what should be improved, added, etc
        </p>
        <Textarea
          name="description"
          id="description"
          cols={30}
          rows={10}
          defaultValue={description}
          required
        />
      </div>
      <div className={styles.form__bar}>
        <div className={styles.form__bar__btnDelete}>
          <ButtonSubmit
            text="Delete"
            value="delete"
            disabled={false}
            classList={['bg-red']}
          />
        </div>
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
            text="Edit Feedback"
            value="submit"
            disabled={false}
            classList={['bg-magenta']}
          />
        </div>
      </div>
    </form>
  );
}

export default Form;
