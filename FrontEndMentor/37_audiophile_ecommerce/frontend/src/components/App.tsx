import { ShoppingCartProvider } from '#Context/ShoppingCartContext';
import DefaultLayout from '#Layouts/DefaultLayout';
import HomePage from '#Pages/home/HomePage';
import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Fallback from './custom/accessibility/Fallback';

// // ✔  // ✖  Checklist
// ----------------------
// ✖ // DEBUG:  Determine the f.px2em usage; when/where is not accurate.
// ✖ // TODO:  Lazy load images
// ✖ // TODO:  ARIA: see https://alistapart.com/article/accessibility-the-missing-ingredient/ for how to do the ProductQuantityButton component ARIA.
// ✔ // DEBUG:  Modal causing scrollbar width resize.
// ✔ // DEBUG:  Category page product images; set width/height on eaech source? to stop flicker layout?
// ✔ // DEBUG:  Flicker when changing routes. useLayoutEffect causing it?
// ✔ // DEBUG:  Nav component rerenders on route switch - sit outside page layouts?
// ✔ // DEBUG:  Various resizing on Home page: grid images max out at 1110px.
// ✔ // DEBUG:  Nav sticky transition; see if we can fade out on class remove - setting transition implicitly on nav will trigger on element mount.
// ✔ // TODO:  TabIndex?
// ✔ // TODO:  Add hover animation on category images; vertical beizer.
// ✔ // TODO:  Subtle animations for nav modals
// ✔ // TODO:  localStorage for Cart
// ✔ // TODO:  Checkout form: Functionality. Error states.
// ✔ // TODO:  Checkout form: Radio buttons, checked and required; useState required?
// ✔ // TODO:  Money needs two decimal places.
// ✔ // TODO:  Order Complete modal; cart item dynamic
// ✔ // TODO:  Checkout page; summary card is not dynamic with context
// ✔ // TODO:  menuCart/Category modals closeModal prop; necessary/delete?
// ✔ // TODO:  Cart system; useContext
// ✔ // TODO:  CartSummaryCard; mobile layout squished; could use scrollable rows and hover effect to indicate.
// ✔ // TODO:  Add nav modals as components/create a wrapped for portal? Need to handle esc/click opaque black.
// ✔ // TODO:  Styles: thanks for your order - mobile.
// ✔ // TODO:  Adjust various tags (p) into correct semantic tags etc.
// ✔ // TODO:  Z-Index manager; Nav top
// ✔ // TODO:  Possible redundant styles imports on pages/categories to be removed.
// ✔ // TODO:  Replace divs as imgs (background-image) with dedicated <img>; if it is content, use <img>, if it is just styling use background-image.
// ✔ // TODO:  alt on to img
// ✔ // TODO:  Consolidate border-radius into variables definition.
// ✔ // TODO:  Replace buttons that are not form/function orientated i.e. not just a link.
// ✔ // TODO:  add circles behind zx9 speaker on home page
// ✔ // TODO:  Fix category page grid row reversal, for desktop size only.
// ✔ // TODO:  Tablet/Mobile: Nav Bar: Hamburger Menu Button functionality.
// ✔ // TODO:  fix resize issue: add to cart btn on productdetail page.
// ✔ // TODO:  fix resize issue: top margin above go back btn on productdetail page.

// NOTE:  Artifical demonstration of transition animation for lazy-loading.
const HeadphonesPage = lazy(() =>
  Promise.all([
    import('#Pages/headphones/HeadphonesPage'),
    // eslint-disable-next-line no-promise-executor-return
    new Promise((resolve) => setTimeout(resolve, 3000)), // ensures minimal delay
  ]).then(([module]) => module)
);
const EarphonesPage = lazy(() => import('#Pages/earphones/EarphonesPage'));
const SpeakersPage = lazy(() => import('#Pages/speakers/SpeakersPage'));
const ProductDetailsPage = lazy(
  () => import('#Pages/product-details/ProductDetailsPage')
);
const CheckoutPage = lazy(() => import('#Pages/checkout/CheckoutPage'));

function App(): JSX.Element {
  // const { DeferredComponent, hasImportFinished, enableComponent } =
  //   useSuspenseAnimation('headphones/HeadphonesPage');
  return (
    <ShoppingCartProvider>
      <DefaultLayout>
        <Suspense fallback={<Fallback />}>
          <Routes>
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/headphones" element={<HeadphonesPage />} />
            <Route
              path="/headphones/:productId"
              element={<ProductDetailsPage />}
            />
            <Route path="/speakers" element={<SpeakersPage />} />
            <Route
              path="/speakers/:productId"
              element={<ProductDetailsPage />}
            />
            <Route path="/earphones" element={<EarphonesPage />} />
            <Route
              path="/earphones/:productId"
              element={<ProductDetailsPage />}
            />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </Suspense>
      </DefaultLayout>
    </ShoppingCartProvider>
  );
}

export default App;
