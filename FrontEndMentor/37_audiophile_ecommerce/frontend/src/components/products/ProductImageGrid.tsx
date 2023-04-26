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

  const images = Object.values(productImagesGallery);

  const productImages = images.map((img, i) => {
    return (
      <picture
        className={`${styles.grid__picture} ${styles[`gridArea${i + 1}`]}`}
        key={img.desktop}>
        <source srcSet={img.desktop} media="(min-width: 1024px)" />
        <source srcSet={img.tablet} media="(min-width: 481px)" />
        <source srcSet={img.mobile} media="(max-width: 480px)" />
        <img
          className={styles.grid__img}
          src={img.desktop}
          alt={`${productTitle} being used`}
        />
      </picture>
    );
  });

  return (
    <div className={`${styles.grid} ${appendClass}`}>{...productImages}</div>
  );
}

export default ProductImageGrid;
