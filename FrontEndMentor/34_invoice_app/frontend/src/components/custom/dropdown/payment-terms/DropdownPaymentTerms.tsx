import IconArrow from '#Svg/icon-arrow-down.svg';
import { useEffect, useRef, useState } from 'react';
import styles from './DropdownPaymentTerms.module.scss';

interface IProps {
  value: number | undefined;
  labelId?: string;
  appendClass?: string;
}

function DropdownPaymentTerms(props: IProps): JSX.Element {
  const { value, labelId, appendClass } = props;
  const [currentValue, setCurrentValue] = useState<number | undefined>(value);
  const [listOpen, setListOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownBtnRef = useRef<HTMLButtonElement>(null);
  const ULRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const { current } = containerRef;
    // Handle clicks outside of component; close dropdown
    const clickHandler = (e: MouseEvent) => {
      if (
        current &&
        listOpen &&
        e.target !== current &&
        !current.contains(e.target as HTMLElement)
      ) {
        setListOpen(false);
      }
    };

    // On press of ESC key; close modal.
    let index = 0;
    const buttonElements = ULRef.current?.querySelectorAll('button');
    const keyHandler = (e: KeyboardEvent) => {
      if (listOpen) {
        switch (e.key) {
          case 'Escape':
          case 'Esc':
            e.stopPropagation();
            dropdownBtnRef.current?.focus();
            setListOpen(false);
            break;
          case 'ArrowUp':
            e.preventDefault();
            if (buttonElements) {
              index =
                (index - 1 + buttonElements.length) % buttonElements.length;
              buttonElements[index].focus();
            }
            break;
          case 'ArrowDown':
            e.preventDefault();
            if (buttonElements) {
              index = (index + 1) % buttonElements.length;
              buttonElements[index].focus();
            }
            break;
          default:
        }
      }
    };

    document.addEventListener('click', clickHandler);
    current?.addEventListener('keydown', keyHandler);
    return () => {
      document.removeEventListener('click', clickHandler);
      current?.removeEventListener('keydown', keyHandler);
    };
  }, [listOpen]);

  const dropdownBtnClickHandler = () => {
    setListOpen((prev) => !prev);
    dropdownBtnRef.current?.classList.toggle(styles['dropdownBtn--active']);
  };

  const listItemClickHandler = (e: React.MouseEvent, val: number) => {
    e.preventDefault();
    dropdownBtnClickHandler();
    setCurrentValue(val);
    dropdownBtnRef.current?.focus();
  };

  const displayValue = currentValue
    ? `Net ${currentValue} Day${currentValue > 1 ? 's' : ''}`
    : '';

  return (
    <div
      className={`${styles.container} ${appendClass}`}
      ref={containerRef}
      data-input-element="paymentTerms">
      <label htmlFor={labelId}>
        <button
          type="button"
          className={styles.dropdownBtn}
          onClick={dropdownBtnClickHandler}
          ref={dropdownBtnRef}>
          <input
            type="text"
            className="hidden"
            name="paymentTerms"
            value={currentValue ?? ''}
            onChange={() => null}
            tabIndex={-1}
            required
          />
          <input
            type="text"
            id={labelId}
            className={styles.dropdownBtn__hiddenInput}
            value={displayValue}
            tabIndex={-1}
            readOnly
          />
          <img src={IconArrow} alt="" />
        </button>
      </label>
      {listOpen && (
        <div className={styles.dropdownList}>
          <ul ref={ULRef}>
            <li>
              <button type="button" onClick={(e) => listItemClickHandler(e, 1)}>
                Net 1 Day
              </button>
            </li>
            <li>
              <button type="button" onClick={(e) => listItemClickHandler(e, 7)}>
                Net 7 Days
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={(e) => listItemClickHandler(e, 14)}>
                Net 14 Days
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={(e) => listItemClickHandler(e, 30)}>
                Net 30 Days
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownPaymentTerms;
