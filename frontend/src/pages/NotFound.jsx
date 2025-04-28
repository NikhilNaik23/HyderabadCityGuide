import React from "react";
import Lottie from "lottie-react";
import bus from '../assets/bus.json'
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">

      <Lottie animationData={bus} loop autoPlay className="h-50 md:h-100"/>
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">Page Not Found</h2>
      <p className="mb-6 text-gray-600 text-center max-w-md">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-3 bg-red-500 text-white rounded-lg font-semibold shadow hover:bg-red-600 transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
