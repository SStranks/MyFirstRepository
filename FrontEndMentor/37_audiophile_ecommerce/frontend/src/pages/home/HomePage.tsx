import CompanyStatement from '#Components/products/CompanyStatement';
import ProductExampleShopList from '#Components/products/ProductExampleShopList';
import DefaultLayout from '#Layouts/DefaultLayout';
import { Link } from 'react-router-dom';

import MainTagLayout from '#Layouts/MainTagLayout';
import styles from './_HomePage.module.scss';

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
          <Link
            to="/headphones/4"
            state={{ productCategory: 'headphones', productId: 4 }}>
            <button className={styles.hero__btn} type="button">
              see product
            </button>
          </Link>
        </div>
      </div>
      <MainTagLayout>
        <ProductExampleShopList appendClass="" />
        <div className={styles.grid}>
          <div className={styles.zx9}>
            <div className={styles.zx9__container}>
              <p className={styles.zx9__title}>zx9 speaker</p>
              <p className={styles.zx9__info}>
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Link
                to="/speakers/6"
                state={{ productCategory: 'speakers', productId: 6 }}>
                <button className={styles.zx9__btn} type="button">
                  see product
                </button>
              </Link>
            </div>
          </div>
          <div className={styles.zx7}>
            <div>
              <p className={styles.zx7__title}>zx7 speaker</p>
              <Link
                to="/speakers/5"
                state={{ productCategory: 'speakers', productId: 5 }}>
                <button className={styles.zx7__btn} type="button">
                  see product
                </button>
              </Link>
            </div>
          </div>
          <img
            className={styles['yx1-img']}
            // src=""
            src="/img/home/desktop/image-earphones-yx1.jpg"
            alt=""
          />
          <div className={styles.yx1}>
            <div>
              <p className={styles.yx1__title}>yx1 earphones</p>
              <Link
                to="/earphones/1"
                state={{ productCategory: 'earphones', productId: 1 }}>
                <button className={styles.yx1__btn} type="button">
                  see product
                </button>
              </Link>
            </div>
          </div>
        </div>
        <CompanyStatement appendClass={styles.companyStatement} />
      </MainTagLayout>
    </DefaultLayout>
  );
}

export default Home;
