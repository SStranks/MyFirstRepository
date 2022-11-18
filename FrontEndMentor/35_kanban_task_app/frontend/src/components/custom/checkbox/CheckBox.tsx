import IconCheck from '#Svg/icon-check.svg';
import { useState } from 'react';
import styles from './_CheckBox.module.scss';

type ElemProps = {
  title: string;
  checked: boolean;
  setTasksComplete: React.Dispatch<React.SetStateAction<number>>;
};

function CheckBox(props: ElemProps): JSX.Element {
  const { title, checked, setTasksComplete } = props;
  const [isChecked, setIsChecked] = useState(checked);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked);
    setTasksComplete((prev) => {
      return (e.target as HTMLInputElement).checked ? prev + 1 : prev - 1;
    });
  };

  return (
    <label htmlFor={title} className={styles['custom-checkbox']}>
      <input
        type="checkbox"
        id={title}
        checked={isChecked}
        onChange={changeHandler}
      />
      <div className={styles['custom-checkbox__new-checkbox']}>
        <img
          src={IconCheck}
          className={styles['custom-checkbox__icon-check']}
          alt=""
        />
      </div>
      <p className={styles['custom-checkbox__title']}>{title}</p>
    </label>
  );
}

export default CheckBox;
