'use client';
import { useRouter } from 'next/navigation';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const ErrorPage: React.FC<ErrorProps> = ({ error, reset }) => {
  const router = useRouter();

  const goBack = () => {
    router.back(); 
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-5">
      <div className="text-center max-w-xl p-10 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-semibold mb-5 text-red-600">Oops! Something Went Wrong</h1>
        <p className="text-lg mb-4 text-gray-700">
          We encountered an error while trying to load the page. Please try again
          or go back to the previous page.
        </p>
        <p className="text-lg font-medium mb-5 text-red-600">
          <strong>Error:</strong> {error.message}
        </p>

        <div className="flex justify-center gap-5">
          <button
            onClick={reset}
            className="px-5 py-3 text-lg bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Try Again
          </button>
          <button
            onClick={goBack}
            className="px-5 py-3 text-lg bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
