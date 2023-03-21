import Nav from '#Components/nav/Nav';
import DefaultLayout from '#Layouts/DefaultLayout';

import SvgAustralia from '#Svg/desktop/illustration-australia.svg';
import SvgCanada from '#Svg/desktop/illustration-canada.svg';
import SvgUnitedKingdom from '#Svg/desktop/illustration-united-kingdom.svg';

import Quality from '#Components/quality/Quality';
import styles from './_Contact.module.scss';

function Contact(): JSX.Element {
  return (
    <DefaultLayout>
      <Nav />
      <div className={styles.header}>
        <div className={styles.header__container}>
          <div className={styles.header__info}>
            <h1>Contact Us</h1>
            <p>
              Ready to take it to the next level? Let’s talk about your project
              or idea and find out how we can help your business grow. If you
              are looking for unique digital experiences that’s relatable to
              your users, drop us a line.
            </p>
          </div>
        </div>
        <form className={styles.header__form}>
          <div className={styles.header__input}>
            <input type="text" placeholder="Name" />
          </div>
          <div className={styles.header__input}>
            <input type="text" placeholder="Email Address" />
          </div>
          <div className={styles.header__input}>
            <input type="text" placeholder="Phone" />
          </div>
          <div className={styles.header__input}>
            <textarea rows={20} placeholder="Your Message" />
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
      <div className={styles.qualities}>
        <Quality
          title="canada"
          caption=""
          illustration={SvgCanada}
          bgRotation="0deg"
          button
        />
        <Quality
          title="australia"
          caption=""
          illustration={SvgAustralia}
          bgRotation="270deg"
          button
        />
        <Quality
          title="united kingdom"
          caption=""
          illustration={SvgUnitedKingdom}
          bgRotation="90deg"
          button
        />
      </div>
    </DefaultLayout>
  );
}

export default Contact;
