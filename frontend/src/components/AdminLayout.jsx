// components/AdminLayout.jsx
import React from "react";
import AdminNavbar from "./AdminNavbar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <AdminNavbar />
      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
};

export default AdminLayout;
