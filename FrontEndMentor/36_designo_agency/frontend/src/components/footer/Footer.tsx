import LogoLight from '#Img/desktop/logo-light.png';
import IconFacebook from '#Svg/desktop/icon-facebook.svg';
import IconInstagram from '#Svg/desktop/icon-instagram.svg';
import IconPinterest from '#Svg/desktop/icon-pinterest.svg';
import IconTwitter from '#Svg/desktop/icon-twitter.svg';
import IconYoutube from '#Svg/desktop/icon-youtube.svg';
import styles from './_Footer.module.scss';

function Footer(): JSX.Element {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__nav}>
        <img className={styles.footer__logo} src={LogoLight} alt="" />
        <div className={styles.footer__links}>
          <p className={styles.footer__link}>our company</p>
          <p className={styles.footer__link}>locations</p>
          <p className={styles.footer__link}>contact</p>
        </div>
      </div>
      <hr className={styles.footer__hr} />
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
  );
}

export default Footer;
