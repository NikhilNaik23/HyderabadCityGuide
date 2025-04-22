import React, { useEffect, useState } from 'react'
import Card from './cards/Places';

const Specialties = () => {
    const [specialties, setSpecialties] = useState([]);
    const fetchData = async()=>{
        const res = await fetch("/api/food");
        const data = await res.json();
        setSpecialties(data);
    }
    useEffect(()=>{
        fetchData();
    })

  return (
    <div className="pt-16 text-center bg-gradient-to-b from-yellow-900 to-white text-white min-h-screen">
      <h1 className="text-4xl font-bold mt-12 flex flex-col justify-start items-center">
      Specialties You Must Try!
      </h1>

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {specialties.map((place) => (
          <Card
            key={place._id}
            image={place.image}
            name={place.name}
            description={place.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Specialties