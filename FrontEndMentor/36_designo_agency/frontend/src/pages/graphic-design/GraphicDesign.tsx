import Card1 from '#Components/card/Card1';
import Card2 from '#Components/card/Card2';
import Nav from '#Components/nav/Nav';
import DefaultLayout from '#Layouts/DefaultLayout';

import ImgAppDesign from '#Img/desktop/image-app-design.jpg';
import ImgBoxedWater from '#Img/desktop/image-boxed-water.jpg';
import ImgChange from '#Img/desktop/image-change.jpg';
import ImgGraphicDesign from '#Img/desktop/image-graphic-design.jpg';
import ImgScience from '#Img/desktop/image-science.jpg';

import styles from './_GraphicDesign.module.scss';

function GraphicDesign(): JSX.Element {
  return (
    <DefaultLayout>
      <Nav />
      <div className={styles.header}>
        <h1>Graphic Design</h1>
        <p>
          We deliver eye-catching branding materials that are tailored to meet
          your business objectives.
        </p>
      </div>
      <div className={styles.examplegrid}>
        <Card2
          title="tim brown"
          caption="A book cover designed for Tim Brown’s new release, ‘Change’"
          image={ImgChange}
        />
        <Card2
          title="boxed water"
          caption="A simple packaging concept made for Boxed Water"
          image={ImgBoxedWater}
        />
        <Card2
          title="science"
          caption="A poster made in collaboration with the Federal Art Project"
          image={ImgScience}
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

export default GraphicDesign;
