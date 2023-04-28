import ProductData from '#Data/Data.json';
import CategoryLayout from '#Layouts/CategoryLayout';

// import styles from './_SpeakersPage.module.scss';

// TEMP DEV: .
const productList = ProductData.filter((el) => el.category === 'speakers');

function SpeakersPage(): JSX.Element {
  return (
    <CategoryLayout productCategory="speakers" productList={productList} />
  );
}

export default SpeakersPage;
