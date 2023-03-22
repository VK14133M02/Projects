import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Pokemon = () => {
  const [offset, setOffset] = useState(0);
  const [pokemon, setPokemon] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPokemon(offset);
  }, [offset]);

  const handlePaggination = (val) => {
    setOffset((prev) => prev + val);
  };

  const getPokemon = (offset) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
      .then((res) => setPokemon(res.data.results))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {pokemon.length &&
        pokemon.map((item) => (
          <div key={item.url}>
            <h3 onClick={() => navigate(`/pokemon/${item.name}`)}>
              {item.name}
            </h3>
          </div>
        ))}

      <button disabled={offset === 0} onClick={() => handlePaggination(-20)}>
        Previous
      </button>
      <button onClick={() => handlePaggination(20)}>Next</button>
    </div>
  );
};

export default Pokemon;
