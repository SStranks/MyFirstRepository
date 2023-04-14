import CategoryLayout from '#Layouts/CategoryLayout';
import DefaultLayout from '#Layouts/DefaultLayout';

import ImgYX1 from '#Img/product-yx1-earphones/desktop/image-category-page-preview.jpg';

// import styles from './_EarphonesPage.module.scss';

const productList = [
  {
    id: 1,
    new: true,
    img: ImgYX1,
    title: 'yx1 wireless earphones',
    details:
      'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
  },
];

function EarphonesPage(): JSX.Element {
  return (
    <DefaultLayout>
      <CategoryLayout productCategory="earphones" productList={productList} />
    </DefaultLayout>
  );
}

export default EarphonesPage;
