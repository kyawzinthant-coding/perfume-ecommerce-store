import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router';
import LoadingPage from './page/Loader';

const LandingPage = lazy(() => import('./page/LandingPage'));

const withSuspense = (Component: React.ComponentType) => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Component />
    </Suspense>
  );
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: withSuspense(LandingPage),
    errorElement: <p>Error Page</p>,
    // loader: exampleLoader,
  },
  {
    path: '/about',
    element: <div>About</div>,
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
