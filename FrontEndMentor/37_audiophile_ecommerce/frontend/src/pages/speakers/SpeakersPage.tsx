import CategoryLayout from '#Layouts/CategoryLayout';
import DefaultLayout from '#Layouts/DefaultLayout';

import ImgZX7 from '#Img/product-zx7-speaker/desktop/image-category-page-preview.jpg';
import ImgZX9 from '#Img/product-zx9-speaker/desktop/image-category-page-preview.jpg';

// import styles from './_SpeakersPage.module.scss';

const productList = [
  {
    id: 1,
    new: true,
    img: ImgZX9,
    title: 'zx9 speaker',
    details:
      'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
  },
  {
    id: 2,
    new: false,
    img: ImgZX7,
    title: 'zx7 speaker',
    details:
      'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
  },
];

function SpeakersPage(): JSX.Element {
  return (
    <DefaultLayout>
      <CategoryLayout productCategory="speakers" productList={productList} />
    </DefaultLayout>
  );
}

export default SpeakersPage;
