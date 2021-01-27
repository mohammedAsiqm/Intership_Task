import React, { useState } from "react";
import { InputBase, Fab, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch } from "react-redux";
import { ADDTASK, INCREAMENTTOTALTASK } from "../../Redux/Action";
import DialogAlert from "./DialogAlert";

const Customize = makeStyles({
  divWraper: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
});

function NewTask(props) {
  const Styles = Customize();
  const DispatchAction = useDispatch();
  const [UserTask, setUserTask] = useState({
    taskName: "",
  });

  const AddButtonHandler = () => {
    if (UserTask.taskName.trim() === "") {
      alert("task cannot be empty");
    } else {
      DispatchAction(ADDTASK(UserTask));
      DispatchAction(INCREAMENTTOTALTASK());
      setUserTask({ taskName: "" });
    }
  };

  return (
    <div className={Styles.divWraper}>
      <InputBase
        value={UserTask.taskName}
        onChange={(e) => setUserTask({ ...UserTask, taskName: e.target.value })}
        placeholder={"New Task"}
      />
      <Fab size={"small"} color={"primary"} onClick={AddButtonHandler}>
        <AddIcon />
      </Fab>
    </div>
  );
}

export default NewTask;

/******************* */

export const AddTaskDesign2 = () => {
  const [DialogOpen, setDialogOpen] = useState(false);

  const DialogCloseHandler = (e) => {
    setDialogOpen(false);
  };

  const ClickHandler = () => {
    setDialogOpen(true);
  };
  return (
    <>
      <div
        size={"small"}
        onClick={ClickHandler}
        style={{ marginBottom: "8px", cursor: "pointer" }}
      >
        <Fab
          size={"small"}
          color={"primary"}
          style={{ marginRight: "15px", width: "35px", height: "25px" }}
        >
          <AddIcon />
        </Fab>
        <h4 style={{ display: "inline-block", color: "#352681" }}>Add Task</h4>
      </div>
      <div
        style={{
          width: "100%",
          height: "1px",
          margin: "4px 0px 15px 0px",
          backgroundColor: "#352681",
          opacity: 0.5,
        }}
      ></div>
      <DialogAlert Open={DialogOpen} Close={DialogCloseHandler} />
    </>
  );
};
