import React, { useState } from "react";
import "./filter.css";
const Search = ({ data, setFilterData }) => {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    const pattern = new RegExp(value, "ig");
    const matchString = (val) => {
      return val.search(pattern) > -1;
    };
    const deepSort = (obj) => {
      const keys = Object.keys(obj);
      const found = keys.filter((k) => {
        if (typeof obj[k] === "string") {
          return matchString(obj[k]);
        }
        if (obj[k] instanceof Object) {
          const Json = JSON.stringify(obj[k]);
          return matchString(Json);
        }
        return false;
      });
      return found.length;
    };

    const filterData = data.filter((d, i) => {
      return deepSort(d);
    });
    setFilterData(filterData);
  };
  return (
    <div className="search">
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="button" onClick={handleChange}>
        Search
      </button>
    </div>
  );
};

export default Search;
