import SkipTo from '#Components/custom/accessibility/SkipTo';
import Footer from '#Components/footer/Footer';
import Nav from '#Components/nav/Nav';
import styles from './_DefaultLayout.module.scss';

type ElemProps = {
  children: React.ReactNode;
};

function DefaultLayout(props: ElemProps): JSX.Element {
  const { children } = props;

  return (
    <div className={styles.container}>
      <SkipTo contentName="Main Content" contentId="#skipto-main" />
      <SkipTo contentName="Footer Content" contentId="#skipto-footer" />
      <Nav />
      {children}
      <Footer />
    </div>
  );
}

export default DefaultLayout;
