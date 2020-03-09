import React, { Component } from "react";
import {
  Nav,
  Navbar,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

export default class NavBar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/home">Gerrymandering</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/history">History</Nav.Link>
            {/* <Nav.Link href="/blank">Other Stuff</Nav.Link> */}
            <NavDropdown title="Case Studies" id="basic-nav-dropdown">
              <NavDropdown.Item href="/caseStudy1">1</NavDropdown.Item>
              <NavDropdown.Item href="/caseStudy2">2 </NavDropdown.Item>
              <NavDropdown.Item href="/caseStudy3">3</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/gettingInvolved">Getting Involved</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
