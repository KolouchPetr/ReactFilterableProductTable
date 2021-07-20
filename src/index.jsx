import React from "react";
import ReactDOM from "react-dom";

import FilterableProductTable from "./filterableProductTable";

class App extends React.Component {
  render() {
    return <FilterableProductTable></FilterableProductTable>;
  }
}

ReactDOM.render(<App></App>, document.getElementById("root"));
