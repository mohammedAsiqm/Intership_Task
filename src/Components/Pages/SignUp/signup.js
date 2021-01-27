import React, { useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  FormControl,
  FormControlLabel,
} from "@material-ui/core";
import useStyle from "./style";
import Email from "../../Controls/TextField";
import Password from "../../Controls/TextField";
import Username from "../../Controls/TextField";
import Checkbox from "../../Controls/Checkbox";
import SignUp from "../../Controls/Submit";
import Link from "../../Controls/Link";
import { useHistory } from "react-router-dom";
import { SignupStorage } from "../../../API/LocalStorage";

function Signin(props) {
  const styleclass = useStyle();
  const [data, setdata] = useState({ email: "", password: "", username: "" });
  const [disable, setDisable] = useState(true);
  const history = useHistory();

  const OnSubmit = (e) => {
    e.preventDefault();
    SignupStorage(data);
    history.push("/login");
  };
  return (
    <Grid
      container
      justify={"center"}
      alignItems={"center"}
      alignContent={"center"}
      className={styleclass.root}
    >
      <Grid item xs={10} sm={7} lg={4} xl={4}>
        <form onSubmit={OnSubmit}>
          <Paper elevation={10} className={styleclass.paper}>
            <Grid container justify={"center"} alignItems={"center"}>
              <Grid item xs={12}>
                <Typography variant={"h4"} className={styleclass.Typography}>
                  Sign Up
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} lg={12}>
                <FormControl required>
                  <br />
                  <Username
                    Value={(e) => setdata({ ...data, username: e })}
                    label={"Username"}
                    type={"text"}
                  />
                  <br />
                  <Email
                    Value={(e) => setdata({ ...data, email: e })}
                    label={"Email"}
                    type={"text"}
                  />
                  <br />
                  <Password
                    label="Password"
                    type={"Password"}
                    Value={(e) => setdata({ ...data, password: e })}
                  />
                  <br />
                  <FormControlLabel
                    control={<Checkbox IsCheck={(e) => setDisable(e)} />}
                    label={"I accept the terms & conditions"}
                  />
                  <br />
                  <SignUp Value={"Sign up"} disabled={disable} />
                  <br />
                  <div style={{ textAlign: "center" }}>
                    <Link Name={"Already have an account"} Path={"/login"} />
                  </div>
                </FormControl>
              </Grid>
            </Grid>
          </Paper>
        </form>
      </Grid>
    </Grid>
  );
}

export default Signin;
