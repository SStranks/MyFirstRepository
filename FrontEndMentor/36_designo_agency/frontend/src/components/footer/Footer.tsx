import { Link, useLocation } from 'react-router-dom';

import LogoLight from '#Img/desktop/logo-light.png';
import IconFacebook from '#Svg/desktop/icon-facebook.svg';
import IconInstagram from '#Svg/desktop/icon-instagram.svg';
import IconPinterest from '#Svg/desktop/icon-pinterest.svg';
import IconTwitter from '#Svg/desktop/icon-twitter.svg';
import IconYoutube from '#Svg/desktop/icon-youtube.svg';
import styles from './_Footer.module.scss';

function Footer(): JSX.Element {
  // To deactivate the 'hero' element on the 'contact' page and adjust marg/pad
  const { pathname } = useLocation();

  return (
    <div
      className={`${styles.footer} ${
        pathname === '/contact' ? styles.routeContactPage : ''
      }`}>
      <div className={styles.footer__container}>
        {pathname !== '/contact' && (
          <div className={styles.footer__hero}>
            <div>
              <p className={styles.footer__hero__header}>
                Let&#39;s talk about your project
              </p>
              <p className={styles.footer__hero__body}>
                Ready to take it to the next level? Contact us today and find
                out how our expertise can help your business grow.
              </p>
            </div>
            <button className={styles.footer__hero__button} type="button">
              get in touch
            </button>
          </div>
        )}
        <div className={styles.footer__nav}>
          <img className={styles.footer__logo} src={LogoLight} alt="" />
          <div className={styles.footer__links}>
            <Link to="/about">
              <p className={styles.footer__link}>our company</p>
            </Link>
            <Link to="/locations">
              <p className={styles.footer__link}>locations</p>
            </Link>
            <Link to="/contact">
              <p className={styles.footer__link}>contact</p>
            </Link>
          </div>
          <hr className={styles.footer__hr} />
        </div>
        <div className={styles.footer__info}>
          <div className={styles.footer__details}>
            <div>
              <p className={styles['footer__bold-text']}>
                Designo Central Office
              </p>
              <p>3386 Wellington Street</p>
              <p>Toronto, Ontario M9C 3J5</p>
            </div>
            <div className={styles['footer__bold-text']}>
              <p>Contact Us &#40;Central Office&#41;</p>
              <p>P : +1 253-863-8967</p>
              <p>M : contact@designo.co</p>
            </div>
          </div>
          <div className={styles.footer__icons}>
            <img src={IconFacebook} alt="" />
            <img src={IconYoutube} alt="" />
            <img src={IconTwitter} alt="" />
            <img src={IconPinterest} alt="" />
            <img src={IconInstagram} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
