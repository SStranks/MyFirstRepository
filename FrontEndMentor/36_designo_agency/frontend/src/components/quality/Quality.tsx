import styles from './_Quality.module.scss';

type ElemProps = {
  title: string;
  caption: string;
  illustration: string;
};

function Quality(props: ElemProps): JSX.Element {
  const { title, caption, illustration } = props;

  return (
    <div className={styles.quality}>
      <div className={styles.image}>
        <img src={illustration} alt="" />
        <div className={styles['bg-circle']} />
      </div>
      <p className={styles.quality__title}>{title}</p>
      <p>{caption}</p>
    </div>
  );
}

export default Quality;
