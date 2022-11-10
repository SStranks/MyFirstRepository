import IconCross from '#Svg/icon-cross.svg';
import styles from './_BoardEdit.module.scss';

function BoardEdit(): JSX.Element {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <p className={styles.form__title}>Edit Board</p>
        <div className={styles.form__group}>
          <p>Name</p>
          <input type="text" placeholder="e.g. Web Design" />
        </div>
        <div className={styles.form__group}>
          <p>Columns</p>
          <div className={styles['form__sub-tasks']}>
            <div className={styles['form__sub-tasks__input']}>
              <input type="text" placeholder="e.g. Web Design" />
              <img src={IconCross} alt="" />
            </div>
            <div className={styles['form__sub-tasks__input']}>
              <input type="text" placeholder="e.g. Web Design" />
              <img src={IconCross} alt="" />
            </div>
          </div>
          <button type="button" className={styles['form__btn-new-column']}>
            + Add New Column
          </button>
        </div>
        <button type="submit" className={styles['form__btn-create-board']}>
          Create New Board
        </button>
      </form>
    </div>
  );
}

export default BoardEdit;
