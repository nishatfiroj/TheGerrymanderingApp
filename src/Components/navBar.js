import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

export default class NavBar extends Component {
  render() {
    return (
      <Navbar style={{ backgroundColor: "#6497b1" }} expand="lg">
        <Navbar.Brand href="/home">Gerrymandering</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/history">History</Nav.Link>
            {/* <Nav.Link href="/blank">Other Stuff</Nav.Link> */}
            <NavDropdown title="Case Studies" id="basic-nav-dropdown">
              <NavDropdown.Item href="/caseStudy1">
                Affirmative Racial Gerrymandering
              </NavDropdown.Item>
              <NavDropdown.Item href="/caseStudy2">
                Partisan Gerrymandering{" "}
              </NavDropdown.Item>
              <NavDropdown.Item href="/caseStudy3">
                Fair Gerrymandering{" "}
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/gettingInvolved">Getting Involved</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
