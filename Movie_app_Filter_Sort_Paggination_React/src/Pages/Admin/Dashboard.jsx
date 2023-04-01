import { Button, SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AdminNavbar from "../../Components/AdminNavbar";
import MovieTable from "../../Components/MovieTable";
import { postMovie } from "../../Redux/main/action";

const initialState = {
  poster: "",
  title: "",
  director: "",
  year: "",
  genre: "",
  IMDB_Rating: "",
  ticket: "",
};

const Dashboard = () => {
  const [movieData, setMovieData] = useState(initialState);
  const dispatch = useDispatch();

  const { poster, title, director, year, genre, IMDB_Rating, ticket } =
    movieData;
  let name, value;
  const handleMovieInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setMovieData({ ...movieData, [name]: value });
  };

  const handleAddMovie = (e) => {
    e.preventDefault();
    if (poster && title && director && year && genre && IMDB_Rating && ticket) {
      dispatch(postMovie(movieData));
      alert("New Movie Has been added");
    } else {
      alert("Fill all the Details");
    }
  };

  return (
    <div>
      <AdminNavbar />
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
            name="genre"
            value={genre}
            placeholder="Genere"
            onChange={handleMovieInput}
          >
            <option value="">Select Type</option>
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
          <Button onClick={handleAddMovie}>Add Movie</Button>
        </SimpleGrid>
      </form>
      <MovieTable />
    </div>
  );
};

export default Dashboard;
