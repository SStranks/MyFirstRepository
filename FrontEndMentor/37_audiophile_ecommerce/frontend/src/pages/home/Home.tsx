import CompanyStatement from '#Components/products/CompanyStatement';
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
        <div className={styles.main__grid}>
          <div className={styles.zx9}>
            <div className={styles.zx9__container}>
              <p className={styles.zx9__title}>zx9 speaker</p>
              <p className={styles.zx9__info}>
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <button className={styles.zx9__btn} type="button">
                see product
              </button>
            </div>
          </div>
          <div className={styles.zx7}>
            <div>
              <p className={styles.zx7__title}>zx7 speaker</p>
              <button className={styles.zx7__btn} type="button">
                see product
              </button>
            </div>
          </div>
          <div className={styles['yx1-img']} />
          <div className={styles.yx1}>
            <div>
              <p className={styles.yx1__title}>yx1 earphones</p>
              <button className={styles.yx1__btn} type="button">
                see product
              </button>
            </div>
          </div>
        </div>
        <CompanyStatement />
      </main>
    </DefaultLayout>
  );
}

export default Home;
