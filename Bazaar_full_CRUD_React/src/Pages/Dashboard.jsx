import { SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import StocksTable from "../Components/StocksTable";
import { postStocks } from "../Redux/company/action";

const initialState = {
  company_logo: "",
  company_name: "",
  company_type: "",
  stock_exchange: "",
  total_shares: "",
  cost_per_share: "",
  price_action: "",
  is_live: false,
};

const Dashboard = () => {
  const [data, setData] = useState(initialState);
  const dispatch = useDispatch();

  const {
    company_logo,
    company_name,
    company_type,
    stock_exchange,
    total_shares,
    cost_per_share,
    price_action,
  } = data;

  let name, value;
  const handleStockInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      company_logo &&
      company_name &&
      company_type &&
      stock_exchange &&
      total_shares &&
      cost_per_share &&
      price_action
    ) {
      dispatch(postStocks(data));
      alert("New Stock has been Listed!");
      setData(initialState);
    } else {
      alert("Fill all the Details!");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
            onChange={handleStockInput}
            placeholder="image.url"
          />

          <input
            type="text"
            name="company_name"
            value={company_name}
            onChange={handleStockInput}
            placeholder="Company Name"
          />

          <select
            name="company_type"
            value={company_type}
            onChange={handleStockInput}
          >
            <option value="">Select Company Type</option>
            <option value="Bank">Bank</option>
            <option value="IT">IT</option>
            <option value="Automobile">Automobile</option>
            <option value="Pharma">Pharma</option>
            <option value="Oil">Oil</option>
          </select>

          <select
            name="stock_exchange"
            value={stock_exchange}
            onChange={handleStockInput}
          >
            <option value="">Select Stock Exchange</option>
            <option value="NSE">NSE</option>
            <option value="BSE">BSE</option>
          </select>
          <input
            type="number"
            name="total_shares"
            value={total_shares}
            onChange={handleStockInput}
            placeholder="Total Shares"
          />

          <input
            type="number"
            name="cost_per_share"
            value={cost_per_share}
            onChange={handleStockInput}
            placeholder="Cost Per Share"
          />

          <input
            type="number"
            name="price_action"
            value={price_action}
            onChange={handleStockInput}
            placeholder="Price Action"
          />

          <input type="submit" value="List Share" />
        </SimpleGrid>
      </form>
      <StocksTable />
    </div>
  );
};

export default Dashboard;
