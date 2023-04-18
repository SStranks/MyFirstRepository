import CompanyStatement from '#Components/products/CompanyStatement';
import ProductExampleSeeCardList from '#Components/products/ProductExampleSeeCardList';
import ProductExampleShopList from '#Components/products/ProductExampleShopList';
import ProductImageGrid from '#Components/products/ProductImageGrid';
import { useNavigate } from 'react-router-dom';

// TEMP DEV:  .
import Img1 from '#Img/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg';
import Img2 from '#Img/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg';
import Img3 from '#Img/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg';
import Img4 from '#Img/product-xx99-mark-two-headphones/desktop/image-product.jpg';

import ProductDetailCard from '#Components/products/ProductDetailCard';
import styles from './_ProductDetailLayout.module.scss';

// TEMP DEV:  .
const productImages = [Img1, Img3, Img2];
const product = {
  newProduct: true,
  productImg: Img4,
  productTitle: 'xx99 mark ii headphones',
  productDetail:
    'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
  productPrice: 2999,
  productFeatures:
    'Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat. \n\nThe advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.',
  productItems: [
    { quantity: 1, item: 'headphone unit' },
    { quantity: 2, item: 'replacement earcups' },
    { quantity: 1, item: 'user manual' },
    { quantity: 1, item: '3.5mm 5m audio cable' },
    { quantity: 1, item: 'travel bag' },
  ],
};

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
      <ProductDetailCard
        appendClass={styles.productDetailCard}
        newProduct={product.newProduct}
        productImg={product.productImg}
        productTitle={product.productTitle}
        productPrice={product.productPrice}
        productDetail={product.productDetail}
        productFeatures={product.productFeatures}
        productItems={product.productItems}
      />
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
