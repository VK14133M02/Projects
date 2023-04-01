import { Flex, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import MovieCard from "../../Components/MovieCard";
import MovieFilter from "../../Components/MovieFilter";
import UserNavbar from "../../Components/UserNavbar";
import { getMovies } from "../../Redux/main/action";

const Movie = () => {
  const movies = useSelector((store) => store.mainReducer.movies);
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (location || movies.length === 0) {
      const sortBy = searchParams.get("sort");
      const page = searchParams.get("page");
      const genreFilterParams = {
        params: {
          genre: searchParams.getAll("genre"),
          _sort: sortBy && "IMDB_Rating",
          _order: sortBy,
          _page: page,
          _limit: 2,
        },
      };
      dispatch(getMovies(genreFilterParams));
    }
  }, [movies.length, location.search]);

  return (
    <div>
      <UserNavbar />
      <Flex>
        <MovieFilter />
        <SimpleGrid width={"90%"} margin="auto" columns={[2, 3, 4]}>
          {movies.length &&
            movies.map((item) => {
              return <MovieCard key={item.id} {...item} />;
            })}
        </SimpleGrid>
      </Flex>
    </div>
  );
};

export default Movie;
