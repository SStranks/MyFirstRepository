import { useFieldArray, useForm } from 'react-hook-form';
// import type { IColumn } from '#Shared/types';
// import { AppDispatchContext, IAppContextPayload } from '#Context/AppContext';
// import RootModalDispatchContext from '#Context/RootModalContext';
// import ApiService from '#Services/Services';
// import { validateInputs } from '#Utils/formFunctions';
// import { useContext } from 'react';
import IconCross from '#Svg/icon-cross.svg';
import styles from './_BoardAdd2.module.scss';

type TFormValues = {
  title: string;
  columns: { title: string }[];
};

type TProps = {
  setActiveBoardId: React.Dispatch<React.SetStateAction<string>>;
};

function BoardAdd(props: TProps): JSX.Element {
  const { setActiveBoardId } = props;
  // const appDispatch = useContext(AppDispatchContext);
  // const modalDispatch = useContext(RootModalDispatchContext);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TFormValues>({
    defaultValues: {
      columns: [{ title: 'Todo' }, { title: 'Doing' }, { title: 'Done' }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    name: 'columns',
    control,
  });

  console.log(setActiveBoardId);

  const onSubmit = handleSubmit((data) => console.log(data));

  const titleReg = register('title', { required: true });
  const columnReg = register('columns');

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={onSubmit}>
        <p className={styles.form__title}>Add New Board</p>
        <div className={styles.form__group}>
          <p>Name</p>
          <div
            className={`${styles.titleInput} ${
              errors.title ? styles.titleError : ''
            }`}>
            <input
              className={styles.titleInput__input}
              name={titleReg.name}
              type="text"
              placeholder="e.g. Web Design"
            />
          </div>
        </div>
        <div className={styles.form__group}>
          <p>Columns</p>
          <div className={styles.listItems}>
            {fields.map((item, index) => (
              <div
                className={`${styles.subTask} ${
                  errors.columns ? styles.subTaskError : ''
                }`}
                key={item.id}>
                <div className={styles.subTask__container}>
                  <input
                    type="text"
                    className={styles.subTask__input}
                    name={`${columnReg}[${index}].title`}
                    defaultValue={item.title}
                  />
                </div>
                <button type="button" onClick={() => remove(index)}>
                  <img src={IconCross} alt="" className={styles.icon} />
                </button>
              </div>
            ))}
          </div>
          <button
            type="button"
            className={styles.form__btnNewColumn}
            onClick={() => append({ title: '' })}>
            + Add New Column
          </button>
        </div>
        <button type="submit" className={styles.form__btnCreateBoard}>
          Create New Board
        </button>
      </form>
    </div>
  );
}

export default BoardAdd;
