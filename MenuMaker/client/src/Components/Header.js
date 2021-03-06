import React from "react";
import { Button, ButtonGroup, Navbar, NavbarBrand } from "reactstrap";

class Header extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <Navbar color="dark" dark>
          <NavbarBrand href="/" style={{ color: "white" }}>
            MenuMaker
          </NavbarBrand>
          <ButtonGroup>
            <Button outline>
              <img className="navIcon" alt="Recipes Made" src="https://image.flaticon.com/icons/png/512/45/45332.png" />
            </Button>
            <Button outline>
              <img
                className="navIcon"
                alt="Favorite Recipes"
                src="https://image.flaticon.com/icons/png/512/637/637178.png"
              />
            </Button>
          </ButtonGroup>
        </Navbar>
      </React.Fragment>
    );
  }
}
export default Header;
