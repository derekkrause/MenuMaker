import React from "react";
import "../index.css";

class LandingPage extends React.Component {
  render() {
    return (
      <div
        className="container-fluid landingContainer"
        style={{ backgroundImage: "url('https://image.ibb.co/i2ajS9/hardwood_material_rough_935875.jpg')" }}
      >
        <div className="title">
          <span className="border">What Can I Make?</span>
        </div>
      </div>
    );
  }
}
export default LandingPage;
