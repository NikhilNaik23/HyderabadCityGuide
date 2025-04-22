import React, { useEffect, useState } from 'react';
import Card from './cards/Places';

const Explore = () => {
  const [attractions, setAttractions] = useState([]);

  const fetchAttractions = async () => {
    try {
      const res = await fetch("/api/attraction");
      const data = await res.json();
      if (res.ok) setAttractions(data);
      else console.error(data.error);
    } catch (error) {
      console.error("Error fetching attractions:", error.message);
    }
  };
  useEffect(() =>{
    fetchAttractions();
  }, []);

  return (
    <div className="pt-16 text-center bg-gradient-to-b from-yellow-900 to-white text-white min-h-screen">
      <h1 className="text-4xl font-bold mt-12 flex flex-col justify-start items-center">
        Attractions You Can't Miss!
      </h1>

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {attractions.map((place) => (
          <Card
            key={place._id}
            image={place.image}
            name={place.name}
            description={place.description}
            transport="Accessible by car, bus, and metro." 
          />
        ))}
      </div>
    </div>
  );
};

export default Explore;
