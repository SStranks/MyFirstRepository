import styles from './ModalSidebar.module.scss';

type SidebarProps = {
  title: string;
};

function ModalSidebar(props: SidebarProps): JSX.Element {
  const { title } = props;

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default ModalSidebar;
