import ProductData from '#Data/Data.json';
import CategoryLayout from '#Layouts/CategoryLayout';
// import styles from './_HeadphonesPage.module.scss';

// TEMP DEV: .
const productList = ProductData.filter((el) => el.category === 'headphones');

function HeadphonesPage(): JSX.Element {
  return (
    <CategoryLayout productCategory="headphones" productList={productList} />
  );
}

export default HeadphonesPage;
