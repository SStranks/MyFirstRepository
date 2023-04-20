import CompanyStatement from '#Components/products/CompanyStatement';
import ProductExampleSeeCardList from '#Components/products/ProductExampleSeeCardList';
import ProductExampleShopList from '#Components/products/ProductExampleShopList';
import ProductImageGrid from '#Components/products/ProductImageGrid';
import { useLocation, useNavigate } from 'react-router-dom';

// TEMP DEV:  .
import ProductDetailCard from '#Components/products/ProductDetailCard';
import ProductData from '#Data/Data.json';
import styles from './_ProductDetailLayout.module.scss';

function ProductDetailLayout(): JSX.Element {
  const navHook = useNavigate();
  const location = useLocation();
  const { productCategory, productId } = location.state;

  const product = ProductData.find(
    (el) => el.category === productCategory && el.id === productId
  );

  return (
    <main className={styles.main}>
      <button
        className={styles.main__btnBack}
        onClick={() => navHook(-1)}
        type="button">
        go back
      </button>
      {product && (
        <ProductDetailCard
          appendClass={styles.productDetailCard}
          newProduct={product.new}
          productImg={product.image.desktop}
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
        />
      )}
      <p className={styles.main__alternatives}>you may also like</p>
      <ProductExampleSeeCardList
        appendClass={styles.productExampleSeeList}
        currentProductId={productId}
      />
      <ProductExampleShopList appendClass={styles.productExampleShopList} />
      <CompanyStatement appendClass={styles.companyStatement} />
    </main>
  );
}

export default ProductDetailLayout;
