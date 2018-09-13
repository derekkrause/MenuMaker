import React from "react";
import { Button, ButtonGroup, Input, Navbar, NavbarBrand } from "reactstrap";

class Header extends React.Component {
  render() {
    return (
      <Navbar color="dark" dark>
        <NavbarBrand href="/" style={{ color: "white" }}>
          MenuMaker
        </NavbarBrand>
        <ButtonGroup>
          <Button outline>
            <img className="navIcon" src="https://image.flaticon.com/icons/png/512/45/45332.png" />
          </Button>
          <Button outline>
            <img className="navIcon" src="https://image.flaticon.com/icons/png/512/637/637178.png" />
          </Button>
        </ButtonGroup>
      </Navbar>
    );
  }
}
export default Header;
