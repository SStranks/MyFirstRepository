import CompanyStatement from '#Components/products/CompanyStatement';
import ProductDetailCard from '#Components/products/ProductDetailCard';
import ProductExampleSeeCardList from '#Components/products/ProductExampleSeeCardList';
import ProductExampleShopList from '#Components/products/ProductExampleShopList';
import ProductImageGrid from '#Components/products/ProductImageGrid';
import ProductData from '#Data/Data.json';
import { useLocation, useNavigate } from 'react-router-dom';
import MainTagLayout from './MainTagLayout';
import styles from './_ProductDetailLayout.module.scss';

function ProductDetailLayout(): JSX.Element {
  const navHook = useNavigate();
  const location = useLocation();
  const { productCategory, productId } = location.state;

  const product = ProductData.find(
    (el) => el.category === productCategory && el.id === productId
  );

  return (
    <MainTagLayout
      appendClass={styles.mainTag}
      id="skipto-main"
      testId="skipto-main">
      <button
        className={styles.btnBack}
        onClick={() => navHook(-1)}
        type="button">
        go back
      </button>
      {product && (
        <ProductDetailCard
          appendClass={styles.productDetailCard}
          productId={productId}
          newProduct={product.new}
          productImages={product.image}
          productTitle={product.productName}
          productPrice={product.price}
          productDescription={product.description}
          productFeatures={product.features}
          productItems={product.includes}
        />
      )}
      {product && (
        <ProductImageGrid
          appendClass={styles.productImageGrid}
          productImagesGallery={product.gallery}
          productTitle={product.productName}
        />
      )}
      <p className={styles.alternatives}>you may also like</p>
      <ProductExampleSeeCardList
        appendClass={styles.productExampleSeeList}
        currentProductId={productId}
      />
      <ProductExampleShopList appendClass={styles.productExampleShopList} />
      <CompanyStatement appendClass={styles.companyStatement} />
    </MainTagLayout>
  );
}

export default ProductDetailLayout;
