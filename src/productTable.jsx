import React from "react";

import ProductRow from "./productRow";
import ProductCategoryRow from "./productCategoryRow";

class ProductTable extends React.Component {
  render() {
    let filterText = this.props.filterText;
    let isStockOnly = this.props.isStockOnly;
    let rows = [];
    let lastCategory = "";

    this.props.items.forEach((item) => {
      if (isStockOnly && !item.stocked) {
        return;
      }
      if (item.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return;
      }
      if (item.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={item.category}
            key={item.category}
          ></ProductCategoryRow>
        );
      }
      rows.push(
        <ProductRow
          name={item.name}
          price={item.price}
          stocked={item.stocked}
          key={item.name}
        ></ProductRow>
      );
      lastCategory = item.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default ProductTable;
