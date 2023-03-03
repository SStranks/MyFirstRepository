import styles from './_Card2.module.scss';

type ElemProps = {
  title: string;
  caption: string;
  image: string;
};

function Card2(props: ElemProps): JSX.Element {
  const { title, caption, image } = props;

  return (
    <div className={styles.card}>
      <img src={image} alt="" />
      <div className={styles.card__info}>
        <h3>{title}</h3>
        <p>{caption}</p>
      </div>
    </div>
  );
}

export default Card2;
