import Card from '#Components/card/Card';
import Nav from '#Components/nav/Nav';
import DefaultLayout from '#Layouts/DefaultLayout';

import ImgAppDesign from '#Img/desktop/image-app-design.jpg';
import ImgGraphicDesign from '#Img/desktop/image-graphic-design.jpg';
import ImgHero from '#Img/desktop/image-hero-phone.png';
import ImgWebDesign from '#Img/desktop/image-web-design-large.jpg';
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
    </DefaultLayout>
  );
}

export default Home;
