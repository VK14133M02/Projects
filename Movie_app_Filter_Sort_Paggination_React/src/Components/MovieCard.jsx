import { Button } from "@chakra-ui/react";
import React from "react";
import "./style.css";

const MovieCard = ({
  poster,
  title,
  director,
  year,
  genre,
  IMDB_Rating,
  ticket,
}) => {
  return (
    <div id="movie">
      <img src={poster} alt="poster" width={"100%"} />
      <h1>{title}</h1>
      <p>Director : {director}</p>
      <p>Year : {year}</p>
      <p>Genre {genre}</p>
      <p>Rating : {IMDB_Rating}</p>
      <p>Ticket Price : {ticket}</p>
      <Button>Book Now</Button>
    </div>
  );
};

export default MovieCard;
