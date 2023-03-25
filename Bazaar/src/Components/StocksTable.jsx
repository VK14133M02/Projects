import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteStocks, getStocks } from "../Redux/company/action";
import "./nav.css";

const StocksTable = () => {
  const stocks = useSelector((store) => store.companyReducer.stocks);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useState(() => {
    if (stocks.length === 0) {
      dispatch(getStocks());
    }
  }, [stocks.length]);

  const handleDelete = (id) => {
    dispatch(deleteStocks(id));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Company logo</th>
            <th>Company name</th>
            <th>Company Type</th>
            <th>Stock Exchange</th>
            <th>Total shares</th>
            <th>Cost per share</th>
            <th>Price action</th>
            <th>Edit Stock</th>
            <th>Delete Stock</th>
          </tr>
        </thead>
        {stocks.length &&
          stocks.map((item) => (
            <tbody key={item.id}>
              <tr>
                <td>
                  <img
                    src={item.company_logo}
                    width={50}
                    height={10}
                    alt="logo"
                  />
                </td>
                <td>{item.company_name}</td>
                <td>{item.company_type}</td>
                <td>{item.stock_exchange}</td>
                <td>{item.total_shares}</td>
                <td>{item.cost_per_share}</td>
                <td>{item.price_action}</td>
                <td>
                  <Button onClick={() => navigate(`/editstock/${item.id}`)}>
                    Edit
                  </Button>
                </td>
                <td>
                  <Button
                    backgroundColor={"red"}
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
};

export default StocksTable;
