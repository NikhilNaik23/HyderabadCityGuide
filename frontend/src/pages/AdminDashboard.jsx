import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [attractionsCount, setAttractionsCount] = useState(0);
  const [cuisinesCount, setCuisinesCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const attractionsRes = await fetch(
          "/api/attraction"
        );
        const cuisinesRes = await fetch("/api/food");

        console.log(attractionsRes);
        console.log(cuisinesRes);
        if (attractionsRes.ok && cuisinesRes.ok) {
          const attractionsData = await attractionsRes.json();
          const cuisinesData = await cuisinesRes.json();

          setAttractionsCount(attractionsData.length);
          setCuisinesCount(cuisinesData.length);
        } else {
          console.error("Failed to fetch data from one or both endpoints.");
        }
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h1 className="text-3xl font-semibold text-gray-700">
          Welcome to the Admin Dashboard
        </h1>
        <p className="text-gray-500 mt-2">
          Here you can manage your Attractions, Cuisines, and make updates.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-700">
              Total Attractions
            </h2>
            <Link to={"/admin/attraction"}>
              <FaArrowRight className="text-black h-5" />
            </Link>
          </div>
          <p className="text-2xl font-bold text-blue-600">{attractionsCount}</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-700">
              Total Cuisines
            </h2>
            <Link to={"/admin/cuisine"}>
              <FaArrowRight className="text-black h-5" />
            </Link>
          </div>
          <p className="text-2xl font-bold text-green-600">{cuisinesCount}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
