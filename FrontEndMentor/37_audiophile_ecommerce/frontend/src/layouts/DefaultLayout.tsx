import Footer from '#Components/footer/Footer';
import Nav from '#Components/nav/Nav';
import styles from './_DefaultLayout.module.scss';

type ElemProps = {
  children: JSX.Element[];
};

function DefaultLayout(props: ElemProps): JSX.Element {
  const { children } = props;

  return (
    <div className={styles.container}>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}

export default DefaultLayout;
