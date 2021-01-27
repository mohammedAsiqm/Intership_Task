import React, { useState } from "react";
import { Checkbox } from "@material-ui/core";

function Checkboxfunction(props) {
  const [Check, setCheck] = useState(false);
  return (
    <Checkbox
      color={"primary"}
      size={"small"}
      checked={Check}
      onChange={() => {
        if (Check === false) {
          setCheck(true);
        } else {
          setCheck(false);
        }
        props.IsCheck(Check);
      }}
    />
  );
}

export default Checkboxfunction;
