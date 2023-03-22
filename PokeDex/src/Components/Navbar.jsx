import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Link to={"./"}>Home</Link>
      <Link to={"./pokemon"}>Pokemon</Link>
      <Link to={"./types"}>Types</Link>
      <Link to={"./favorites"}>Favorites</Link>
    </div>
  );
};

export default Navbar;
