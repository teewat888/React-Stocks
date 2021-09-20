import React from "react";

const SearchBar = ({ filterByType, handleSort, sortAlphabet, sortPrice }) => {
  const handleSelect = (e) => {
    filterByType(e.target.value);
  };

  const handleOnChange = (e) => {
    handleSort(e);
  };

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          checked={sortAlphabet}
          onChange={handleOnChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          checked={sortPrice}
          onChange={handleOnChange}
        />
        Price
      </label>
      <br />

      <label>
        <strong>Filter:</strong>
        <select onChange={handleSelect}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
};

export default SearchBar;
