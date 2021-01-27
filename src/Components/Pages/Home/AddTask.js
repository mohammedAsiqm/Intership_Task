import React, { useState } from "react";
import { Paper, Grid, makeStyles, Typography } from "@material-ui/core";
import AddTaskInput from "../../Controls/AddTask";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import UserAddedTasks from "./UserAddedTasks";
import { useSelector } from "react-redux";
import Image from "../../../Assets/Image/todo.png";
import { AddTaskDesign2 } from "../../Controls/AddTask";

const Customize = makeStyles({
  paper: {
    padding: "10px",
    marginTop: "2.5cm",
    border: "1px solid",
    borderTopColor: "blue",
    borderLeftColor: "blue",
    height: "12cm",
    overflow: "scroll",
  },
  Typography: {
    color: "#352681",
  },
  divWraper: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  Image: {
    width: "4cm",
    height: "4cm",
  },
  ImageWrapper: {
    flexDirection: "column",
    textAlign: "center",
    marginTop: "2cm",
  },
});

const CompleteFunction = (props) => {
  return (
    <>
      {props.Completed === 0 ? null : (
        <Typography style={{ color: "green", marginTop: "15px" }}>
          Completed ({props.Completed})
        </Typography>
      )}
    </>
  );
};

export const DefaultImage = (props) => {
  const Styles = Customize();
  const displayValue = props.display;
  return (
    <div className={Styles.ImageWrapper} style={{ display: `${displayValue}` }}>
      <div>
        <img src={Image} alt={"no image found"} className={Styles.Image} />
      </div>
      <div>
        <Typography> No Task Added yet. </Typography>
      </div>
    </div>
  );
};

const ListOFTasks = (props) => {
  const TotalTask = useSelector((state) => state.TotalTask);
  if (TotalTask === 0) {
    return <DefaultImage display={"flex"} />;
  } else {
    return (
      <>
        <DefaultImage display={"none"} />
        {props.Tasks.map((data, index) => {
          return (
            <UserAddedTasks
              key={index}
              arrayAddress={index}
              taskname={data.taskName}
            />
          );
        })}
      </>
    );
  }
};

function AddTask(props) {
  const Styles = Customize();
  const Tasks = useSelector((state) => state.tasks);
  const Completed = useSelector((state) => state.completed);
  const TotalTask = useSelector((state) => state.TotalTask);

  return (
    <Grid container style={{ marginLeft: "13px" }}>
      <Grid item xs={6} sm={5} lg={3}>
        <Paper variant={"elevation"} elevation={6} className={Styles.paper}>
          <div className={Styles.divWraper}>
            <Typography className={Styles.Typography}>My Tasks</Typography>
            <MoreVertIcon />
          </div>
          {TotalTask === 0 ? <AddTaskInput /> : <AddTaskDesign2 />}
          <CompleteFunction Completed={Completed} />
          <div id={"TaskList"}>
            <ListOFTasks Tasks={Tasks} />
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default AddTask;
