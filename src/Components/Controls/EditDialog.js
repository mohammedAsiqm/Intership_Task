import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
  IconButton,
  TextField,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import DatePicker from "./DatePicker";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";

const COLOR = "#352681";

const Customize = makeStyles({
  Typography: {
    padding: "10px",
    margin: "3px 0px",
    color: `${COLOR}`,
    "&:hover": {
      cursor: "pointer",
    },
  },
});

function EditDialog(props) {
  const Styles = Customize();
  const [detail, setDetail] = useState();
  const [date, setDate] = useState();

  const DetailHandler = (e) => {
    setDetail(e.target.value);
  };

  const DateHandler = (e) => {
    setDate(e);
  };

  return (
    <Dialog open={props.Open}>
      <DialogTitle>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton onClick={props.DeleteHandler}>
            <DeleteOutlinedIcon htmlColor={COLOR} />
          </IconButton>
          <IconButton onClick={props.Close}>
            <ClearOutlinedIcon htmlColor={COLOR} />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent>
        <DialogContentText style={{ color: `${COLOR}` }}>
          {props.taskname}
        </DialogContentText>
        <TextField
          label="Add Details"
          multiline
          rows={4}
          variant="outlined"
          onChange={DetailHandler}
          style={{ width: "300px" }}
        />
        <div>
          <Typography className={Styles.Typography}> Add date </Typography>
          <DatePicker DATE={DateHandler} />
        </div>
        <div>
          <Typography className={Styles.Typography}>
            Move to another list
          </Typography>
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          style={{ color: `${COLOR}` }}
          onClick={() => {
            props.SaveHandler({ detail, date });
            props.Close();
          }}
        >
          save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditDialog;
