import Nav from '#Components/nav/Nav';
import ImgHero from '#Img/desktop/image-hero-phone.png';
import DefaultLayout from '#Layouts/DefaultLayout';
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
    </DefaultLayout>
  );
}

export default Home;
