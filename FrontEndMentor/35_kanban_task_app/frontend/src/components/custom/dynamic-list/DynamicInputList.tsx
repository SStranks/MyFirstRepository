import { TInputProp, TReturnData } from '#Types/types';
import useComponentIdGenerator from '#Hooks/useComponentIdGenerator';
import {
  addInputToGroup,
  deleteInputFromGroup,
  updateInputFromGroup,
} from '#Utils/formFunctions';
import InputTextSubtask from '../input-text/InputTextSubtask';
import styles from './_DynamicInputList.module.scss';

interface IFormData {
  'input-title': {
    value: string;
    error: boolean;
    inputName: string;
  };
  'input-group-1': {
    [x: string]: TInputProp;
  };
}

type ElemProps = {
  formData: IFormData;
  setFormData: React.Dispatch<React.SetStateAction<IFormData>>;
};

function DynamicInputList(props: ElemProps): JSX.Element {
  const { formData, setFormData } = props;
  const genId = useComponentIdGenerator();

  const btnNewColumnClickHandler = () => {
    const uniqueId = `input-column-${genId()}`;
    setFormData((prev) => addInputToGroup(uniqueId, 'input-group-1', prev));
  };

  const deleteInputHandler = (data: TReturnData) => {
    setFormData((prev) => deleteInputFromGroup(data, prev));
  };

  const returnDataHandler = (data: TReturnData) => {
    setFormData((prev) => updateInputFromGroup(data, prev));
  };

  const dynamicListItems = Object.keys(formData['input-group-1']).map((key) => {
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
    <>
      <div className={styles.listItems}>{dynamicListItems}</div>
      <button
        type="button"
        className={styles.btnNewColumn}
        onClick={btnNewColumnClickHandler}>
        + Add New Column
      </button>
    </>
  );
}

export default DynamicInputList;
