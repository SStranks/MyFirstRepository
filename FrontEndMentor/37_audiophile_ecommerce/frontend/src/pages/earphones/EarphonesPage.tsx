import ProductData from '#Data/Data';
import CategoryLayout from '#Layouts/CategoryLayout';
import DefaultLayout from '#Layouts/DefaultLayout';
// import styles from './_EarphonesPage.module.scss';

// TEMP DEV: .
const productList = ProductData.filter((el) => el.category === 'earphones');

function EarphonesPage(): JSX.Element {
  return (
    <DefaultLayout>
      <CategoryLayout productCategory="earphones" productList={productList} />
    </DefaultLayout>
  );
}

export default EarphonesPage;
