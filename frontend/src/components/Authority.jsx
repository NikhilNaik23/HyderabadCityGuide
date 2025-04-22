import React from "react";

const Authority = () => {
  return (
    <div className="pt-16 bg-[url('./assets/bg_img.png')] bg-cover bg-center bg-no-repeat w-full min-h-screen">
      <div className="p-6 bg-white/90 shadow-lg rounded-2xl max-w-4xl mx-auto my-6">
        <h2 className="text-2xl font-bold mb-4 text-center text-indigo-700">
          City Administration – Hyderabad
        </h2>

        <div className="space-y-4 text-gray-800">
          <div>
            <h3 className="text-xl font-semibold text-indigo-600">📍 State</h3>
            <p>Telangana</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-indigo-600">
              🏛️ District Magistrate / Collector
            </h3>
            <p>Sri Anudeep Durishetty, IAS (Hyderabad District Collector)</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-indigo-600">
              👮 Superintendent of Police (SP)
            </h3>
            <p>Rema Rajeshwari, IPS (DCP, Hyderabad City Police)</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-indigo-600">
              👨‍⚖️ Sub-Divisional Magistrates (SDMs)
            </h3>
            <ul className="list-disc pl-6">
              <li>Circle I – Somesh Kumar</li>
              <li>Circle II – Naveen Kumar</li>
              <li>Circle III – Ramesh Patil</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-indigo-600">
              📞 Emergency Contact
            </h3>
            <p>
              Police: 100 &nbsp;|&nbsp; Fire: 101 &nbsp;|&nbsp; Ambulance: 108
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authority;
