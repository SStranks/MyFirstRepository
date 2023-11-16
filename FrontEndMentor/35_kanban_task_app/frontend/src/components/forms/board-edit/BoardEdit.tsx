import type { IPostBoardRequestDTO } from '#Services/ApiRequestDto';
import InputText from '#Components/custom/input-text/InputText';
import InputTextSubtask from '#Components/custom/input-text/InputTextSubtask';
import { AppDispatchContext } from '#Context/AppContext';
import RootModalDispatchContext from '#Context/RootModalContext';
import useComponentIdGenerator from '#Hooks/useComponentIdGenerator';
import ApiService from '#Services/Services';
import { TNestedInputProp, TReturnData } from '#Types/types';
import type { IBoard } from '#Shared/types';
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

// TODO:  Also in task edit - there's a function in formfunctions this is based from, need to refactor all of it.
const genGroupInputs = (activeBoard: IBoard) => {
  return activeBoard.columns.reduce((acc, cur) => {
    const key = `input-column-${cur._id}`;
    acc[key] = {
      value: cur.name,
      error: false,
      key,
      inputName: `input-column-${cur._id}`,
    };
    return acc;
  }, {} as TNestedInputProp);
};

type TProps = {
  activeBoard: IBoard;
};

// FUNCTION COMPONENT //
function BoardEdit(props: TProps): JSX.Element {
  const { activeBoard } = props;
  const appDispatch = useContext(AppDispatchContext);
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
    } as IPostBoardRequestDTO;

    // Send data to backend API
    // NOTE:  Need to think about column names in relation to IDs: 1) We need the IDs because if the user renames a column, how will we know which column to amend in the DB? 2) We need a warning that if they remove a column here then all task data will be erased!
    // NOTE:  Replacing the entire boards-columns data from the frontend, is this the best approach? Can we use .pre hook on the backend to amend column names/delete columns according to ID's passed perhaps?
    try {
      const responseData: IBoard | undefined = await ApiService.patchBoard(
        `${activeBoard._id}`,
        newBoard
      );
      if (!responseData) throw new Error('Could not patch board!');

      appDispatch({
        type: 'edit-board',
        payload: {
          id: { boardId: activeBoard._id },
          // TEST:  Does this work now?
          data: { responseData },
        },
      });
      return modalDispatch({
        type: 'close-modal',
      });
    } catch (error) {
      console.error(error);
      return modalDispatch({
        type: 'open-modal',
        modalType: 'error',
        modalProps: { title: activeBoard.name },
      });
    }
  };

  const btnNewColumnClickHandler = () => {
    const uniqueId = `input-column-${genId()}`;
    setFormData((prev) => addInputToGroup(uniqueId, 'input-group-1', prev));
  };

  const returnDataHandler = (data: TReturnData) => {
    // Update form data; distinguish if return data is part of 'input-group' or a single input
    if (data.groupId) {
      setFormData((prev) => updateInputFromGroup(data, prev));
    } else {
      setFormData((prev) => updateInput(data, prev));
    }
  };

  const deleteInputHandler = (data: TReturnData) => {
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
          <div className={styles.form__subTasks}>{columns}</div>
          <button
            type="button"
            className={styles.form__btnNewColumn}
            onClick={btnNewColumnClickHandler}>
            + Add New Column
          </button>
        </div>
        <button type="submit" className={styles.form__btnCreateBoard}>
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default BoardEdit;
