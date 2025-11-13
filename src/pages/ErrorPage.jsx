import React, { useEffect } from "react";
import { Link } from "react-router";


const ErrorPage = () => {
   useEffect(()=>{
        document.title = "Error Page"
      },[])
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-9xl font-extrabold text-red-500 mb-4">404</h1>
      <h2 className="text-3xl font-bold mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6 text-center">
        Oops! The page you are looking for does not exist. <br />
        It might have been removed or the URL is incorrect.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
