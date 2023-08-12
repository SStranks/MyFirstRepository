import styles from './InputDateCalendarPicker.module.scss';

interface IProps {
  calendarPickerOpen: boolean;
  setCalendarPickerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function InputDateCalendarPicker(props: IProps): JSX.Element {
  const { calendarPickerOpen, setCalendarPickerOpen } = props;

  const onClickBtn = () => {
    setCalendarPickerOpen(false);
  };

  return (
    <div
      className={`${styles.container} ${
        calendarPickerOpen ? '' : styles['container--hidden']
      }`}>
      <button type="button" onClick={onClickBtn}>
        Click me
      </button>
    </div>
  );
}

export default InputDateCalendarPicker;
