import React from 'react'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return ( 
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold text-orange-600">404</h1>
      <p className="text-2xl mt-4 text-gray-800">Page Not Found</p>
      <p className="text-gray-500 mt-2">Sorry, the page you're looking for doesn't exist or has been moved.</p>
      <Link
        to="/"
        className="mt-6 inline-block px-6 py-3 bg-orange-600 text-white rounded-md shadow hover:bg-orange-700 transition"
      >
        Go back Home
      </Link>
    </div>
  );
};

export default ErrorPage
