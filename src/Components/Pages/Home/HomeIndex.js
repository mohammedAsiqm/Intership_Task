import React, { useState, useEffect } from "react";
import Header from "./Header";
import AddTask from "./AddTask";
import AddIcon from "@material-ui/icons/Add";
import { Fab } from "@material-ui/core";
import DialogAlert from "../../Controls/DialogAlert";
import { useHistory } from "react-router-dom";

function HomeIndex(props) {
  const [DialogOpen, setDialogOpen] = useState(false);
  const history = useHistory();

  useEffect(() => {
    localStorage.getItem("loggeduser") === null
      ? history.push("/login")
      : history.push("/");
  }, []);

  const FabClickHandler = () => {
    setDialogOpen(true);
  };

  const DialogCloseHandler = (e) => {
    setDialogOpen(false);
  };

  return (
    <div>
      <Header />
      <AddTask />
      <Fab
        size={"large"}
        color={"primary"}
        style={{ position: "absolute", bottom: "20px", right: "20px" }}
        onClick={FabClickHandler}
      >
        <AddIcon />
      </Fab>
      <DialogAlert Open={DialogOpen} Close={DialogCloseHandler} />
    </div>
  );
}

export default HomeIndex;
