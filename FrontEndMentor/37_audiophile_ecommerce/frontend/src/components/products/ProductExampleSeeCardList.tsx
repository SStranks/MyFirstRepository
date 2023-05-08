import ProductData from '#Data/Data.json';
import ProductExampleSeeCard from './ProductExampleSeeCard';

import styles from './_ProductExampleSeeCardList.module.scss';

type ElemProps = {
  appendClass?: string;
  currentProductId: number;
};

function ProductExampleSeeCardList(props: ElemProps): JSX.Element {
  const { appendClass, currentProductId } = props;

  const currentProduct = ProductData.find((product) => {
    return product.id === currentProductId;
  });

  const productItems = currentProduct?.others.map((others) => {
    const product = ProductData.find((products) => {
      return products.slug === others.slug;
    });

    if (!product) return false;

    return (
      <ProductExampleSeeCard
        key={product.productName}
        productImages={others.image}
        productTitle={others.productName}
        productCategory={product.category}
        productId={product.id}
      />
    );
  });

  return <div className={`${styles.list} ${appendClass}`}>{productItems}</div>;
}

export default ProductExampleSeeCardList;
