import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router';
import LoadingPage from './page/Loader';

import LayoutWrapper from './components/LayoutWrapper';
import { ErrorBoundary } from './components/ErrorBoundary';
import {
  ProductDetailLoader,
  ProductLoader,
} from './router/loader/data-loader';

const LandingPage = lazy(() => import('./page/LandingPage'));

const ProductPage = lazy(() => import('./features/product'));

const ProductDetailsPage = lazy(() => import('./features/product/details'));

const withSuspense = (Component: React.ComponentType) => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <LayoutWrapper>
        <Component />
      </LayoutWrapper>
    </Suspense>
  );
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: withSuspense(LandingPage),
    errorElement: <ErrorBoundary />,
    // loader: exampleLoader,
  },
  {
    path: '/about',
    element: <div>About</div>,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/products',
    children: [
      {
        path: '',
        index: true,
        element: withSuspense(ProductPage),
        errorElement: <ErrorBoundary />,
        loader: ProductLoader,
      },
      {
        path: ':id',
        element: withSuspense(ProductDetailsPage),
        errorElement: <ErrorBoundary />,
        loader: ProductDetailLoader,
      },
    ],
  },
  {
    path: '/login',
    element: <div>Login</div>,
    action: () => {
      return {
        message:
          'That code will run if the form is submitted with the help of React router',
      };
    },
    loader: () => {
      return {
        message:
          'That code will run before the component is loaded ( can check auth status )',
      };
    },
  },
  {
    path: '/logout',
    action: () => {
      return {
        message: 'That code will run before the component is loaded',
      };
    },
  },
]);
