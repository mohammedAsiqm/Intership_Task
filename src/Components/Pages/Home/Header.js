import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  Avatar,
  Button,
} from "@material-ui/core";
import { AvatarSrc } from "../../../API/Axios";
import Logo from "../../../Assets/Image/logo.png";

function Header(props) {
  const [Src, setSrc] = useState();

  useEffect(() => {
    let tempSrc = AvatarSrc();
    tempSrc
      .then((response) => setSrc(response.data.download_url))
      .catch((error) => console.log(error));
  }, []);

  const LogoutHandler = () => {
    localStorage.removeItem("loggeduser");
    window.location.href = "/login";
  };

  return (
    <AppBar style={{ backgroundColor: "#403090" }}>
      <Toolbar>
        <Grid container alignItems={"center"}>
          <Grid item xs={0}>
            <img
              src={Logo}
              alt={"logo not found"}
              style={{ width: "45px", height: "40px", marginRight: "4vh" }}
            />
          </Grid>
          <Grid item xs={10}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography> TasksBoard </Typography>
              <Button
                size={"small"}
                style={{ color: "white", marginRight: "5vh" }}
                onClick={LogoutHandler}
              >
                Log out
              </Button>
            </div>
          </Grid>
          <Grid item xs={1}>
            <Avatar src={Src}></Avatar>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
