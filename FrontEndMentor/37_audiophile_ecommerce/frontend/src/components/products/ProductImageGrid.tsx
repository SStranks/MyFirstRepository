import styles from './_ProductImageGrid.module.scss';

type ElemProps = {
  appendClass: string;
  productImagesURL: string[];
};

function ProductImageGrid(props: ElemProps): JSX.Element {
  const { appendClass, productImagesURL } = props;

  const productImages = productImagesURL.map((imgURL, i) => {
    return (
      <img
        key={imgURL}
        className={styles[`gridArea${i + 1}`]}
        src={imgURL}
        alt=""
      />
    );
  });

  return (
    <div className={`${styles.grid} ${appendClass}`}>{...productImages}</div>
  );
}

export default ProductImageGrid;
