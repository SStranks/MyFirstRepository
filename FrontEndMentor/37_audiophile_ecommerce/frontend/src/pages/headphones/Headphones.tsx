import CategoryLayout from '#Layouts/CategoryLayout';
import DefaultLayout from '#Layouts/DefaultLayout';

import ImgXX59 from '#Img/product-xx59-headphones/desktop/image-category-page-preview.jpg';
import ImgXX99MarkI from '#Img/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg';
import ImgXX99MarkII from '#Img/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg';
// import styles from './_Headphones.module.scss';

const productList = [
  {
    id: 1,
    new: true,
    img: ImgXX99MarkII,
    title: 'xx99 mark ii headphones',
    details:
      'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
  },
  {
    id: 2,
    new: false,
    img: ImgXX99MarkI,
    title: 'xx99 mark i headphones',
    details:
      'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
  },
  {
    id: 3,
    new: false,
    img: ImgXX59,
    title: 'xx59 headphones',
    details:
      'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
  },
];

function Headphones(): JSX.Element {
  return (
    <DefaultLayout>
      <CategoryLayout productCategory="headphones" productList={productList} />
    </DefaultLayout>
  );
}

export default Headphones;
