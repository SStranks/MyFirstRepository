import styles from './SidebarButtons.module.scss';

type SidebarButtonsProps = {
  children: JSX.Element | boolean;
};

function SidebarButtons(props: SidebarButtonsProps): JSX.Element {
  const { children } = props;

  return (
    <div className={styles.containerBtns}>
      {children}
      {/* <div className={styles.container__buttons}>{children}</div> */}
    </div>
  );
}

export default SidebarButtons;
