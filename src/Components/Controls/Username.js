import React from "react";
import { TextField } from "@material-ui/core";

function Username(props) {
  return (
    <TextField
      error={false}
      variant={"outlined"}
      label={"Username"}
      size={"small"}
      type={"text"}
      onChange={(e) => {
        props.username(e.target.value);
      }}
      required
    />
  );
}

export default Username;
