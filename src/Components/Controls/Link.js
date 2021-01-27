import React from "react";
import { Link } from "react-router-dom";
function LinkFunction(props) {
  return (
    <Link to={props.Path} style={{ textDecoration: "none" }}>
      {props.Name}
    </Link>
  );
}

export default LinkFunction;
