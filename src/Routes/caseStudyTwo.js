import React, { Component } from "react";
import { Container, Image } from "react-bootstrap";
import first from "../Assets/caseStudyTwo_1.png";
import second from "../Assets/caseStudyTwo_2.png";

export default class CaseStudyTwo extends Component {
  render() {
    return (
      <Container>
        <h1>Partisan Gerrymandering</h1>
        <p>
          Utah’s 2nd congressional district was gerrymandered to favor
          Republican voters and dilute the Democrat votes of Salt Lake City.
        </p>
        <Image src={first} rounded className="mb-3" />
        <p>
          Maryland’s 3rd congressional district was drawn to favor Democrat
          voters.
        </p>
        <Image src={second} rounded />
      </Container>
    );
  }
}
