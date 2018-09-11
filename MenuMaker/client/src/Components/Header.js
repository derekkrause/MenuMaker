import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

class Header extends React.Component {

  render() {
    return (
        <Navbar color='dark' dark>
        <NavbarBrand href='/'>What's on the Menu?</NavbarBrand>
      </Navbar>
    )
  }
}
export default Header;