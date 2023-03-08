import Nav from '#Components/nav/Nav';
import DefaultLayout from '#Layouts/DefaultLayout';

import ImgHero from '#Img/desktop/image-about-hero.jpg';
import ImgRealDeal from '#Img/desktop/image-real-deal.jpg';
import ImgTalent from '#Img/desktop/image-world-class-talent.jpg';
import SvgAustralia from '#Svg/desktop/illustration-australia.svg';
import SvgCanada from '#Svg/desktop/illustration-canada.svg';
import SvgUnitedKingdom from '#Svg/desktop/illustration-united-kingdom.svg';

import Quality from '#Components/quality/Quality';
import styles from './_About.module.scss';

function About(): JSX.Element {
  return (
    <DefaultLayout>
      <Nav />
      <div className={styles.header}>
        <div className={styles.header__info}>
          <h1>About Us</h1>
          <p>
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </div>
        <img className={styles.header__img} src={ImgHero} alt="" />
      </div>
      <div className={`${styles.card} ${styles['card-1']}`}>
        <img className={styles['card-1__img']} src={ImgTalent} alt="" />
        <div className={styles.card__info}>
          <h2>World-class talent</h2>
          <p>
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms. <br />
            <br />
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
        </div>
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
      <div className={`${styles.card} ${styles['card-2']}`}>
        <img className={styles['card-2__img']} src={ImgRealDeal} alt="" />
        <div className={styles.card__info}>
          <h2>The real deal</h2>
          <p>
            As strategic partners in our clients’ businesses, we are ready to
            take on any challenge as our own. Solving real problems require
            empathy and collaboration, and we strive to bring a fresh
            perspective to every opportunity. We make design and technology more
            accessible and give you tools to measure success.
            <br />
            <br />
            We are visual storytellers in appealing and captivating ways. By
            combining business and marketing strategies, we inspire audiences to
            take action and drive real results.
          </p>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default About;
