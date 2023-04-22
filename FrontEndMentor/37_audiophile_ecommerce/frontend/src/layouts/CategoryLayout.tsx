import CompanyStatement from '#Components/products/CompanyStatement';
import ProductExampleShopList from '#Components/products/ProductExampleShopList';
import ProductInfoCard from '#Components/products/ProductInfoCard';
import MainTagLayout from './MainTagLayout';
import styles from './_CategoryLayout.module.scss';

type ElemProps = {
  productCategory: string;
  productList: {
    id: number;
    new: boolean;
    productName: string;
    description: string;
    categoryImage: { desktop: string };
  }[];
};

function CategoryLayout(props: ElemProps): JSX.Element {
  const { productCategory, productList } = props;

  const products = productList.map((el) => {
    return (
      <ProductInfoCard
        key={el.id}
        newProduct={el.new}
        productImg={el.categoryImage.desktop}
        productTitle={el.productName}
        productDetails={el.description}
        productCategory={productCategory}
        productId={el.id}
      />
    );
  });

  return (
    <section aria-labelledby={productCategory}>
      <header className={styles.header}>
        <hr className={styles.header__hr} />
        <h1 className={styles.header__title} id={productCategory}>
          {productCategory}
        </h1>
      </header>
      <MainTagLayout>
        <div className={styles.grid}>{products}</div>
        <ProductExampleShopList appendClass={styles.productExampleShopList} />
        <CompanyStatement appendClass={styles.companyStatement} />
      </MainTagLayout>
    </section>
  );
}

export default CategoryLayout;
