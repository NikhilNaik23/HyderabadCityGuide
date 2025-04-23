import React, { useState, useEffect } from 'react';
import History from './History';
import Footer from './Footer';
import Contact from './Contact';

const Home = () => {
  const [isFullScreen, setIsFullScreen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFullScreen(false);
      } else {
        setIsFullScreen(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen ">

      {/* Home Section */}
      <div
        className={`${
          isFullScreen ? 'h-screen' : 'h-[90vh]'
        } bg-[url('./assets/one.jpg')] bg-cover bg-center bg-no-repeat w-full
         flex justify-center text-white text-center transition-all duration-500`}
      >
        <div className='mt-40'>
          <h1 className="text-4xl font-bold mb-2">
            Welcome to <span className="text-yellow-500">Hyderabad</span>
          </h1>
          <p className="text-2xl">Explore the City of Pearls</p>
        </div>
      </div>

      {/* History Section */}
      <History />
      <Contact />
      <Footer/>
    </div>
  );
};

export default Home;