import styles from './_Quality.module.scss';

type ElemProps = {
  title: string;
  caption: string | undefined;
  illustration: string;
  bgRotation: string;
  button: boolean;
};

function Quality(props: ElemProps): JSX.Element {
  const { title, caption, illustration, bgRotation, button } = props;

  return (
    <div className={styles.quality}>
      <div className={styles.image}>
        <img src={illustration} alt="" />
        <div
          className={styles['bg-circle']}
          style={{ transform: `rotate(${bgRotation})` }}
        />
      </div>
      <p className={styles.quality__title}>{title}</p>
      {caption && <p className={styles.quality__caption}>{caption}</p>}
      {button && <button type="button">see location</button>}
    </div>
  );
}

export default Quality;
