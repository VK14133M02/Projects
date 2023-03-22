import React from "react";

const PokemonCard = (details) => {
  const {
    name,
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
      <p>{name}</p>
      <p>{id}</p>
      <p>{weight}</p>
      <p>{height}</p>
      <p>{base_experience}</p>
    </div>
  );
};

export default PokemonCard;
