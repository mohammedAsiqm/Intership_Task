import React from "react";
import { TextField } from "@material-ui/core";

function Email(props) {
  return (
    <TextField
      variant={"outlined"}
      size={"small"}
      label={props.label}
      type={props.type}
      fullWidth={true}
      onChange={(e) => {
        props.Value(e.target.value);
      }}
      required
    />
  );
}

export default Email;
