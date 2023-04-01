import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import EditStock from "./EditStock";
import Home from "./Home";
import Login from "./Login";
import Portfolio from "./Portfolio";
import Register from "./Register";
import Stock from "./Stock";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/stocks" element={<Stock />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/editstock/:id" element={<EditStock />} />
        <Route path="*" element={"Error 404 , page Not Found"} />
      </Routes>
    </div>
  );
};

export default MainRoute;
