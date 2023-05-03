import ProductData from '#Data/Data.json';
import CategoryLayout from '#Layouts/CategoryLayout';

const productList = ProductData.filter((el) => el.category === 'headphones');

function HeadphonesPage(): JSX.Element {
  return (
    <CategoryLayout productCategory="headphones" productList={productList} />
  );
}

export default HeadphonesPage;
