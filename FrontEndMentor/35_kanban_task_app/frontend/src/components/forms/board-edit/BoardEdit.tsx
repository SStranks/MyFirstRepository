import InputText from '#Components/custom/input-text/InputText';
import InputTextSubtask from '#Components/custom/input-text/InputTextSubtask';
import { AppStateContext } from '#Context/AppContext';
import useComponentIdGenerator from '#Hooks/useComponentIdGenerator';
import { Board, StateContextType } from '#Types/types';
import {
  addInputToGroup,
  deleteInputFromGroup,
  deleteInputSingle,
  genGroupInputs,
  updateInput,
  updateInputFromGroup,
  validateInputs,
} from '#Utils/formFunctions';
import { useContext, useState } from 'react';
import styles from './_BoardEdit.module.scss';

type ElemProps = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  activeBoardId: string;
};

type ReturnData = {
  inputName: string;
  value: string;
  groupId?: string;
};

const getBoardData = (state: StateContextType, boardId: string) => {
  const activeBoard = state.boards.find((b) => b._id === boardId) as Board;
  const columns = activeBoard.columns.map((c) => c.name);
  return { boardName: activeBoard.name, boardColumns: columns };
};

// FUNCTION COMPONENT //
function BoardEdit(props: ElemProps): JSX.Element {
  const { setIsModalOpen, activeBoardId } = props;
  const state = useContext(AppStateContext);
  const { boardName, boardColumns } = getBoardData(state, activeBoardId);
  const [formData, setFormData] = useState({
    'input-title': { value: boardName, error: false, inputName: 'input-title' },
    'input-group-1': {
      ...genGroupInputs(boardColumns, 'column'),
    },
  });
  const genId = useComponentIdGenerator();

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
    // All form inputs have been validated. Submit form data.
    const formInputData = new FormData(e.target as HTMLFormElement);
    const { 'input-title': name, ...rest } = Object.fromEntries(
      formInputData.entries()
    );
    // Format data according to schema
    // const newBoard = {
    //   name,
    //   columns: Object.values(rest).map((c) => ({ name: c })),
    // };
    // Send data to backend API
    // NOTE:  Need to think about column names in relation to IDs: 1) We need the IDs because if the user renames a column, how will we know which column to amend in the DB? 2) We need a warning that if they remove a column here then all task data will be erased!
    return console.log(setIsModalOpen, name, rest);
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
        <p className={styles.form__title}>Edit Board</p>
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
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default BoardEdit;
