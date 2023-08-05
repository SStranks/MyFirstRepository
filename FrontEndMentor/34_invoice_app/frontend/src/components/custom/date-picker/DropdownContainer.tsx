import {
  Children,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from './DropdownContainer.module.scss';

function Button({ children }: PropsWithChildren): JSX.Element {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}

function Panel({ children }: PropsWithChildren) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}

interface IProps {
  appendClass?: string;
  openDropdown?: boolean;
}

// NOTE:  Compound Component
function DropdownContainer(props: PropsWithChildren<IProps>): JSX.Element {
  const { appendClass, openDropdown, children } = props;
  const childrenArray = Children.toArray(children);
  const [panelIsOpen, setPanelIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  console.log('Dropdown Container');

  const btnClickHandler = () => {
    setPanelIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (openDropdown !== undefined) {
      setPanelIsOpen(openDropdown);
    }
  }, [openDropdown]);

  useEffect(() => {
    const container = containerRef.current;
    const clickHandler = (e: MouseEvent) => {
      if (
        e.target !== panelRef.current &&
        !container?.contains(e.target as HTMLElement)
      ) {
        e.preventDefault();
        setPanelIsOpen(false);
      }
    };

    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, []);

  return (
    <div
      className={`${styles.container} ${appendClass || ''}`}
      ref={containerRef}>
      <button type="button" className={styles.button} onClick={btnClickHandler}>
        {childrenArray[0]}
      </button>

      <div
        className={`${styles.panel} ${
          panelIsOpen ? styles['panel--active'] : ''
        }`}
        ref={panelRef}>
        {childrenArray[1]}
      </div>
    </div>
  );
}

DropdownContainer.ButtonContainer = Button;
DropdownContainer.PanelContainer = Panel;

export default DropdownContainer;
