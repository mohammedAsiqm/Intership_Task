import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/HomeIndex";
import Login from "./Components/Pages/SignIn/signin";
import Signup from "./Components/Pages/SignUp/signup";
import { STORE } from "./Redux/Store";
import { Provider } from "react-redux";

function App(props) {
  return (
    <Provider store={STORE}>
      <BrowserRouter>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/signup"} component={Signup} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
