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
import Checkbox from "../../Controls/Checkbox";
import SignIn from "../../Controls/Submit";
import Link from "../../Controls/Link";
import { useHistory } from "react-router-dom";
import { SigninStorage } from "../../../API/LocalStorage";

function Signin(props) {
  const styleclass = useStyle();
  const [data, setdata] = useState({ email: "", password: "" });
  const history = useHistory();

  const OnSubmit = (e) => {
    e.preventDefault();
    SigninStorage(data);
  };
  return (
    <Grid
      container
      justify={"center"}
      alignItems={"center"}
      alignContent={"center"}
      className={styleclass.root}
    >
      <Grid item xs={10} sm={7} lg={3} xl={3}>
        <form onSubmit={OnSubmit}>
          <Paper elevation={10} className={styleclass.paper}>
            <Grid container justify={"center"} alignItems={"center"}>
              <Grid item xs={12}>
                <Typography variant={"h4"} className={styleclass.Typography}>
                  Log in!
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} lg={12}>
                <FormControl required>
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
                    control={<Checkbox IsCheck={() => null} />}
                    label={"Remember me"}
                  />
                  <br />
                  <SignIn Value={"Log in"} />
                  <br />
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Link Name={"Create new account"} Path={"/signup"} />
                    <Link Name={"forgot password?"} Path={"/login"} />
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
