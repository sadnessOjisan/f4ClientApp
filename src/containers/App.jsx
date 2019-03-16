import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import List from "./List";
import reset from "../vendor/reset.css";
import normal from "../vendor/normal.css";

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <Switch>
        <Route path="/" component={List} exact />
      </Switch>
    );
  }
}

export default App;
