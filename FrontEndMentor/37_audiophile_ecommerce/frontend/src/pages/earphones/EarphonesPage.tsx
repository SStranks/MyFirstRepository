import ProductData from '#Data/Data.json';
import CategoryLayout from '#Layouts/CategoryLayout';

const productList = ProductData.filter((el) => el.category === 'earphones');

function EarphonesPage(): JSX.Element {
  return (
    <CategoryLayout productCategory="earphones" productList={productList} />
  );
}

export default EarphonesPage;
