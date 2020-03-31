import React, { Component } from "react";
import { Container, Image } from "react-bootstrap";
import Earmuffs from "../Assets/Earmuffs.png";
import secondImage from "../Assets/caseStudyOne_2.png";

export default class CaseStudyOne extends Component {
  render() {
    return (
      <Container>
        <h1>Affirmative Racial Gerrymandering</h1>
        <p>
          “The Earmuffs,” or Illinois’ 4th congressional district, connects two
          mainly Hispanic areas.
        </p>
        <Image src={Earmuffs} rounded className="mb-3" />
        <p>
          North Carolina’s 12th congressional district packs many Democrat
          African American voters into a single district.
        </p>
        <Image src={secondImage} rounded />
      </Container>
    );
  }
}
