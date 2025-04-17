import React, { useState } from "react";
import { IoMdMail } from "react-icons/io";
import { FaKey } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AdminLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });
    const data = await res.json();
    if (data.error) {
      toast.error(data.error);
    }else{
      toast.success(data.message);
      navigate("/dashboard")
    }
  };

  return (
    <section className="container">
      <div className="flex min-h-screen flex-col gap-4 items-center justify-center">
        <form className="flex gap-4 flex-col" onSubmit={handleSubmit}>
          <label className="input">
            <IoMdMail />
            <input
              type="email"
              placeholder="Enter Your Admin Mail"
              name="email"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
            />
          </label>
          <label className="input">
            <FaKey />
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </label>
          <button type="submit" className="btn rounded-2xl btn-primary w-full">
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default AdminLoginPage;
