import styles from './_ProductImageGrid.module.scss';

type ElemProps = {
  appendClass: string;
  productImagesGallery: Record<
    string,
    { mobile: string; tablet: string; desktop: string }
  >;
  productTitle: string;
};

function ProductImageGrid(props: ElemProps): JSX.Element {
  const { appendClass, productImagesGallery, productTitle } = props;

  const images = [
    productImagesGallery.first.desktop,
    productImagesGallery.third.desktop,
    productImagesGallery.second.desktop,
  ];
  const productImages = images.map((imgURL, i) => {
    return (
      <img
        key={imgURL}
        className={styles[`gridArea${i + 1}`]}
        src={imgURL}
        alt={`${productTitle} being used`}
      />
    );
  });

  return (
    <div className={`${styles.grid} ${appendClass}`}>{...productImages}</div>
  );
}

export default ProductImageGrid;
