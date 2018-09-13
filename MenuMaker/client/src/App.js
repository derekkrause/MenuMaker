import React from "react";
import "./index.css";
import asyncComponent from "./util/asyncComponent";
import { withRouter, Route, Switch } from "react-router-dom";
// import { connect } from "react-redux";
// import axios from "axios";

const LandingAsyncComponent = asyncComponent(() => import("./Pages/LandingPage"));
const MainAsyncComponent = asyncComponent(() => import("./Pages/MainPage"));

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingAsyncComponent} />
          <Route exact path="/main/" component={MainAsyncComponent} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
