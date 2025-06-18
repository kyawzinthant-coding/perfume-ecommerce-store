import { useRouteError } from 'react-router';
import LayoutWrapper from './LayoutWrapper';

export const ErrorBoundary = () => {
  const error = useRouteError() as Error;
  console.error(error);

  return (
    <LayoutWrapper>
      <div className="flex flex-col items-center justify-center h-[60vh] text-center p-4 bg-red-50 rounded-2xl m-4">
        <h1 className="text-4xl font-bold text-red-600">
          Oops! Something went wrong.
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          We've hit a snag. Please try refreshing the page or contact support if
          the problem persists.
        </p>
        <pre className="mt-6 p-4 bg-white text-red-700 rounded-md text-sm whitespace-pre-wrap max-w-full overflow-x-auto shadow-inner">
          {error.message || JSON.stringify(error)}
        </pre>
      </div>
    </LayoutWrapper>
  );
};
