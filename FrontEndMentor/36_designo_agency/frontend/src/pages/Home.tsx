import Card from '#Components/card/Card';
import Nav from '#Components/nav/Nav';
import Quality from '#Components/quality/Quality';
import DefaultLayout from '#Layouts/DefaultLayout';

import ImgAppDesign from '#Img/desktop/image-app-design.jpg';
import ImgGraphicDesign from '#Img/desktop/image-graphic-design.jpg';
import ImgHero from '#Img/desktop/image-hero-phone.png';
import ImgWebDesign from '#Img/desktop/image-web-design-large.jpg';
import SvgFriendly from '#Svg/desktop/illustration-friendly.svg';
import SvgPassionate from '#Svg/desktop/illustration-passionate.svg';
import SvgResourceful from '#Svg/desktop/illustration-resourceful.svg';

import styles from './_Home.module.scss';

function Home(): JSX.Element {
  return (
    <DefaultLayout>
      <Nav />
      <div className={styles.hero}>
        <div className={styles.hero__info}>
          <h1>Award-winning custom designs and digital branding solutions</h1>
          <p>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <button type="button">learn more</button>
        </div>
        <img src={ImgHero} alt="" />
      </div>
      <div className={styles.viewgrid}>
        <Card title="web design" image={ImgWebDesign} />
        <Card title="app design" image={ImgAppDesign} />
        <Card title="graphic design" image={ImgGraphicDesign} />
      </div>
      <div className="">
        <Quality
          title="passionate"
          caption="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
          illustration={SvgPassionate}
        />
        <Quality
          title="resourceful"
          caption="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
          illustration={SvgResourceful}
        />
        <Quality
          title="friendly"
          caption="We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
          illustration={SvgFriendly}
        />
      </div>
    </DefaultLayout>
  );
}

export default Home;
