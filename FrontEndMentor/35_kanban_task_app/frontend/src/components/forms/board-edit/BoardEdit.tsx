import InputText from '#Components/custom/input-text/InputText';
import InputTextSubtask from '#Components/custom/input-text/InputTextSubtask';
import useComponentIdGenerator from '#Hooks/useComponentIdGenerator';
import { useState } from 'react';
import styles from './_BoardEdit.module.scss';

type ElemProps = {
  boardName: string;
  boardColumns: string[];
};

type InputProp = {
  value: string;
  error: boolean;
  key?: number;
  inputName: string;
};

type newFormDataType = {
  'input-title': { value: string; error: boolean; inputName: string };
  'input-group-1': Record<string, InputProp>;
};

const genGroupInputs = (arg: string[]) => {
  // For setting initial state; Generates object of single input objects
  // eslint-disable-next-line unicorn/no-array-reduce
  return arg.reduce((acc, cur, i, arr) => {
    const key = `input-column-${i - arr.length}`;
    acc[key] = {
      value: cur,
      error: false,
      key: i - arr.length,
      inputName: `input-column-${i - arr.length}`,
    };
    return acc;
  }, {} as Record<string, InputProp>);
};

function BoardEdit(props: ElemProps): JSX.Element {
  const { boardName, boardColumns } = props;

  const genId = useComponentIdGenerator();
  const [formData, setFormData] = useState({
    'input-title': { value: boardName, error: false, inputName: 'input-title' },
    'input-group-1': {
      ...genGroupInputs(boardColumns),
    },
  });

  console.log('render', formData);

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('form submit click');
    // Check if each formData input is empty. If true, add a new object to newFormData for each empty input.
    const newFormData = {} as newFormDataType;
    if (formData['input-title'].value === '')
      newFormData['input-title'] = {
        ...formData['input-title'],
        value: '',
        error: true,
      };

    // if (formData['input-group-1']) {
    //   console.log('1');
    //   const inputs = Object.values(formData['input-group-1']);
    //   console.log('2', inputs);
    //   if (inputs.some((column) => column.value === '')) {
    //     console.log('2a', 'TRUE');
    //     const newInputs = inputs.map((input) => {
    //       if (!input.value) return { ...input, error: true };
    //       return input;
    //     });
    //     console.log('3', newInputs);
    //     newFormData['input-group-1'] = Object.assign({}, ...newInputs);
    //     console.log('4', newFormData);
    //   }
    // }

    // If there are any empty inputs/objs in newFormData, abort form submission and update form state.
    if (Object.keys(newFormData).length > 0) {
      console.log(
        'form submit click',
        Object.keys(newFormData),
        newFormData,
        formData
      );
      return setFormData((prev) => ({ ...prev, ...newFormData }));
    }
    const formInputData = new FormData(e.target as HTMLFormElement);
    const inputData = Object.fromEntries(formInputData.entries());
    return console.log('FORM SUBMIT', inputData);
  };

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const btnNewColumnClickHandler = () => {
    const uniqueId = `input-column-${genId()}`;
    const newColumn = {
      value: '',
      error: false,
      key: uniqueId,
      inputName: uniqueId,
    };
    setFormData(
      (prev) =>
        ({
          ...prev,
          'input-group-1': { ...prev['input-group-1'], [uniqueId]: newColumn },
        } as typeof prev)
    );
  };

  type ReturnData = {
    inputName: string;
    value: string;
    groupId?: string | undefined;
  };

  const returnDataHandler = (data: ReturnData) => {
    // Update form data; distinguish if return data is part of 'input-group' or a single input
    if (data.groupId) {
      setFormData((prev) => {
        let { [data.groupId as keyof typeof prev]: inputGroup } = prev;
        let { [data.inputName as keyof typeof inputGroup]: input } = inputGroup;
        input = { ...(input as InputProp), value: data.value };
        inputGroup = { ...inputGroup, [data.inputName]: input };
        return { ...prev, [data.groupId as string]: inputGroup } as typeof prev;
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [data.inputName]: {
          ...prev[data.inputName as keyof typeof prev],
          value: data.value,
        },
      }));
    }
  };

  const deleteInputHandler = (data: ReturnData) => {
    // Update form data; distinguish if return data is part of 'input-group' or a single input
    if (data.groupId !== undefined) {
      setFormData((prev) => {
        const { [data.groupId as keyof typeof prev]: inputGroup, ...rest } =
          prev;
        delete inputGroup[data.inputName as keyof typeof inputGroup];
        return { [data.groupId as string]: inputGroup, ...rest } as typeof prev;
      });
    } else {
      setFormData((prev) => {
        const prevCopy = prev;
        delete prevCopy[data.inputName as keyof typeof prevCopy];
        return prevCopy;
      });
    }
  };

  const columns = Object.keys(formData['input-group-1']).map((key) => {
    const obj = formData['input-group-1'][key] as InputProp;
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
