import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "./layouts/Admin.js";

import "./assets/css/material-dashboard-react.css?v=1.8.0";

const App = () => {
  const hist = createBrowserHistory();
  return (
    <Router history={hist}>
      <Switch>
        <Route path="/admin" component={Admin} />

        <Redirect from="/" to="/admin/dashboard" />
      </Switch>
    </Router>
  );
};

export default App;
