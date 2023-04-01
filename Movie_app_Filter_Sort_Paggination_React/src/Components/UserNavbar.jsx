import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./style.css";

const UserNavbar = () => {
  const navigate = useNavigate();
  const handleNavigate = (page) => {
    navigate(`/${page}`);
  };
  return (
    <nav>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => handleNavigate("usermovie")}>Movie</button>
      <button onClick={() => handleNavigate("usersignup")}>Signup</button>
      <button onClick={() => handleNavigate("usersignin")}>Signin</button>
    </nav>
  );
};

export default UserNavbar;
