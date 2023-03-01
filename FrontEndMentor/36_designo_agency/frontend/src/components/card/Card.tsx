import IconArrowRight from '#Svg/desktop/icon-right-arrow.svg';
import styles from './_Card.module.scss';

type ElemProps = {
  title: string;
  image: string;
};

function Card(props: ElemProps): JSX.Element {
  const { title, image } = props;

  return (
    <div className={styles.card} style={{ backgroundImage: `url(${image})` }}>
      <h2>{title}</h2>
      <div className={styles.card__view}>
        <p>view projects</p>
        <img src={IconArrowRight} alt="" />
      </div>
    </div>
  );
}

export default Card;
