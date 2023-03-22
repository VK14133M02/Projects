import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SinglePokemon = () => {
  const { name } = useParams();
  const [details, setDetails] = useState([]);

  const getDetails = (name) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => setDetails(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDetails(name);
  }, [name]);

  const {
    id,
    abilities,
    stats,
    weight,
    height,
    moves,
    base_experience,
    sprites,
  } = details;

  return (
    <div>
      <h3>{name}</h3>
      <p>ID : {id}</p>
      <p>Weight : {weight}</p>
      <p>Height : {height}</p>
      <p>Base Exprience : {base_experience}</p>
      <p>Ability :-</p>
      {abilities && abilities.map((ele) => ele.ability.name)}
      <p>Moves :-</p>
      {moves && moves.map((ele) => ele.move.name)}
    </div>
  );
};

export default SinglePokemon;
