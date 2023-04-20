import ProductData from '#Data/Data.json';
import ProductExampleSeeCard from './ProductExampleSeeCard';

import styles from './_ProductExampleSeeCardList.module.scss';

type ElemProps = {
  appendClass: string;
  currentProductId: number;
};

function ProductExampleSeeCardList(props: ElemProps): JSX.Element {
  const { appendClass, currentProductId } = props;

  const currentProduct = ProductData.find((product) => {
    return product.id === currentProductId;
  });

  const productItems = currentProduct?.others.map((others) => {
    const findProduct = ProductData.find((product) => {
      return product.slug === others.slug;
    });

    if (!findProduct) return false;

    return (
      <ProductExampleSeeCard
        key={findProduct.productName}
        productImg={findProduct.image.desktop}
        productTitle={findProduct.productName}
        productCategory={findProduct.category}
        productId={findProduct.id}
      />
    );
  });

  return <div className={`${styles.list} ${appendClass}`}>{productItems}</div>;
}

export default ProductExampleSeeCardList;
