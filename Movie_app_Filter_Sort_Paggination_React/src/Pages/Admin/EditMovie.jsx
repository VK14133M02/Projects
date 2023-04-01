import { Button, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getMovies, updateMove } from "../../Redux/main/action";

const EditMovie = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const movies = useSelector((store) => store.mainReducer.movies);
  const [currentData, setCurrentData] = useState({
    poster: "",
    title: "",
    director: "",
    year: "",
    genre: "",
    IMDB_Rating: "",
    ticket: "",
  });

  const { poster, title, director, year, IMDB_Rating, ticket } = currentData;

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateMove(id, currentData)).then(() =>
      navigate("/admindashboard")
    );
    alert("Updated");
  };

  let name, value;
  const handleMovieInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setCurrentData({ ...currentData, [name]: value });
  };

  useEffect(() => {
    if (movies.length === 0) {
      dispatch(getMovies());
    }
  }, [movies.length]);

  useState(() => {
    if (id) {
      let film = movies.find((item) => item.id === Number(id));
      film && setCurrentData(film);
    }
  }, [id, movies]);

  return (
    <div>
      <form>
        <SimpleGrid width={"30%"} m="auto" textAlign={"left"} mt="3rem">
          <label>Movie Poster</label>
          <input
            type="url"
            name="poster"
            value={poster}
            placeholder="Image.url"
            onChange={handleMovieInput}
          />

          <label>Title</label>
          <input
            type="text"
            name="title"
            value={title}
            placeholder="Title"
            onChange={handleMovieInput}
          />

          <label>Director</label>
          <input
            type="text"
            name="director"
            value={director}
            placeholder="Director"
            onChange={handleMovieInput}
          />

          <label>Year</label>
          <input
            type="text"
            name="year"
            value={year}
            placeholder="Year"
            onChange={handleMovieInput}
          />
          <label>Genere</label>
          <select
            onChange={(e) => {
              let currentGenre = e.target.value;
              setCurrentData({ ...currentData, genre: currentGenre });
            }}
            value={currentData.genre}
          >
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
          </select>

          <label>IMDB Rating</label>
          <input
            type="text"
            name="IMDB_Rating"
            value={IMDB_Rating}
            placeholder="IMDB Rating"
            onChange={handleMovieInput}
          />

          <label>Tcket Price</label>
          <input
            type="text"
            name="ticket"
            value={ticket}
            placeholder="Tcket Price"
            onChange={handleMovieInput}
          />
          <Button onClick={handleUpdate}>Add Movie</Button>
        </SimpleGrid>
      </form>
    </div>
  );
};

export default EditMovie;
