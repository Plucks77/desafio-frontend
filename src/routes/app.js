import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "../pages/Home";
import Cart from "../pages/Cart";
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

        <Route path="/logout">
          <Logout />
        </Route>

        <Route>
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Router>
  );
}
