import React from "react";

function ProductRow(props) {
  let elem = "";
  if (props.stocked === false) {
    elem = <td style={{ color: "red" }}>{props.name}</td>;
  } else {
    elem = <td>{props.name}</td>;
  }

  return (
    <tr>
      {elem}
      <td>{props.price}</td>
    </tr>
  );
}

export default ProductRow;
