import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import FilterStock from "../Components/FilterStock";
import SortStock from "../Components/SortStock";
import StockCard from "../Components/StockCard";
import { getStocks } from "../Redux/company/action";

const Stock = () => {
  const stocks = useSelector((store) => store.companyReducer.stocks);
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (location || stocks.length === 0) {
      const getCompaneyParams = {
        params: {
          company_type: searchParams.getAll("company_type"),
        },
      };
      dispatch(getStocks(getCompaneyParams));
    }
  }, [stocks.length, dispatch, location.search]);

  return (
    <Flex>
      <Box>
        <SortStock />
        <FilterStock />
      </Box>
      <SimpleGrid columns={[2, 3, 4]} spacing={"20px"} width="80%" m={"auto"}>
        {stocks.length > 0 &&
          stocks.map((item) => <StockCard key={item.id} {...item} />)}
      </SimpleGrid>
    </Flex>
  );
};

export default Stock;
