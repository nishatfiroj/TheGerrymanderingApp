import React, { Component } from "react";
import { Container, Image } from "react-bootstrap";
import first from "../Assets/caseStudies/caseStudy1.1.jpg";
import second from "../Assets/caseStudies/caseStudy1.2.jpg";

export default class CaseStudyOne extends Component {
  render() {
    return (
      <Container>
        <h1>Affirmative Racial Gerrymandering</h1>
        <p>
          Illinois’s 4th congressional district was redrawn following the 1990
          census to account for the fact that Latinos were the fastest growing
          demographic group in the state at the time. The district connects
          Chicago’s two Latino-majority populations in an effort to give the
          city’s Latino community the chance to elect someone of their choosing.
          Although the district appears dubious, the so-called “earmuffs” shape
          was designed to avoid diluting the interests of nearby
          African-American communities. Luis Gutiérrez, of Puerto Rican descent,
          served as the U.S. Representative for Illinois’s 4th congressional
          district from 1993 to 2019. He was succeeded by Chuy García, a
          Mexican-born American, in 2019.
        </p>
        <Image src={first} rounded className="mb-3" />
        <p>
          North Carolina’s 12th congressional district was established following
          the 1990 census, when the state gained an additional seat in the U.S.
          House of Representatives. At the time, African-Americans comprised 22%
          of the state’s population and the district’s boundaries were drawn in
          an attempt to boost minority representation. The U.S. Supreme Court
          repeatedly took issue with this minority-majority district, and the
          boundaries of the 12th congressional district were redrawn four times
          through 2010. In 2016, the district was ruled unconstitutional on the
          grounds that race could not be a mitigating factor in drawing
          boundaries. The district is now more compact, though African-Americans
          no longer account for a majority of registered voters.
        </p>
        <Image src={second} rounded />
      </Container>
    );
  }
}
