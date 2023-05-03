import ProductData from '#Data/Data.json';
import CategoryLayout from '#Layouts/CategoryLayout';

const productList = ProductData.filter((el) => el.category === 'speakers');

function SpeakersPage(): JSX.Element {
  return (
    <CategoryLayout productCategory="speakers" productList={productList} />
  );
}

export default SpeakersPage;
