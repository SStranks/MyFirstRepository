import Main from '../components/main/Main';
import SideBar from '../components/sidebar/SideBar';

function DefaultLayout(): JSX.Element {
  return (
    <>
      <SideBar />
      <Main />
    </>
  );
}

export default DefaultLayout;
