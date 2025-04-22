import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./index.css";

import AdminLoginPage from "./pages/AdminLoginPage";
import AdminDashboard from "./pages/AdminDashboard";
import Attractions from "./components/Attractions";
import { Toaster } from "react-hot-toast";
import AdminLayout from "./components/AdminLayout";
import Cuisines from "./components/Cuisines";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from './components/Home';
import Specialties from "./components/Specialties";
import Explore from "./components/Explore";
import MapAndRoutes from "./components/MapAndRoutes";
import Authority from "./components/Authority";
import Navbar from "./components/Navbar";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen">
      <Toaster />
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/admin/" element={<AdminLoginPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/specialties" element={<Specialties />} />
        <Route path="/maps" element={<MapAndRoutes />} />
        <Route path="/authorities" element={<Authority />} />

        <Route
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/attraction" element={<Attractions />} />
          <Route path="/admin/cuisine" element={<Cuisines />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
