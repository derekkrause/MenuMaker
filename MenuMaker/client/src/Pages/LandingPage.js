import React from "react";
import "../index.css";

class LandingPage extends React.Component {
  handleClick = () => {
    this.props.history.push("/main");
    console.log("clicked");
  };

  render() {
    return (
      <div
        className="container-fluid landingContainer"
        style={{ backgroundImage: "url('https://image.ibb.co/i2ajS9/hardwood_material_rough_935875.jpg')" }}
      >
        <div className="title">
          <span href="#" className="border" onClick={this.handleClick}>
            What Can I Make?
          </span>
        </div>
      </div>
    );
  }
}
export default LandingPage;
