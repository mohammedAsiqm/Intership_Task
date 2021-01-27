import React, { useState } from "react";
import NewTask from "./AddTask";
import { Dialog, DialogContent } from "@material-ui/core";

function DialogAlert(props) {
  return (
    <Dialog open={props.Open} onClose={props.Close}>
      <DialogContent>
        <NewTask />
      </DialogContent>
    </Dialog>
  );
}

export default DialogAlert;
