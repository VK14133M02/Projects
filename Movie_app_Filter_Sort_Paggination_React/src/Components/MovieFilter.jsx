import { Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const MovieFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const genreParmams = searchParams.getAll("genre");
  const [genre, setGenre] = useState(genreParmams || []);
  const sortParams = searchParams.get("sort");
  const [sort, setSortBy] = useState(sortParams || "");
  const pageParams = searchParams.get("page");
  const [page, setPage] = useState(Number(pageParams) || 1);

  const handleFilter = (e) => {
    const newGenre = [...genre];
    if (newGenre.includes(e.target.value)) {
      newGenre.splice(newGenre.indexOf(e.target.value), 1);
    } else {
      newGenre.push(e.target.value);
    }
    setGenre(newGenre);
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  const handlePaggination = (val) => {
    setPage((prev) => prev + val);
  };

  useEffect(() => {
    let params = {};
    params.genre = genre;
    sort && (params.sort = sort);
    params.page = page;
    setSearchParams(params);
  }, [genre, sort, page]);

  return (
    <div>
      <h3>Filter</h3>
      <div>
        <input
          type="checkbox"
          value="Action"
          onChange={handleFilter}
          checked={genre.includes("Action")}
        />
        <label>Action</label>
        <br />

        <input
          type="checkbox"
          value="Comedy"
          onChange={handleFilter}
          checked={genre.includes("Comedy")}
        />
        <label>Comedy</label>
        <br />

        <input
          type="checkbox"
          value="Horror"
          onChange={handleFilter}
          checked={genre.includes("Horror")}
        />
        <label>Horror</label>
        <br />

        <input
          type="checkbox"
          value="Romance"
          onChange={handleFilter}
          checked={genre.includes("Romance")}
        />
        <label>Romance</label>
      </div>
      <h3>Sort By Ticket Price</h3>
      <div onChange={handleSort}>
        <input
          type="radio"
          value="asc"
          name="sortBy"
          defaultChecked={sort === "asc"}
        />
        <label>Rating : Low to High</label>
        <br />
        <input
          type="radio"
          value="desc"
          name="sortBy"
          defaultChecked={sort === "desc"}
        />
        <label>Rating : High to Low</label>
      </div>

      <div>
        <Button disabled={page <= 1} onClick={() => handlePaggination(-1)}>
          - Prev
        </Button>
        <Button>{page}</Button>
        <Button onClick={() => handlePaggination(1)}>Next +</Button>
      </div>
    </div>
  );
};

export default MovieFilter;
