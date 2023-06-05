import CompanyStatement from '#Components/products/CompanyStatement';
import ProductExampleShopList from '#Components/products/ProductExampleShopList';
import MainTagLayout from '#Layouts/MainTagLayout';
import { Link } from 'react-router-dom';

import styles from './_HomePage.module.scss';

function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <header
        className={styles.hero}
        id="skipto-main"
        data-testid="skipto-main">
        <picture>
          <source
            srcSet="/img/home/desktop/image-hero.jpg"
            media="(min-width: 992px)"
            width="1440px"
            height="729px"
          />
          <source
            srcSet="/img/home/tablet/image-header.jpg"
            media="(min-width: 576px)"
            width="1536px"
            height="1458px"
          />
          <source
            srcSet="/img/home/mobile/image-header.jpg"
            media="(max-width: 575px)"
            width="750px"
            height="1200px"
          />
          <img
            src="/img/home/desktop/image-hero.jpg"
            className={styles.hero__img}
            alt="XX99 mark 2 headphones"
          />
        </picture>
        <hr className={styles.hero__hr} />
        <div className={styles.hero__container}>
          <p className={styles.hero__title}>new product</p>
          <h1 className={styles.hero__product}>xx99 mark ii headphones</h1>
          <p className={styles.hero__info}>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link
            className={styles.hero__seeProductLink}
            to="/headphones/4"
            state={{ productCategory: 'headphones', productId: 4 }}
            aria-label="See product XX99 mark 2 headphones.">
            see product
          </Link>
        </div>
      </header>
      <MainTagLayout>
        <ProductExampleShopList />
        <div className={styles.grid}>
          <div className={styles.zx9}>
            <picture>
              <source
                srcSet="/img/home/desktop/image-speaker-zx9.png"
                media="(min-width: 1024px)"
                width="756px"
                height="918px"
              />
              <source
                srcSet="/img/home/tablet/image-speaker-zx9.png"
                media="(min-width: 481px)"
                width="366px"
                height="444px"
              />
              <source
                srcSet="/img/home/mobile/image-speaker-zx9.png"
                media="(max-width: 480px)"
                width="320px"
                height="388px"
              />
              <img
                className={styles.zx9__img}
                src="/img/home/desktop/image-speaker-zx9.png"
                alt="product ZX9 speaker"
              />
            </picture>
            <div className={styles.zx9__container}>
              <p className={styles.zx9__title}>zx9 speaker</p>
              <p className={styles.zx9__info}>
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Link
                to="/speakers/6"
                className={styles.zx9__btn}
                state={{ productCategory: 'speakers', productId: 6 }}
                aria-label="See product ZX9 speaker">
                see product
              </Link>
            </div>
          </div>
          <div className={styles.zx7}>
            <picture>
              <source
                srcSet="/img/home/desktop/image-speaker-zx7.jpg"
                media="(min-width: 1024px)"
                width="1110px"
                height="320px"
              />
              <source
                srcSet="/img/home/tablet/image-speaker-zx7.jpg"
                media="(min-width: 667px)"
                width="689px"
                height="320px"
              />
              <source
                srcSet="/img/home/mobile/image-speaker-zx7.jpg"
                media="(max-width: 666px)"
                width="654px"
                height="640px"
              />
              <img
                className={styles.zx7__img}
                src="/img/home/desktop/image-speaker-zx7.jpg"
                alt="product ZX7 speaker"
              />
            </picture>
            <div className={styles.zx7__container}>
              <p className={styles.zx7__title}>zx7 speaker</p>
              <Link
                to="/speakers/5"
                className={styles.zx7__btn}
                state={{ productCategory: 'speakers', productId: 5 }}
                aria-label="See product ZX7 speaker">
                see product
              </Link>
            </div>
          </div>
          <picture>
            <source
              srcSet="/img/home/desktop/image-earphones-yx1.jpg"
              media="(min-wdith: 800px)"
              width="540px"
              height="320px"
            />
            <source
              srcSet="/img/home/tablet/image-earphones-yx1.jpg"
              media="(min-width: 667px)"
              width="678px"
              height="640px"
            />
            <source
              srcSet="/img/home/mobile/image-earphones-yx1.jpg"
              media="(max-width: 666px)"
              width="654px"
              height="400px"
            />
            <img
              className={styles['yx1-img']}
              src="/img/home/desktop/image-earphones-yx1.jpg"
              alt="product YX1 earphones"
            />
          </picture>
          <div className={styles.yx1}>
            <div className={styles.yx1__container}>
              <div className={styles.yx1__container__subContainer}>
                <p className={styles.yx1__title}>yx1 earphones</p>
                <Link
                  to="/earphones/1"
                  className={styles.yx1__btn}
                  state={{ productCategory: 'earphones', productId: 1 }}
                  aria-label="See product YX1 earphones">
                  see product
                </Link>
              </div>
            </div>
          </div>
        </div>
        <CompanyStatement appendClass={styles.companyStatement} />
      </MainTagLayout>
    </div>
  );
}

export default Home;
