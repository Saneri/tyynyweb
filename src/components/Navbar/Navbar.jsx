import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

class MainNavbar extends Component {
  state = {};
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Navbar.Brand href="#">TyynyWeb</Navbar.Brand>
            <Nav.Link href="#">Kuvat</Nav.Link>
            <Nav.Link href="#">Discord</Nav.Link>
            <Nav.Link href="#">Telegram</Nav.Link>
            <Nav.Link href="#">Äänestykset</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MainNavbar;
