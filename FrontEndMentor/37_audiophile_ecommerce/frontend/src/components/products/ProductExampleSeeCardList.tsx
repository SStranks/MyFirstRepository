import ImgXX59 from '#Img/shared/desktop/image-xx59-headphones.jpg';
import ImgXX99MarkI from '#Img/shared/desktop/image-xx99-mark-one-headphones.jpg';
import ImgZX9 from '#Img/shared/desktop/image-zx9-speaker.jpg';
import ProductExampleSeeCard from './ProductExampleSeeCard';

import styles from './_ProductExampleSeeCardList.module.scss';

const productList = [
  {
    id: 1,
    name: 'xx99 mark i',
    image: ImgXX99MarkI,
    productCategory: 'headphones',
  },
  { id: 2, name: 'xx59', image: ImgXX59 },
  { id: 3, name: 'zx9 speaker', image: ImgZX9 },
];

type ElemProps = {
  appendClass: string;
};

function ProductExampleSeeCardList(props: ElemProps): JSX.Element {
  const { appendClass } = props;

  const productItems = productList.map((el) => {
    return (
      <ProductExampleSeeCard
        key={el.id}
        productImg={el.image}
        productTitle={el.name}
        productCategory={}
        productId={}
      />
    );
  });

  return <div className={`${styles.list} ${appendClass}`}>{productItems}</div>;
}

export default ProductExampleSeeCardList;
