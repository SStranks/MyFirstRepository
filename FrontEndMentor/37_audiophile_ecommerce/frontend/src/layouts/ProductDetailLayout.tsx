import CompanyStatement from '#Components/products/CompanyStatement';
import ProductExampleSeeCardList from '#Components/products/ProductExampleSeeCardList';
import ProductExampleShopList from '#Components/products/ProductExampleShopList';
import ProductImageGrid from '#Components/products/ProductImageGrid';
import { useNavigate } from 'react-router-dom';

// TEMP DEV:  .
import Img1 from '#Img/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg';
import Img2 from '#Img/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg';
import Img3 from '#Img/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg';

import styles from './_ProductDetailLayout.module.scss';

const productImages = [Img1, Img3, Img2];

function ProductDetailLayout(): JSX.Element {
  const navHook = useNavigate();

  return (
    <main className={styles.main}>
      <button
        className={styles.main__btnBack}
        onClick={() => navHook(-1)}
        type="button">
        go back
      </button>
      {/* product details component here */}
      <ProductImageGrid
        appendClass={styles.productImageGrid}
        productImagesURL={productImages}
      />
      <p className={styles.main__alternatives}>you may also like</p>
      <ProductExampleSeeCardList appendClass={styles.productExampleSeeList} />
      <ProductExampleShopList appendClass={styles.productExampleShopList} />
      <CompanyStatement appendClass={styles.companyStatement} />
    </main>
  );
}

export default ProductDetailLayout;
