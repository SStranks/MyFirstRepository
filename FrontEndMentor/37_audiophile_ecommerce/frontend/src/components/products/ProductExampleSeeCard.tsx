import { Link } from 'react-router-dom';
import styles from './_ProductExampleSeeCard.module.scss';

type ElemProps = {
  productImg: string;
  productTitle: string;
  productCategory: string;
  productId: number;
};

function ProductExampleSeeCard(props: ElemProps): JSX.Element {
  const { productImg, productTitle, productCategory, productId } = props;

  return (
    <div className={styles.card}>
      <img className={styles.card__img} src={productImg} alt="" />
      <p className={styles.card__title}>{productTitle}</p>
      <Link
        to={`/${productCategory}/${productId}`}
        state={{ productCategory, productId }}>
        <button className={styles.card__btn} type="button">
          see product
        </button>
      </Link>
    </div>
  );
}

export default ProductExampleSeeCard;
