import ProductData from '#Data/Data.json';
import CategoryLayout from '#Layouts/CategoryLayout';
import DefaultLayout from '#Layouts/DefaultLayout';

// import styles from './_SpeakersPage.module.scss';

// TEMP DEV: .
const productList = ProductData.filter((el) => el.category === 'speakers');

function SpeakersPage(): JSX.Element {
  return (
    <DefaultLayout>
      <CategoryLayout productCategory="speakers" productList={productList} />
    </DefaultLayout>
  );
}

export default SpeakersPage;
