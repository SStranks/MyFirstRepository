import Card1 from '#Components/card/Card1';
import Card2 from '#Components/card/Card2';
import Nav from '#Components/nav/Nav';
import DefaultLayout from '#Layouts/DefaultLayout';

import ImgAppDesign from '#Img/desktop/image-app-design.jpg';
import ImgBlogr from '#Img/desktop/image-blogr.jpg';
import ImgBuilder from '#Img/desktop/image-builder.jpg';
import ImgCamp from '#Img/desktop/image-camp.jpg';
import ImgExpress from '#Img/desktop/image-express.jpg';
import ImgGraphicDesign from '#Img/desktop/image-graphic-design.jpg';
import ImgPhoton from '#Img/desktop/image-photon.jpg';
import ImgTransfer from '#Img/desktop/image-transfer.jpg';

import styles from './_WebDesign.module.scss';

function WebDesign(): JSX.Element {
  return (
    <DefaultLayout>
      <Nav />
      <div className={styles.header}>
        <h1>Web Design</h1>
        <p>
          We build websites that serve as powerful marketing tools and bring
          memorable brand experiences.
        </p>
      </div>
      <div className={styles.examplegrid}>
        <Card2
          title="express"
          caption="A multi-carrier shipping website for ecommerce businesses"
          image={ImgExpress}
        />
        <Card2
          title="transfer"
          caption="Site for low-cost money transfers and sending money within seconds"
          image={ImgTransfer}
        />
        <Card2
          title="photon"
          caption="A state-of-the-art music player with high-resolution audio and DSP effects"
          image={ImgPhoton}
        />
        <Card2
          title="builder"
          caption="Connects users with local contractors based on their location"
          image={ImgBuilder}
        />
        <Card2
          title="blogr"
          caption="Blogr is a platform for creating an online blog or publication"
          image={ImgBlogr}
        />
        <Card2
          title="camp"
          caption="Get expert training in coding, data, design, and digital marketing"
          image={ImgCamp}
        />
      </div>
      <div className={styles.viewgrid}>
        <Card1 title="app design" image={ImgAppDesign} url="/appdesign" />
        <Card1
          title="graphic design"
          image={ImgGraphicDesign}
          url="/graphicdesign"
        />
      </div>
    </DefaultLayout>
  );
}

export default WebDesign;
