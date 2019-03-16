import React, { Component } from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import List from "./List";
import DashBoard from "./DashBoard";
import Setting from "./Setting";
import Terms from "./Terms";
import Policy from "./Policy";
import reset from "../vendor/reset.css";
import normal from "../vendor/normal.css";
import SideBar from "../components/SideBar";
class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <Wrapper>
        <SideBar />
        <Switch>
          <Route path="/" component={List} exact />
          <Route path="/dashboard" component={DashBoard} exact />
          <Route path="/setting" component={Setting} exact />
          <Route path="/terms" component={Terms} exact />
          <Route path="/policy" component={Policy} exact />
        </Switch>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;

export default App;
