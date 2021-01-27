import React, { useState } from "react";
import {
  makeStyles,
  Typography,
  FormControlLabel,
  Checkbox,
  IconButton,
} from "@material-ui/core";
import CircleIcon from "@material-ui/icons/FiberManualRecordOutlined";
import CheckCircleIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import EditIcon from "@material-ui/icons/CreateOutlined";
import EditDialog from "../../Controls/EditDialog";
import { useDispatch } from "react-redux";
import {
  INCREAMENTTASK,
  DECREAMENTTASK,
  DECREAMENTTOTALTASK,
  REMOVETASK,
} from "../../../Redux/Action";
import "../../Css/ScrollbarRestriction.css";

const Customize = makeStyles({
  divWraper: {
    display: "flex",
    justifyContent: "space-between",
  },
});

function UserAddedTasks(props) {
  const Styles = Customize();
  const [Checked, setChecked] = useState(false);
  const [Color, setColor] = useState("#352681");
  const [DialogOpen, setDialogOpen] = useState(false);
  const [Hidden, setHidden] = useState(true);
  const [additionalInfo, setadditionalInfo] = useState({
    detail: "",
    date: "",
  });
  const DispatchCount = useDispatch();
  const DispatchAction = useDispatch();

  const CheckHandler = (e) => {
    if (Checked === false) {
      setChecked(true);
      setColor("green");
      DispatchCount(INCREAMENTTASK());
    } else {
      setChecked(false);
      setColor("#352681");
      DispatchCount(DECREAMENTTASK());
    }
  };

  const DialogOpenHandler = () => {
    setDialogOpen(true);
  };

  const DialogCloseHandler = () => {
    setDialogOpen(false);
  };

  const MouseOverHandler = () => {
    return additionalInfo.detail === "" ? null : setHidden(false);
  };

  const MouseOutHandler = () => {
    setHidden(true);
  };

  const SaveHandler = (e) => {
    setadditionalInfo({ ...additionalInfo, detail: e.detail, date: e.date });
  };

  const DeleteHandler = () => {
    DispatchAction(DECREAMENTTOTALTASK());
    DispatchAction(REMOVETASK());
    DialogCloseHandler();
  };

  return (
    <div
      onMouseOver={MouseOverHandler}
      onMouseOut={MouseOutHandler}
      id={props.arrayAddress}
    >
      <div className={Styles.divWraper}>
        <FormControlLabel
          control={
            <Checkbox
              checked={Checked}
              onChange={CheckHandler}
              size={"medium"}
              icon={<CircleIcon htmlColor={Color} />}
              checkedIcon={<CheckCircleIcon htmlColor={Color} />}
            />
          }
          label={
            <Typography style={{ color: `${Color}` }}>
              {props.taskname}
            </Typography>
          }
        />
        <IconButton onClick={DialogOpenHandler}>
          <EditIcon htmlColor={"#352681"} />
        </IconButton>
        <EditDialog
          Open={DialogOpen}
          Close={DialogCloseHandler}
          taskname={props.taskname}
          SaveHandler={SaveHandler}
          DeleteHandler={DeleteHandler}
        />
      </div>
      <div hidden={Hidden}>
        <Typography
          component={"h6"}
          style={{ height: "3cm", overflow: "scroll", color: `${Color}` }}
        >
          {additionalInfo.detail}
          <b
            style={{
              color: `${Color}`,
              textAlign: "center",
              display: "block",
              marginTop: "18px",
            }}
          >
            {additionalInfo.date}
          </b>
        </Typography>
      </div>
    </div>
  );
}

export default UserAddedTasks;
