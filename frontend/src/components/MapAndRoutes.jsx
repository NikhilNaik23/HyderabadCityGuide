import React from "react";

const MapAndRoutes = () => {
  return (
    <div className="pt-16 bg-[url('./assets/cyberTower.png')] bg-cover bg-center bg-no-repeat w-full min-h-screen">
      <div className="p-6 bg-white/70 shadow-lg rounded-2xl max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center text-purple-700">
          Map & Routes to Hyderabad
        </h2>

        <div className="mb-6">
          <iframe
            title="Hyderabad Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2072671640893!2d78.4746040751821!3d17.385044088068807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb973cdb0e7e5d%3A0x17dce5e539d3f55!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1713797711906!5m2!1sen!2sin"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl border"
          ></iframe>
        </div>

        <div className="space-y-4 text-gray-800">
          <div>
            <h3 className="text-xl font-semibold text-purple-600">
              🛣️ Roadways
            </h3>
            <p>
              Hyderabad is well connected via National Highways like NH-44,
              NH-65, and the Outer Ring Road (ORR). Buses from TSRTC and private
              operators connect the city to all major towns.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-purple-600">
              🚆 Railways
            </h3>
            <p>
              Major railway stations include Hyderabad Deccan (Nampally),
              Secunderabad Junction, and Kacheguda. Trains are available to all
              major cities in India.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-purple-600">
              ✈️ Airways
            </h3>
            <p>
              Rajiv Gandhi International Airport (RGIA) at Shamshabad connects
              Hyderabad to domestic and international destinations. The airport
              is about 24 km from the city center.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapAndRoutes;
