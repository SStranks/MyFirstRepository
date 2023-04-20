import ProductData from '#Data/Data.json';
import CategoryLayout from '#Layouts/CategoryLayout';
import DefaultLayout from '#Layouts/DefaultLayout';
// import styles from './_HeadphonesPage.module.scss';

// TEMP DEV: .
const productList = ProductData.filter((el) => el.category === 'headphones');

function HeadphonesPage(): JSX.Element {
  return (
    <DefaultLayout>
      <CategoryLayout productCategory="headphones" productList={productList} />
    </DefaultLayout>
  );
}

export default HeadphonesPage;
