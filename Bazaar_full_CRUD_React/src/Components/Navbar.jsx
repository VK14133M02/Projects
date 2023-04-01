import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Navbar = () => {
  return (
    <nav>
      <Link to={"/"}>Home</Link>
      <Link to={"/dashboard"}>Dashboard</Link>
      <Link to={"/stocks"}>Stocks</Link>
      <Link to={"/portfolio"}>Portfolio</Link>
      <Link to={"/register"}>Register</Link>
      <Link to={"/login"}>Login</Link>
    </nav>
  );
};

export default Navbar;
