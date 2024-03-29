import type { IColumn } from '#Shared/types';
import InputText from '#Components/custom/input-text/InputText';
import { AppDispatchContext, IAppContextPayload } from '#Context/AppContext';
import RootModalDispatchContext from '#Context/RootModalContext';
import ApiService from '#Services/Services';
import { TReturnData } from '#Types/types';
import {
  genGroupInputs,
  updateInput,
  updateInputFromGroup,
  validateInputs,
} from '#Utils/formFunctions';
import { useContext, useState } from 'react';
import DynamicInputList from '#Components/custom/dynamic-list/DynamicInputList';
import styles from './_BoardAdd.module.scss';

const INITIAL_COLUMNS = ['Todo', 'Doing', 'Done'];

type TProps = {
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>;
};

function BoardAdd(props: TProps): JSX.Element {
  const { setActiveBoardId } = props;
  const appDispatch = useContext(AppDispatchContext);
  const modalDispatch = useContext(RootModalDispatchContext);
  // const genId = useComponentIdGenerator();
  const [formData, setFormData] = useState({
    'input-title': { value: '', error: false, inputName: 'input-title' },
    'input-group-1': { ...genGroupInputs(INITIAL_COLUMNS, 'column') },
  });

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
    const formInputData = new FormData(e.target as HTMLFormElement);
    const { 'input-title': name, ...rest } = Object.fromEntries(
      formInputData.entries()
    ) as Record<string, string>;
    // Format data according to schema
    const newBoard = {
      name,
      columns: Object.values(rest).map((c) => ({ name: c })) as IColumn[],
    };
    // Send data to backend API
    try {
      const responseData = await ApiService.postBoard(newBoard);
      if (!responseData) throw new Error('Unable to post board!');

      modalDispatch({
        type: 'close-modal',
      });
      appDispatch({
        type: 'add-board',
        // DEBUG:  Type casting?
        payload: responseData as unknown as IAppContextPayload,
      });
      return setActiveBoardId(responseData._id);
    } catch (error) {
      console.error(error);
      return modalDispatch({
        type: 'open-modal',
        modalType: 'error',
        modalProps: { title: newBoard.name },
      });
    }
  };

  const returnDataHandler = (data: TReturnData) => {
    // Update form data; distinguish if return data is part of 'input-group' or a single input
    if (data.groupId) {
      setFormData((prev) => updateInputFromGroup(data, prev));
    } else {
      setFormData((prev) => updateInput(data, prev));
    }
  };

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
          <DynamicInputList formData={formData} setFormData={setFormData} />
        </div>
        <button type="submit" className={styles.form__btnCreateBoard}>
          Create New Board
        </button>
      </form>
    </div>
  );
}

export default BoardAdd;
