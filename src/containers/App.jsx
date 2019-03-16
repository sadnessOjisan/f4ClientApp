import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import List from "./List";

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
