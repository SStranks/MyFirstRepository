import styles from './_Quality.module.scss';

type ElemProps = {
  title: string;
  caption: string | undefined;
  illustration: string;
  bgRotation: string;
};

function Quality(props: ElemProps): JSX.Element {
  const { title, caption, illustration, bgRotation } = props;

  return (
    <div className={styles.quality}>
      <div className={styles.image}>
        <img src={illustration} alt="" />
        <div
          className={styles.bgCircle}
          style={{ transform: `rotate(${bgRotation})` }}
        />
      </div>
      <p className={styles.quality__title}>{title}</p>
      {caption && (
        <p className={styles.quality__caption} data-testid="caption">
          {caption}
        </p>
      )}
    </div>
  );
}

export default Quality;
