import DefaultLayout from '#Layouts/DefaultLayout';
import ProductDetailLayout from '#Layouts/ProductDetailLayout';

// import styles from './_ProductDetailsPage.module.scss';

function ProductDetailsPage(): JSX.Element {
  return (
    <DefaultLayout>
      <ProductDetailLayout />
    </DefaultLayout>
  );
}

export default ProductDetailsPage;
