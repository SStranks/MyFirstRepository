import Card1 from '#Components/card/Card1';
import Card2 from '#Components/card/Card2';
import Nav from '#Components/nav/Nav';
import DefaultLayout from '#Layouts/DefaultLayout';

import ImgAirfilter from '#Img/desktop/image-airfilter.jpg';
import ImgAppDesign from '#Img/desktop/image-app-design.jpg';
import ImgEyecam from '#Img/desktop/image-eyecam.jpg';
import ImgFaceit from '#Img/desktop/image-faceit.jpg';
import ImgGraphicDesign from '#Img/desktop/image-graphic-design.jpg';
import ImgLoopstudios from '#Img/desktop/image-loopstudios.jpg';
import ImgTodo from '#Img/desktop/image-todo.jpg';

import styles from './_AppDesign.module.scss';

function AppDesign(): JSX.Element {
  return (
    <DefaultLayout>
      <Nav />
      <div className={styles.header}>
        <h1>App Design</h1>
        <p>
          Our mobile designs bring intuitive digital solutions to your customers
          right at their fingertips.
        </p>
      </div>
      <div className={styles.examplegrid}>
        <Card2
          title="airfilter"
          caption="A multi-carrier shipping website for ecommerce businesses"
          image={ImgAirfilter}
        />
        <Card2
          title="eyecam"
          caption="Site for low-cost money transfers and sending money within seconds"
          image={ImgEyecam}
        />
        <Card2
          title="faceit"
          caption="A state-of-the-art music player with high-resolution audio and DSP effects"
          image={ImgFaceit}
        />
        <Card2
          title="todo"
          caption="Connects users with local contractors based on their location"
          image={ImgTodo}
        />
        <Card2
          title="loopstudios"
          caption="Blogr is a platform for creating an online blog or publication"
          image={ImgLoopstudios}
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

export default AppDesign;
