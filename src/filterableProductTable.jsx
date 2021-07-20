import React from "react";

import ProductTable from "./productTable";
import SearchBar from "./searchBar";
import items from "./items";

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      isStockOnly: false,
    };
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleSearchTextChange(e) {
    this.setState({ filterText: e.target.value });
  }

  handleCheckboxChange() {
    this.setState((prevState) => ({
      isStockOnly: !prevState.isStockOnly,
    }));
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          isStockOnly={this.state.isStockOnly}
          handleSearchTextChange={this.handleSearchTextChange}
          handleCheckboxChange={this.handleCheckboxChange}
        ></SearchBar>
        <ProductTable
          items={items}
          filterText={this.state.filterText}
          isStockOnly={this.state.isStockOnly}
        ></ProductTable>
      </div>
    );
  }
}

export default FilterableProductTable;
