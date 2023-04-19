import ProductData from '#Data/Data';
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

  const productItems = currentProduct?.others.map((product) => {
    return (
      <ProductExampleSeeCard
        key={product.productName}
        productImg={product.image.desktop}
        productTitle={product.productName}
        productCategory={product.category}
        productId={product.id}
      />
    );
  });

  return <div className={`${styles.list} ${appendClass}`}>{productItems}</div>;
}

export default ProductExampleSeeCardList;
