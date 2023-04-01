import { FormLabel, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterStock = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.getAll("company_type");
  const [companey, setCompaney] = useState(initialCategory || []);

  const handleFilter = (e) => {
    const newCompaney = [...companey];
    if (newCompaney.includes(e.target.value)) {
      newCompaney.splice(newCompaney.indexOf(e.target.value), 1);
    } else {
      newCompaney.push(e.target.value);
    }
    setCompaney(newCompaney);
  };

  useEffect(() => {
    if (companey) {
      let params = {};
      params.company_type = companey;
      setSearchParams(params);
    }
  }, [companey, setSearchParams]);

  return (
    <div>
      <h2>Filter</h2>
      <div style={{ textAlign: "left", marginLeft: "1rem" }}>
        <input
          type="checkbox"
          value={"Bank"}
          onChange={handleFilter}
          checked={companey.includes("Bank")}
        />
        <label> Bank</label>
        <br />

        <input
          type="checkbox"
          value={"IT"}
          onChange={handleFilter}
          checked={companey.includes("IT")}
        />
        <label> IT</label>
        <br />

        <input
          type="checkbox"
          value={"Automobile"}
          onChange={handleFilter}
          checked={companey.includes("Automobile")}
        />
        <label> Automobile</label>
        <br />

        <input
          type="checkbox"
          value={"Pharma"}
          onChange={handleFilter}
          checked={companey.includes("Pharma")}
        />
        <label> Pharma</label>
        <br />

        <input
          type="checkbox"
          value={"Oil"}
          onChange={handleFilter}
          checked={companey.includes("Oil")}
        />
        <label> Oil</label>
      </div>
    </div>
  );
};

export default FilterStock;
