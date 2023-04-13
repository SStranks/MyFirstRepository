import ImgEarphones from '#Img/shared/desktop/image-category-thumbnail-earphones.png';
import ImgHeadphones from '#Img/shared/desktop/image-category-thumbnail-headphones.png';
import ImgSpeakers from '#Img/shared/desktop/image-category-thumbnail-speakers.png';
import ProductExampleShopCard from './ProductExampleShopCard';

import styles from './_ProductExampleShopList.module.scss';

const productsList = [
  { id: 1, name: 'headphones', image: ImgHeadphones },
  { id: 2, name: 'speakers', image: ImgSpeakers },
  { id: 3, name: 'earphones', image: ImgEarphones },
];

function ProductExampleShopList(): JSX.Element {
  const productItems = productsList.map((el) => {
    return (
      <ProductExampleShopCard
        productName={el.name}
        productImg={el.image}
        key={el.id}
      />
    );
  });

  return <div className={styles.list}>{productItems}</div>;
}

export default ProductExampleShopList;
