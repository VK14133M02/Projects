import React from "react";
import { Route, Routes } from "react-router-dom";
import Favorites from "./Favorites";
import Home from "./Home";
import Pokemon from "./Pokemon";
import SinglePokemon from "./SinglePokemon";
import SingleTypes from "./SingleTypes";
import Types from "./Types";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/pokemon/:name" element={<SinglePokemon />} />
        <Route path="/types" element={<Types />} />
        <Route path="/types/:id" element={<SingleTypes />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/*" element={"Error 404 , Page Not Found"} />
      </Routes>
    </div>
  );
};

export default MainRoute;
