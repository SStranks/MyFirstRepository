import IconCheck from '#Svg/icon-check.svg';
import { TReturnData } from '#Types/types';
import styles from './_CheckBox.module.scss';

type TProps = {
  title: string;
  checked: boolean;
  inputName: string;
  groupId?: string;
  returnData: (data: TReturnData) => void;
};

function CheckBox(props: TProps): JSX.Element {
  const { title, checked, inputName, groupId, returnData } = props;

  const changeHandler = (e: React.ChangeEvent) => {
    returnData({
      inputName,
      groupId,
      value: (e.target as HTMLInputElement).checked,
    });
  };

  return (
    <label htmlFor={inputName} className={styles.customCheckbox}>
      <input
        type="checkbox"
        id={inputName}
        checked={checked}
        onChange={changeHandler}
      />
      <div className={styles.customCheckbox__newCheckbox}>
        {checked && (
          <img
            src={IconCheck}
            className={styles.customCheckbox__iconCheck}
            alt=""
          />
        )}
      </div>
      <p className={styles.customCheckbox__title}>{title}</p>
    </label>
  );
}

export default CheckBox;
