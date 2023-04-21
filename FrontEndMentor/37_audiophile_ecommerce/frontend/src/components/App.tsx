import CheckoutPage from '#Pages/checkout/CheckoutPage';
import EarphonesPage from '#Pages/earphones/EarphonesPage';
import HeadphonesPage from '#Pages/headphones/HeadphonesPage';
import HomePage from '#Pages/home/HomePage';
import ProductDetailsPage from '#Pages/product-details/ProductDetailsPage';
import SpeakersPage from '#Pages/speakers/SpeakersPage';
import { Route, Routes } from 'react-router-dom';
// import CartSummaryCard from './checkout/CartSummaryCard';
import OrderCompleteCard from './checkout/OrderCompleteCard';

// // ✔ // ✖
// ✖ // DEBUG:  Various resizing on Home page: grid images max out at 1110px.
// ✖ // DEBUG:  Determine the f.px2em usage; when/where is not accurate.
// ✖ // TODO:  Replace buttons that are not form/function orientated i.e. not just a link.
// ✖ // TODO:  Replace divs as imgs (background-image) with dedicated <img>
// ✖ // TODO:  Tablet/Mobile: Nav Bar: Hamburger Menu Button functionality.
// ✖ // TODO:  Cart system; useContext
// ✖ // TODO:  Checkout form: Functionality. Error states.
// ✖ // TODO:  Checkout form: Radio buttons, checked and required; useState required?
// ✖ // TODO:  Fix category page grid row reversal, for desktop size only.
// ✖ // TODO:  Possible redundant styles imports on pages/categories to be removed.
// ✖ // TODO:  Adjust various tags (p) into correct semantic tags etc.
// ✖ // TODO:  Consolidate border-radius into variables definition.

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/headphones" element={<HeadphonesPage />} />
      <Route path="/headphones/:productId" element={<ProductDetailsPage />} />
      <Route path="/speakers" element={<SpeakersPage />} />
      <Route path="/speakers/:productId" element={<ProductDetailsPage />} />
      <Route path="/earphones" element={<EarphonesPage />} />
      <Route path="/earphones/:productId" element={<ProductDetailsPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      {/* // TEMP DEV:  Temporary Routes */}
      <Route
        path="/temp"
        element={
          // <CartSummaryCard cartItemsQuantity={3} cartTotalAmount={5396} />
          <OrderCompleteCard />
        }
      />
    </Routes>
  );
}

export default App;
