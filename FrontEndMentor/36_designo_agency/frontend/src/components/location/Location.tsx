import styles from './_Location.module.scss';

type ElemProps = {
  title: string;
  illustration: string;
  bgRotation: string;
};

function Location(props: ElemProps): JSX.Element {
  const { title, illustration, bgRotation } = props;

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
      <button type="button">see location</button>
    </div>
  );
}

export default Location;
