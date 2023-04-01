import { SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getStocks, updateStocks } from "../Redux/company/action";

const EditStock = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const stocks = useSelector((store) => store.companyReducer.stocks);

  const [currentStock, setCurrentStock] = useState({
    company_logo: "",
    company_name: "",
    company_type: "",
    stock_exchange: "",
    total_shares: "",
    cost_per_share: "",
    price_action: "",
  });

  const {
    company_logo,
    company_name,
    total_shares,
    cost_per_share,
    price_action,
  } = currentStock;

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateStocks(id, currentStock));
    alert("Updated!");
  };

  let name, value;
  const handleUpdateInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setCurrentStock({ ...currentStock, [name]: value });
  };

  useEffect(() => {
    if (stocks.length === 0) {
      dispatch(getStocks());
    }
  }, [stocks.length]);

  useEffect(() => {
    if (id) {
      let share = stocks.find((item) => item.id === Number(id));
      share && setCurrentStock(share);
    }
  }, [id, stocks]);

  return (
    <div>
      <form onSubmit={handleUpdate}>
        <SimpleGrid
          column={1}
          width="30%"
          margin={"auto"}
          padding="20px"
          marginTop="5rem"
        >
          <input
            type="url"
            name="company_logo"
            value={company_logo}
            onChange={handleUpdateInput}
            placeholder="image.url"
          />

          <input
            type="text"
            name="company_name"
            value={company_name}
            onChange={handleUpdateInput}
            placeholder="Company Name"
          />

          <select
            onChange={(e) => {
              const currentCompany = e.target.value;
              setCurrentStock({
                ...currentStock,
                company_type: currentCompany,
              });
            }}
            value={currentStock.company_type}
          >
            <option value="Bank">Bank</option>
            <option value="IT">IT</option>
            <option value="Automobile">Automobile</option>
            <option value="Pharma">Pharma</option>
            <option value="Oil">Oil</option>
          </select>

          <select
            onChange={(e) => {
              let currentExchange = e.target.value;
              setCurrentStock({
                ...currentStock,
                stock_exchange: currentExchange,
              });
            }}
            value={currentStock.stock_exchange}
          >
            <option value="BSE">BSE</option>
            <option value="NSE">NSE</option>
          </select>

          <input
            type="number"
            name="total_shares"
            value={total_shares}
            onChange={handleUpdateInput}
            placeholder="Total Shares"
          />

          <input
            type="number"
            name="cost_per_share"
            value={cost_per_share}
            onChange={handleUpdateInput}
            placeholder="Cost Per Share"
          />

          <input
            type="number"
            name="price_action"
            value={price_action}
            onChange={handleUpdateInput}
            placeholder="Price Action"
          />

          <select
            onChange={(e) => {
              const liveStatus = e.target.value === "true" ? true : false;
              setCurrentStock({ ...currentStock, is_live: liveStatus });
            }}
            value={currentStock.is_live}
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>

          <input type="submit" value="Update" />
        </SimpleGrid>
      </form>
    </div>
  );
};

export default EditStock;
