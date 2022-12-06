import InputText from '#Components/custom/input-text/InputText';
import InputTextSubtask from '#Components/custom/input-text/InputTextSubtask';
import { AppDispatchContext } from '#Context/AppContext';
import RootModalDispatchContext from '#Context/RootModalContext';
import useComponentIdGenerator from '#Hooks/useComponentIdGenerator';
import { Board, NestedInputPropType } from '#Types/types';
import {
  addInputToGroup,
  deleteInputFromGroup,
  deleteInputSingle,
  updateInput,
  updateInputFromGroup,
  validateInputs,
} from '#Utils/formFunctions';
import { useContext, useState } from 'react';
import styles from './_BoardEdit.module.scss';

type ReturnData = {
  inputName: string;
  value: string;
  groupId?: string;
};

type ElemProps = {
  // setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  activeBoard: Board;
};

// TODO:  Also in task edit - there's a function in formfunctions this is based from, need to refactor all of it.
const genGroupInputs = (activeBoard: Board) => {
  return activeBoard.columns.reduce((acc, cur) => {
    const key = `input-column-${cur._id}`;
    acc[key] = {
      value: cur.name,
      error: false,
      key,
      inputName: `input-column-${cur._id}`,
    };
    return acc;
  }, {} as NestedInputPropType);
};

// FUNCTION COMPONENT //
function BoardEdit(props: ElemProps): JSX.Element {
  const { activeBoard } = props;
  const dispatch = useContext(AppDispatchContext);
  const modalDispatch = useContext(RootModalDispatchContext);
  const [formData, setFormData] = useState({
    'input-title': {
      value: activeBoard.name,
      error: false,
      inputName: 'input-title',
    },
    'input-group-1': {
      ...genGroupInputs(activeBoard),
    },
  });
  const genId = useComponentIdGenerator();

  const submitHandler = async (e: React.FormEvent) => {
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
    console.log('BOARD EDIT', formInputData);
    const { 'input-title': name, ...rest } = Object.fromEntries(
      formInputData.entries()
    );
    // Copy in old column data if applicable
    const newColumns = Object.entries(rest).map(([key, value]) => {
      const columnId = key.split('-')[2];
      const columnIdx = activeBoard.columns.findIndex(
        (c) => c._id === columnId
      );

      return columnIdx !== -1
        ? { ...activeBoard.columns[columnIdx], name: value }
        : { name: value };
    });

    // Format data according to schema
    const newBoard = {
      name,
      columns: newColumns,
    };

    // Send data to backend API
    // NOTE:  Need to think about column names in relation to IDs: 1) We need the IDs because if the user renames a column, how will we know which column to amend in the DB? 2) We need a warning that if they remove a column here then all task data will be erased!
    // NOTE:  Replacing the entire boards-columns data from the frontend, is this the best approach? Can we use .pre hook on the backend to amend column names/delete columns according to ID's passed perhaps?
    try {
      // TODO:  Make FETCH URL dynamic - hardcoded to test board.
      const response = await fetch(
        `http://${process.env.API_HOST}/api/v1/boards/${activeBoard._id}`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newBoard),
        }
      );

      if (!response.ok) throw new Error('Error: Failed to submit');

      const content = await response.json();

      dispatch({
        type: 'edit-board',
        payload: { id: { boardId: activeBoard._id }, data: content.data.data },
      });
      return modalDispatch({
        type: 'close-modal',
        modalType: undefined,
      });
      // return setIsModalOpen(false);
    } catch (error) {
      // TODO:  Need to make an error modal or something to show failure.
      return console.log(error);
    }
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

  console.log('BOARD EDIT', formData);

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
        key={obj.inputName}
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
