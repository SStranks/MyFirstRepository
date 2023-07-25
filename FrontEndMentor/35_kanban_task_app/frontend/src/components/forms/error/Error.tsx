import RootModalDispatchContext from '#Context/RootModalContext';
import { useContext } from 'react';
import styles from './_Error.module.scss';

type ElemProps = {
  title: string;
};

function Error(props: ElemProps): JSX.Element {
  const { title } = props;
  const modalDispatch = useContext(RootModalDispatchContext);

  const proceedBtnClickHandler = () => {
    modalDispatch({
      type: 'close-modal',
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.error}>
        <p className={styles.error__title}>Submission Error</p>
        <p className={styles.error__description}>
          There was an error transferring data for &apos;{title}&apos;. Please
          try again!
        </p>
        <div className={styles.error__btnGroup}>
          <button
            type="button"
            className={styles.error__btnDelete}
            onClick={proceedBtnClickHandler}>
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
}

export default Error;
