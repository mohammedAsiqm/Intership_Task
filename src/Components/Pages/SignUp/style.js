import { makeStyles } from "@material-ui/core";

const Styles = makeStyles({
  root: {
    width: "100%",
    height: "100vh",
    "& .MuiFormControl-root": {
      minWidth: "100%",
    },
    "& .MuiInputLabel-outlined": {
      color: "#002984",
    },
    "& .Mui-focused": {
      color: "#3f51b5",
    },
    "& .MuiInputBase-input": {
      border: ".1px solid lightblue",
      color: "#002984",
    },
  },

  paper: {
    padding: "1cm",
    height: "9cm",
  },
  Typography: {
    textAlign: "center",
    color: "#002984",
    fontSize: "25px",
  },
});

export default Styles;
