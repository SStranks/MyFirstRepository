import CompanyStatement from '#Components/products/CompanyStatement';
import ProductExampleShopList from '#Components/products/ProductExampleShopList';
import ProductInfoCard from '#Components/products/ProductInfoCard';
import styles from './_CategoryLayout.module.scss';

type ElemProps = {
  productCategory: string;
  productList: {
    id: number;
    new: boolean;
    img: string;
    title: string;
    details: string;
  }[];
};

function CategoryLayout(props: ElemProps): JSX.Element {
  const { productCategory, productList } = props;

  const products = productList.map((el) => {
    return (
      <ProductInfoCard
        key={el.id}
        newProduct={el.new}
        productImg={el.img}
        productTitle={el.title}
        productDetails={el.details}
      />
    );
  });

  return (
    <>
      <div className={styles.banner}>
        <h1 className={styles.banner__title}>{productCategory}</h1>
      </div>
      <main className={styles.main}>
        <div className={styles.grid}>{products}</div>
        <ProductExampleShopList />
        <CompanyStatement />
      </main>
    </>
  );
}

export default CategoryLayout;
