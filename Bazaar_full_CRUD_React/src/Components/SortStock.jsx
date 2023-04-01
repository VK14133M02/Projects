import { Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SortStock = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSortBy] = useState("");
  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  sort && console.log(sort);

  useEffect(() => {
    let params = {};
    sort && (params.sort = sort);
    setSearchParams(params);
  }, [sort, setSearchParams]);

  return (
    <div>
      <Text>Sort By Price</Text>
      <div onChange={handleSort}>
        <div>
          <input type="radio" value="asc" name="sortBy" />
          <label> Price - Low to High</label>
        </div>
        <div>
          <input type="radio" value="desc" name="sortBy" />
          <label> Price - High to Low</label>
        </div>
      </div>
    </div>
  );
};

export default SortStock;
