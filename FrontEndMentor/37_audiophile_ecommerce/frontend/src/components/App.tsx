import { ShoppingCartProvider } from '#Context/ShoppingCartContext';
import DefaultLayout from '#Layouts/DefaultLayout';
import HomePage from '#Pages/home/HomePage';
import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Fallback from './custom/accessibility/Fallback';

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
