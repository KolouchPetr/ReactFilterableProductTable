import React from "react";

function SearchBar(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={props.filterText}
        onChange={props.handleSearchTextChange}
      />
      <input
        type="checkbox"
        value={props.isStockOnly}
        checked={props.isStockOnly}
        onChange={props.handleCheckboxChange}
      />{" "}
      Only show products in stock
    </div>
  );
}

export default SearchBar;
