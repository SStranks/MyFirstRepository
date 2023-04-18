import { Link } from 'react-router-dom';
import styles from './_ProductInfoCard.module.scss';

type ElemProps = {
  productImg: string;
  productTitle: string;
  productDetails: string;
  newProduct: boolean;
  productCategory: string;
  productId: number;
};

function ProductInfoCard(props: ElemProps): JSX.Element {
  const {
    productImg,
    productTitle,
    productDetails,
    newProduct,
    productCategory,
    productId,
  } = props;

  // let image;
  // let test;
  // import(`${productImg}`).then((el) => {
  //   image = el.default;
  // });
  // import(
  //   '#Img/product-xx59-headphones/desktop/image-category-page-preview.jpg'
  // ).then((el) => {
  //   console.log(el.default);
  //   test = el.default;
  // });

  // console.log(image);

  return (
    <div className={styles.card}>
      <img className={styles.card__img} src={productImg} alt="" />
      <div className={styles.card__panel}>
        {newProduct && <p className={styles.card__new}>new product</p>}
        <p className={styles.card__title}>{productTitle}</p>
        <p className={styles.card__details}>{productDetails}</p>
        <Link to={`/${productCategory}/${productId}`}>
          <button className={styles.card__btn} type="button">
            see product
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductInfoCard;
