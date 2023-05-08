import { Link } from 'react-router-dom';

import IconFacebook from '#Svg/desktop/icon-facebook.svg';
import IconInstagram from '#Svg/desktop/icon-instagram.svg';
import IconTwitter from '#Svg/desktop/icon-twitter.svg';
import Logo from '#Svg/desktop/logo.svg';
import styles from './_Footer.module.scss';

function Footer(): JSX.Element {
  return (
    <footer className={styles.footer} id="skipto-footer">
      <nav className={styles.footer__nav} aria-label="secondary">
        <img className={styles.footer__logo} src={Logo} alt="Audiophile Logo" />
        <div className={styles.footer__links}>
          <Link to="/" className={styles.footer__link}>
            home
          </Link>
          <Link to="/headphones" className={styles.footer__link}>
            headphones
          </Link>
          <Link to="/speakers" className={styles.footer__link}>
            speakers
          </Link>
          <Link to="/earphones" className={styles.footer__link}>
            earphones
          </Link>
        </div>
      </nav>
      <p className={styles.footer__info}>
        Audiophile is an all in one stop to fulfill your audio needs. We&#39;re
        a small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we&#39;re open 7 days a week.
      </p>
      <div className={styles.footer__bottombar}>
        <p className={styles.footer__copyright}>
          Copyright 2021. All Rights Reserved
        </p>
        <div className={styles.footer__social}>
          <a
            href="http://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer">
            <img
              className={styles.footer__social__icon}
              src={IconFacebook}
              alt="Facebook Media Page"
            />
          </a>
          <a
            href="http://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer">
            <img
              className={styles.footer__social__icon}
              src={IconTwitter}
              alt="Twitter Media Page"
            />
          </a>
          <a
            href="http://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer">
            <img
              className={styles.footer__social__icon}
              src={IconInstagram}
              alt="Instagram Media Page"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
