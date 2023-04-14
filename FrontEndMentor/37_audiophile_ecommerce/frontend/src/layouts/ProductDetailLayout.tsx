import CompanyStatement from '#Components/products/CompanyStatement';
import ProductExampleSeeCardList from '#Components/products/ProductExampleSeeCardList';
import ProductExampleShopList from '#Components/products/ProductExampleShopList';
import styles from './_ProductDetailLayout.module.scss';

function ProductDetailLayout(): JSX.Element {
  return (
    <main className={styles.main}>
      <button className={styles.main__btnBack} type="button">
        go back 2
      </button>
      {/* product details component here */}
      {/* product image gallery here */}
      <p className={styles.main__alternatives}>you may also like</p>
      <ProductExampleSeeCardList />
      <ProductExampleShopList appendClass={styles.productExampleShopList} />
      <CompanyStatement appendClass={styles.companyStatement} />
    </main>
  );
}

export default ProductDetailLayout;
