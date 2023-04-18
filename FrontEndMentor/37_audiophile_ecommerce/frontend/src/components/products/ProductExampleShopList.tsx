import ImgEarphones from '#Img/shared/desktop/image-category-thumbnail-earphones.png';
import ImgHeadphones from '#Img/shared/desktop/image-category-thumbnail-headphones.png';
import ImgSpeakers from '#Img/shared/desktop/image-category-thumbnail-speakers.png';
import ProductExampleShopCard from './ProductExampleShopCard';

import styles from './_ProductExampleShopList.module.scss';

const productsList = [
  {
    id: 1,
    name: 'headphones',
    image: ImgHeadphones,
    productShopURL: '/headphones',
  },
  { id: 2, name: 'speakers', image: ImgSpeakers, productShopURL: '/speakers' },
  {
    id: 3,
    name: 'earphones',
    image: ImgEarphones,
    productShopURL: '/earphones',
  },
];

type ElemProps = {
  appendClass: string;
};

function ProductExampleShopList(props: ElemProps): JSX.Element {
  const { appendClass } = props;

  const productItems = productsList.map((el) => {
    return (
      <ProductExampleShopCard
        key={el.id}
        productName={el.name}
        productImg={el.image}
        productShopURL={el.productShopURL}
      />
    );
  });

  return <div className={`${styles.list} ${appendClass}`}>{productItems}</div>;
}

export default ProductExampleShopList;
