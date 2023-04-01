import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  const navigate = useNavigate();
  const navigateUser = () => {
    navigate("/usermovie");
  };
  const navigateAdmin = () => {
    if (!isAuth) {
      navigate("/adminlogin");
      alert("Login First");
    } else {
      navigate("/admindashboard");
    }
  };
  return (
    <nav>
      <button onClick={navigateUser}>User</button>
      <button onClick={navigateAdmin}>Admin</button>
    </nav>
  );
};

export default Navbar;
