import React, { useState } from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const DateConvertor = (date) => {
  const month = new Date(date).getMonth();
  const UserDate = new Date(date).getDate();
  switch (month) {
    case 0:
      return `Jan  ${UserDate}`;
    case 1:
      return `Feb  ${UserDate}`;
    case 2:
      return `Mar  ${UserDate}`;
    case 3:
      return `Apr  ${UserDate}`;
    case 4:
      return `May  ${UserDate}`;
    case 5:
      return `Jun  ${UserDate}`;
    case 6:
      return `Jul  ${UserDate}`;
    case 7:
      return `Aug  ${UserDate}`;
    case 8:
      return `Sep  ${UserDate}`;
    case 9:
      return `Oct  ${UserDate}`;
    case 10:
      return `Nov  ${UserDate}`;
    case 11:
      return `Dec  ${UserDate}`;
    default:
      return null;
  }
};

function DatePicker(props) {
  const [date, setDate] = useState();
  return (
    <div style={{ paddingLeft: "10px" }}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          format="dd/MM/yyyy"
          value={date}
          onChange={(e) => {
            setDate(e);
            props.DATE(DateConvertor(e));
          }}
          required
        />
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default DatePicker;
