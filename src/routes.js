import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect,
} from "react-router-dom";
import { useAuth } from "./contexts/auth";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

export default function RouterApp() {
  const { singned } = useAuth();
  const history = useHistory();

  useEffect(() => {
    console.log(singned);
    if (!singned) {
      <Redirect to="/login" />;
    } else {
      <Redirect to="/home" />;
    }
  });

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}
