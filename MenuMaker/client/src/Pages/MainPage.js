import React from "react";
import Header from "../Components/Header";
import Body from "../Components/Body";

class MainPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div>
          <Body />
        </div>
      </React.Fragment>
    );
  }
}
export default MainPage;
