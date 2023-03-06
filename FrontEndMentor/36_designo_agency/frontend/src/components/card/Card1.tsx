import { Link } from 'react-router-dom';

import IconArrowRight from '#Svg/desktop/icon-right-arrow.svg';
import styles from './_Card1.module.scss';

type ElemProps = {
  title: string;
  image: string;
  url: string;
};

function Card(props: ElemProps): JSX.Element {
  const { title, image, url } = props;

  return (
    <Link to={url}>
      <div className={styles.card} style={{ backgroundImage: `url(${image})` }}>
        <h2>{title}</h2>
        <div className={styles.card__view}>
          <p>view projects</p>
          <img src={IconArrowRight} alt="" />
        </div>
      </div>
    </Link>
  );
}

export default Card;
