import IconCheck from '#Svg/icon-check.svg';
import { ReturnDataType } from '#Types/types';
import styles from './_CheckBox.module.scss';

type ElemProps = {
  title: string;
  checked: boolean;
  inputName: string;
  groupId?: string;
  returnData: (data: ReturnDataType) => void;
};

function CheckBox(props: ElemProps): JSX.Element {
  const { title, checked, inputName, groupId, returnData } = props;

  const changeHandler = (e: React.ChangeEvent) => {
    returnData({
      inputName,
      groupId,
      value: (e.target as HTMLInputElement).checked,
    });
  };

  return (
    <label htmlFor={inputName} className={styles['custom-checkbox']}>
      <input
        type="checkbox"
        id={inputName}
        checked={checked}
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
