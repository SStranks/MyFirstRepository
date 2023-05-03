import { useState } from 'react';
import styles from './_ViewMoreCartItemsButton.module.scss';

type ElemProps = {
  cartItemLength: number;
  onClickFn: () => void;
};

function ViewMoreCartItemsButton(props: ElemProps): JSX.Element {
  const { cartItemLength, onClickFn } = props;
  const [toggleText, setToggleText] = useState<boolean>(true);

  const viewMoreBtnHandler = () => {
    onClickFn();
    setToggleText((prev) => !prev);
  };

  return (
    <button
      className={styles.button}
      type="button"
      onClick={viewMoreBtnHandler}>
      {toggleText &&
        `and ${cartItemLength - 1} other item${cartItemLength > 2 && `(s)`}`}
      {!toggleText && `View less`}
    </button>
  );
}

export default ViewMoreCartItemsButton;
