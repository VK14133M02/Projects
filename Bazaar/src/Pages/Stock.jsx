import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Stock = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    getStocks(page);
  }, [page]);

  let getStocks = (page) => {
    axios
      .get(
        `https://mock-server-m6hv.onrender.com/industry?_page=${page}&_limit=2`
      )
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  console.log(data);

  return <div>Stock</div>;
};

export default Stock;
