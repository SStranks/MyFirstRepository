// import Data from '#Data/Data.json';
import ProductExampleShopCard from './ProductExampleShopCard';

import styles from './_ProductExampleShopList.module.scss';

const productsList = [
  {
    id: 1,
    name: 'headphones',
    image: '/img/shared/desktop/image-category-thumbnail-headphones.png',
    productShopURL: '/headphones',
  },
  {
    id: 2,
    name: 'speakers',
    image: '/img/shared/desktop/image-category-thumbnail-speakers.png',
    productShopURL: '/speakers',
  },
  {
    id: 3,
    name: 'earphones',
    image: '/img/shared/desktop/image-category-thumbnail-earphones.png',
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
