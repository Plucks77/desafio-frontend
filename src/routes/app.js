import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Payment from "../pages/Payment";
import Logout from "../pages/Logout";

export default function RouterApp() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>

        <Route path="/payment">
          <Payment />
        </Route>

        <Route path="/logout">
          <Logout />
        </Route>

        {/* <Route>
          <Redirect to="/xxx" />
        </Route> */}
      </Switch>
    </Router>
  );
}
