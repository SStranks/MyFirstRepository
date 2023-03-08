import Nav from '#Components/nav/Nav';
import DefaultLayout from '#Layouts/DefaultLayout';

import ImgAustralia from '#Img/desktop/image-map-australia.png';
import ImgCanada from '#Img/desktop/image-map-canada.png';
import ImgUnitedKingdom from '#Img/desktop/image-map-united-kingdom.png';

import styles from './_Locations.module.scss';

function Locations(): JSX.Element {
  return (
    <DefaultLayout>
      <Nav />
      <div className={styles.grid}>
        <div className={styles.grid__row}>
          <div className={styles.info}>
            <div className={styles.info__grid}>
              <h2>Canada</h2>
              <div>
                <p className={styles.info__title}>Designo Central Office</p>
                <p>
                  3886 Wellington Street
                  <br />
                  Toronto, Ontario M9C 3J5
                </p>
              </div>
              <div>
                <p className={styles.info__title}>Contact</p>
                <p>
                  P : +1 253-863-8967
                  <br />M : contact@designo.co
                </p>
              </div>
            </div>
          </div>
          <img
            src={ImgCanada}
            className={`${styles.img} ${styles.img__australia}`}
            alt=""
          />
        </div>
        <div className={`${styles.grid__row} ${styles['grid__row--reverse']}`}>
          <div className={styles.info}>
            <div className={styles.info__grid}>
              <h2>Australia</h2>
              <div>
                <p className={styles.info__title}>Designo AU Office</p>
                <p>
                  19 Balonne Street
                  <br />
                  New South Wales 2443
                </p>
              </div>
              <div>
                <p className={styles.info__title}>Contact</p>
                <p>
                  P : &#40;02&#41; 6720 9092
                  <br />M : contact@designo.au
                </p>
              </div>
            </div>
          </div>
          <img
            src={ImgAustralia}
            className={`${styles.img} ${styles.img__australia}`}
            alt=""
          />
        </div>
        <div className={styles.grid__row}>
          <div className={styles.info}>
            <div className={styles.info__grid}>
              <h2>United Kingdom</h2>
              <div>
                <p className={styles.info__title}>Designo UK Office</p>
                <p>
                  13 Colorado Way
                  <br />
                  Rhyd-y-fro SA8 9GA
                </p>
              </div>
              <div>
                <p className={styles.info__title}>Contact</p>
                <p>
                  P : 078 3115 1400
                  <br />M : contact@designo.uk
                </p>
              </div>
            </div>
          </div>
          <img
            src={ImgUnitedKingdom}
            className={`${styles.img} ${styles.img__australia}`}
            alt=""
          />
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Locations;
