import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import PageNotFound from "../pages/PageNotFound";

export default function RouterApp() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}
