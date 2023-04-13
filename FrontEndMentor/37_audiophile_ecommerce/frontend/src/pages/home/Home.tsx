import ProductExampleShopList from '#Components/products/ProductExampleShopList';
import DefaultLayout from '#Layouts/DefaultLayout';

import styles from './_Home.module.scss';

function Home(): JSX.Element {
  return (
    <DefaultLayout>
      <div className={styles.hero}>
        <hr className={styles.hero__hr} />
        <div className={styles.hero__container}>
          <p className={styles.hero__title}>new product</p>
          <h1 className={styles.hero__product}>xx99 mark ii headphones</h1>
          <p className={styles.hero__info}>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className={styles.hero__btn} type="button">
            see product
          </button>
        </div>
      </div>
      <main className={styles.main}>
        <ProductExampleShopList />
      </main>
    </DefaultLayout>
  );
}

export default Home;
