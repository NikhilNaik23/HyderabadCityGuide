import React, { useState } from "react";

const Card = ({ image, name, description, transport }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleImageClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === "popup-overlay") {
      setIsPopupOpen(false);
    }
  };

  return (
    <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden mb-6 w-72 h-72">
      {/* Image Section */}
      <div
        className="relative cursor-pointer h-full w-full"
        onClick={handleImageClick}
      >
        <img
          src={image}
          alt={name}
          className="object-cover h-full w-full hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-0 left-0 w-full bg-black/70 text-white text-center py-2">
          <h2 className="text-sm font-bold">{name}</h2>
        </div>
      </div>

      {/* Popup Section */}
      {isPopupOpen && (
        <div
          id="popup-overlay"
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
          onClick={handleOverlayClick}
        >
          <div className="bg-white rounded-lg shadow-lg p-6 w-3/4 max-w-lg relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              onClick={handleClosePopup}
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">{name}</h2>
            <img
              src={image}
              alt={name}
              className="object-cover w-full h-64 rounded-lg mb-4"
            />
            <p className="text-gray-700 text-base mb-4"><h2 className="text-xl font-bold">{name}</h2>
              {description}</p>
            <h3 className="text-lg font-semibold mb-2">Mode of Transport:</h3>
            <p className="text-gray-700 text-base">{transport}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
