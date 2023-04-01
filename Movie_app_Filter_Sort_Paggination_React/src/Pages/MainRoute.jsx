import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Admin/Dashboard";
import EditMovie from "./Admin/EditMovie";
import Login from "./Admin/Login";
import Report from "./Admin/Report";
import Home from "./Home";
import Movie from "./User/Movie";
import Signin from "./User/Signin";
import Signup from "./User/Signup";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admindashboard" element={<Dashboard />} />
      <Route path="/adminlogin" element={<Login />} />
      <Route path="/adminreport" element={<Report />} />
      <Route path="/editmovie/:id" element={<EditMovie />} />
      <Route path="/usermovie" element={<Movie />} />
      <Route path="/usersignup" element={<Signup />} />
      <Route path="/usersignin" element={<Signin />} />
      <Route path="*" element={<h3>Page Not Found</h3>} />
    </Routes>
  );
};

export default MainRoute;
