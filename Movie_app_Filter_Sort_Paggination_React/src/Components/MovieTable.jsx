import { Button } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteMovie, getMovies } from "../Redux/main/action";
import "./style.css";

const MovieTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.mainReducer.movies);

  useEffect(() => {
    if (movies.length === 0) {
      dispatch(getMovies());
    }
  }, [movies.lenght]);

  const handleDelete = (id) => {
    dispatch(deleteMovie(id));
    alert("Movie Data has been deleted");
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Director</th>
            <th>Year</th>
            <th>Genre</th>
            <th>Rating</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        {movies.length &&
          movies.map((item) => (
            <tbody key={item.id}>
              <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.director}</td>
                <td>{item.year}</td>
                <td>{item.genre}</td>
                <td>{item.IMDB_Rating}</td>
                <td>
                  <Button onClick={() => navigate(`/editmovie/${item.id}`)}>
                    Edit
                  </Button>
                </td>
                <td>
                  <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                </td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
};

export default MovieTable;
