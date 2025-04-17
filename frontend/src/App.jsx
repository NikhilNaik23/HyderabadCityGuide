import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";

import AdminLoginPage from "./pages/AdminLoginPage";
import AdminDashboard from "./pages/AdminDashboard";
import Attractions from "./components/Attractions";
import { Toaster } from "react-hot-toast";
import AdminLayout from "./components/AdminLayout";
import Cuisines from "./components/Cuisines";

function App() {
  return (
    <div className="min-h-screen">
      <Toaster />

      <Routes>
        {/* Public/Login route */}
        <Route path="/" element={<AdminLoginPage />} />

        {/* Protected/Admin routes with layout */}
        <Route element={<AdminLayout />}>
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/attraction" element={<Attractions />} />
          <Route path="/cuisine" element={<Cuisines />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
