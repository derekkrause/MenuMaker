import React from "react";
import "./index.css";
import asyncComponent from "./Components/util/asyncComponent";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
// import { connect } from "react-redux";
// import axios from "axios";

const LandingAsyncComponent = asyncComponent(() => import("./Components/LandingPage"));
const MainAsyncComponent = asyncComponent(() => import("./Components/MainPage"));

class App extends React.Component {
  state = {
    open: false
  };

  render() {
    const { match } = this.props;
    return (
      <div className="App">
        <Switch>
          <Route path={`${match.url}`} component={LandingAsyncComponent} />
          <Route path={`${match.url}/main`} component={MainAsyncComponent} />
        </Switch>
      </div>
    );
  }
}

export default App;
