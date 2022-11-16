import InputText from '#Components/custom/input-text/InputText';
import InputTextSubtask from '#Components/custom/input-text/InputTextSubtask';
import useComponentIdGenerator from '#Hooks/useComponentIdGenerator';
import {
  addInputToGroup,
  deleteInputFromGroup,
  deleteInputSingle,
  genGroupInputs,
  updateInput,
  updateInputFromGroup,
  validateInputs,
} from '#Utils/formFunctions';
import { useState } from 'react';
import styles from './_BoardAdd.module.scss';

type ReturnData = {
  inputName: string;
  value: string;
  groupId?: string;
};

const INITIAL_COLUMNS = ['Todo', 'Doing', 'Done'];

// FUNCTION COMPONENT //
function BoardAdd(): JSX.Element {
  const genId = useComponentIdGenerator();
  const [formData, setFormData] = useState({
    'input-title': { value: '', error: false, inputName: 'input-title' },
    'input-group-1': { ...genGroupInputs(INITIAL_COLUMNS, 'column') },
  });

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    // Check if each formData input is empty. If true, add a new object to newFormData.
    const newFormData = validateInputs(formData);
    // If there are any empty inputs/objs in newFormData, abort form submission and merge the form state with the newFormData objs.
    if (Object.keys(newFormData).length > 0) {
      return setFormData(
        (prev) => ({ ...prev, ...newFormData } as typeof prev)
      );
    }
    const formInputData = new FormData(e.target as HTMLFormElement);
    const inputData = Object.fromEntries(formInputData.entries());
    return console.log('FORM SUBMIT', inputData);
  };

  const btnNewColumnClickHandler = () => {
    const uniqueId = `input-column-${genId()}`;
    setFormData((prev) => addInputToGroup(uniqueId, 'input-group-1', prev));
  };

  const returnDataHandler = (data: ReturnData) => {
    // Update form data; distinguish if return data is part of 'input-group' or a single input
    if (data.groupId) {
      setFormData((prev) => updateInputFromGroup(data, prev));
    } else {
      setFormData((prev) => updateInput(data, prev));
    }
  };

  const deleteInputHandler = (data: ReturnData) => {
    // Update form data; distinguish if return data is part of an input-group or a single input
    if (data.groupId) {
      setFormData((prev) => deleteInputFromGroup(data, prev));
    } else {
      setFormData((prev) => deleteInputSingle(data, prev));
    }
  };

  const columns = Object.keys(formData['input-group-1']).map((key) => {
    const obj = formData['input-group-1'][key];
    return (
      <InputTextSubtask
        key={obj.key}
        inputName={obj.inputName}
        value={obj.value}
        groupId="input-group-1"
        error={obj.error}
        deleteInput={deleteInputHandler}
        returnData={returnDataHandler}
      />
    );
  });

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submitHandler}>
        <p className={styles.form__title}>Add New Board</p>
        <div className={styles.form__group}>
          <p>Name</p>
          <InputText
            placeholder="e.g. Web Design"
            inputName={formData['input-title'].inputName}
            value={formData['input-title'].value}
            groupId={undefined}
            error={formData['input-title'].error}
            returnData={returnDataHandler}
          />
        </div>
        <div className={styles.form__group}>
          <p>Columns</p>
          <div className={styles['form__sub-tasks']}>{columns}</div>
          <button
            type="button"
            className={styles['form__btn-new-column']}
            onClick={btnNewColumnClickHandler}>
            + Add New Column
          </button>
        </div>
        <button type="submit" className={styles['form__btn-create-board']}>
          Create New Board
        </button>
      </form>
    </div>
  );
}

export default BoardAdd;
