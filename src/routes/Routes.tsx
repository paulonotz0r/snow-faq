import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/home/index";
import NewQuestion from "../pages/newquestion/index";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/newquestion" component={NewQuestion} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
