import React from "react";
import { Button } from "@material-ui/core";

function Submit(props) {
  const val = props.Value;

  return (
    <Button
      variant={"contained"}
      color={"primary"}
      type={"submit"}
      size={"small"}
      disabled={props.disabled}
    >
      {val}
    </Button>
  );
}

export default Submit;
