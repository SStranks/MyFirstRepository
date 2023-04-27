import CheckoutPage from '#Pages/checkout/CheckoutPage';
import EarphonesPage from '#Pages/earphones/EarphonesPage';
import HeadphonesPage from '#Pages/headphones/HeadphonesPage';
import HomePage from '#Pages/home/HomePage';
import ProductDetailsPage from '#Pages/product-details/ProductDetailsPage';
import SpeakersPage from '#Pages/speakers/SpeakersPage';
import { Route, Routes } from 'react-router-dom';
import CartSummaryCard from './checkout/CartSummaryCard';

// // ✔ // ✖
// ✖ // DEBUG:  Determine the f.px2em usage; when/where is not accurate.
// ✖ // TODO:  alt on to img
// ✖ // TODO:  alt on to img
// ✖ // TODO:  Replace divs as imgs (background-image) with dedicated <img>; if it is content, use <img>, if it is just styling use background-image.
// ✖ // TODO:  CartSummaryCard; mobile layout squished; could use scrollable rows and hover effect to indicate.
// ✖ // TODO:  Cart system; useContext
// ✖ // TODO:  Checkout form: Functionality. Error states.
// ✖ // TODO:  Checkout form: Radio buttons, checked and required; useState required?
// ✖ // TODO:  Possible redundant styles imports on pages/categories to be removed.
// ✖ // TODO:  Adjust various tags (p) into correct semantic tags etc.
// ✖ // TODO:  Consolidate border-radius into variables definition.
// ✖ // TODO:  Add hover animation on category images; vertical beizer.
// ✖ // TODO:  ARIA: see https://alistapart.com/article/accessibility-the-missing-ingredient/ for how to do the ProductQuantityButton component ARIA.
// ✔ // DEBUG:  Various resizing on Home page: grid images max out at 1110px.
// ✔ // TODO:  Replace buttons that are not form/function orientated i.e. not just a link.
// ✔ // TODO:  add circles behind zx9 speaker on home page
// ✔ // TODO:  Fix category page grid row reversal, for desktop size only.
// ✔ // TODO:  Tablet/Mobile: Nav Bar: Hamburger Menu Button functionality.
// ✔ // TODO:  fix resize issue: add to cart btn on productdetail page.
// ✔ // TODO:  fix resize issue: top margin above go back btn on productdetail page.

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
        element={<CartSummaryCard itemsQuantity={3} totalAmount={5396} />}
      />
    </Routes>
  );
}

export default App;
