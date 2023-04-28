import DefaultLayout from '#Layouts/DefaultLayout';
import CheckoutPage from '#Pages/checkout/CheckoutPage';
import EarphonesPage from '#Pages/earphones/EarphonesPage';
import HeadphonesPage from '#Pages/headphones/HeadphonesPage';
import HomePage from '#Pages/home/HomePage';
import ProductDetailsPage from '#Pages/product-details/ProductDetailsPage';
import SpeakersPage from '#Pages/speakers/SpeakersPage';
import { Route, Routes } from 'react-router-dom';

// // ✔  // ✖  Checklist
// ----------------------
// ✖ // DEBUG:  Determine the f.px2em usage; when/where is not accurate.
// ✖ // DEBUG:  Modal causing scrollbar width resize.
// NOTE:  Add nav modals as components/create a wrapped for portal? Need to handle esc/click opaque black.
// ✖ // TODO:  Z-Index manager; Nav top
// ✖ // TODO:  Subtle animations for nav modals
// ✖ // TODO:  Styles: thanks for your order - mobile.
// ✖ // TODO:  Replace divs as imgs (background-image) with dedicated <img>; if it is content, use <img>, if it is just styling use background-image.
// ✖ // TODO:  CartSummaryCard; mobile layout squished; could use scrollable rows and hover effect to indicate.
// ✖ // TODO:  Cart system; useContext
// ✖ // TODO:  Checkout form: Functionality. Error states.
// ✖ // TODO:  Checkout form: Radio buttons, checked and required; useState required?
// ✖ // TODO:  Possible redundant styles imports on pages/categories to be removed.
// ✖ // TODO:  Adjust various tags (p) into correct semantic tags etc.
// ✖ // TODO:  Add hover animation on category images; vertical beizer.
// ✖ // TODO:  ARIA: see https://alistapart.com/article/accessibility-the-missing-ingredient/ for how to do the ProductQuantityButton component ARIA.
// ✔ // DEBUG:  Category page product images; set width/height on eaech source? to stop flicker layout?
// ✔ // DEBUG:  Flicker when changing routes. useLayoutEffect causing it?
// ✔ // DEBUG:  Nav component rerenders on route switch - sit outside page layouts?
// ✔ // DEBUG:  Various resizing on Home page: grid images max out at 1110px.
// ✔ // TODO:  alt on to img
// ✔ // TODO:  Consolidate border-radius into variables definition.
// ✔ // TODO:  Replace buttons that are not form/function orientated i.e. not just a link.
// ✔ // TODO:  add circles behind zx9 speaker on home page
// ✔ // TODO:  Fix category page grid row reversal, for desktop size only.
// ✔ // TODO:  Tablet/Mobile: Nav Bar: Hamburger Menu Button functionality.
// ✔ // TODO:  fix resize issue: add to cart btn on productdetail page.
// ✔ // TODO:  fix resize issue: top margin above go back btn on productdetail page.

function App(): JSX.Element {
  return (
    <DefaultLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/headphones" element={<HeadphonesPage />} />
        <Route path="/headphones/:productId" element={<ProductDetailsPage />} />
        <Route path="/speakers" element={<SpeakersPage />} />
        <Route path="/speakers/:productId" element={<ProductDetailsPage />} />
        <Route path="/earphones" element={<EarphonesPage />} />
        <Route path="/earphones/:productId" element={<ProductDetailsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
