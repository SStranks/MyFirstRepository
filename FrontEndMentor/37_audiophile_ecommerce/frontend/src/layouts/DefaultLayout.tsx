import SkipTo from '#Components/custom/accessibility/SkipTo';
import Footer from '#Components/footer/Footer';
import Nav from '#Components/nav/Nav';
import { PropsWithChildren } from 'react';
import styles from './_DefaultLayout.module.scss';

function DefaultLayout(props: PropsWithChildren): JSX.Element {
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
