import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const AdminNavbar = () => {
  const navigate = useNavigate();
  const handleNavigate = (page) => {
    navigate(`/${page}`);
  };
  return (
    <nav>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => handleNavigate("admindashboard")}>
        Dashboard
      </button>
      <button onClick={() => handleNavigate("adminlogin")}>Login</button>
      <button onClick={() => handleNavigate("adminreport")}>Repost</button>
    </nav>
  );
};

export default AdminNavbar;
